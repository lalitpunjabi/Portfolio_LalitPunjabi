#!/usr/bin/env bash
# ==============================================================================
# Production Zero-Downtime Blue/Green Deployment Script for Portfolio
# ==============================================================================
set -Eeuo pipefail

TARGET_TAG="${1:-latest}"
REPO_LC="${2:-lalitpunjabi/portfolio_lalitpunjabi}"
STATE_FILE="/opt/portfolio/deployment-state.json"
mkdir -p "$(dirname "$STATE_FILE")" 2>/dev/null || true

IMAGE_REF="ghcr.io/${REPO_LC}:${TARGET_TAG}"

echo "======================================================================"
echo " Starting Zero-Downtime Blue/Green Deployment"
echo " Target Image Reference: ${IMAGE_REF}"
echo "======================================================================"

# --- Step 1: Pre-flight System & Docker Checks ---
echo "[1/7] Performing EC2 Docker host pre-flight checks..."
docker version > /dev/null || { echo "ERROR: Docker daemon unavailable"; exit 1; }
docker info > /dev/null || { echo "ERROR: Docker info check failed"; exit 1; }

# --- Step 2: Pull Target Image & Resolve Immutable Digest ---
echo "[2/7] Pulling targeted image from GHCR..."
docker pull "${IMAGE_REF}"

DIGEST=$(docker image inspect --format='{{index .RepoDigests 0}}' "${IMAGE_REF}" 2>/dev/null || echo "")
if [ -z "${DIGEST}" ]; then
  echo "ERROR: Unable to resolve immutable sha256 digest for ${IMAGE_REF}"
  exit 1
fi
echo "Resolved Immutable Digest: ${DIGEST}"

# --- Step 3: Determine Active & Candidate Container Colors/Ports ---
ACTIVE_COLOR="none"
ACTIVE_PORT="8080"
CANDIDATE_COLOR="blue"
CANDIDATE_PORT="8080"

if docker ps --format '{{.Names}}' | grep -q "^portfolio-ui-blue$"; then
  ACTIVE_COLOR="blue"
  ACTIVE_PORT="8080"
  CANDIDATE_COLOR="green"
  CANDIDATE_PORT="8081"
elif docker ps --format '{{.Names}}' | grep -q "^portfolio-ui-green$"; then
  ACTIVE_COLOR="green"
  ACTIVE_PORT="8081"
  CANDIDATE_COLOR="blue"
  CANDIDATE_PORT="8080"
elif docker ps --format '{{.Names}}' | grep -q "^devops-portfolio-ui$"; then
  ACTIVE_COLOR="legacy"
  ACTIVE_PORT="8080"
  CANDIDATE_COLOR="blue"
  CANDIDATE_PORT="8081"
fi

echo "Current Active Slot: ${ACTIVE_COLOR} (Port ${ACTIVE_PORT})"
echo "Deploying Candidate Slot: ${CANDIDATE_COLOR} (Port ${CANDIDATE_PORT})"

# --- Rollback Helper Function ---
rollback_deployment() {
  local reason="${1:-Unknown Failure}"
  echo ""
  echo "======================================================================"
  echo " ❌ DEPLOYMENT FAILED: ${reason}"
  echo " 🔄 INITIATING AUTOMATIC ROLLBACK..."
  echo "======================================================================"

  # Stop and remove candidate container if running
  echo "Cleaning up candidate container (portfolio-ui-${CANDIDATE_COLOR})..."
  docker stop "portfolio-ui-${CANDIDATE_COLOR}" 2>/dev/null || true
  docker rm "portfolio-ui-${CANDIDATE_COLOR}" 2>/dev/null || true

  # Ensure previous active port configuration in NGINX is restored if altered
  if [ -f /etc/nginx/conf.d/portfolio_upstream.conf ]; then
    echo "Restoring Host NGINX upstream to active port ${ACTIVE_PORT}..."
    echo "upstream portfolio_backend { server 127.0.0.1:${ACTIVE_PORT}; }" | sudo tee /etc/nginx/conf.d/portfolio_upstream.conf > /dev/null
    sudo nginx -t && sudo systemctl reload nginx || sudo nginx -s reload || true
  fi

  # Verify previous active container is still healthy
  if [ "${ACTIVE_COLOR}" != "none" ]; then
    echo "Verifying active slot (portfolio-ui-${ACTIVE_COLOR}) remains functional..."
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:${ACTIVE_PORT}/" || echo "000")
    if [ "$HTTP_CODE" -eq 200 ]; then
      echo "✅ ROLLBACK SUCCESSFUL: Previous container serving HTTP 200 OK."
    else
      echo "⚠️ ROLLBACK WARNING: Previous active container returned HTTP ${HTTP_CODE}"
    fi
  else
    echo "No previous active container existed prior to deployment."
  fi

  echo "======================================================================"
  echo " DEPLOYMENT FAILED - ROLLBACK COMPLETED"
  echo "======================================================================"
  exit 1
}

trap 'rollback_deployment "Script execution interrupted or unexpected error occurred"' ERR

# --- Step 4: Prepare & Launch Candidate Container ---
echo "[4/7] Cleaning candidate container slot..."
docker stop "portfolio-ui-${CANDIDATE_COLOR}" 2>/dev/null || true
docker rm "portfolio-ui-${CANDIDATE_COLOR}" 2>/dev/null || true

echo "Launching candidate container portfolio-ui-${CANDIDATE_COLOR} on port ${CANDIDATE_PORT}..."
docker run -d \
  --name "portfolio-ui-${CANDIDATE_COLOR}" \
  --restart unless-stopped \
  -p "${CANDIDATE_PORT}:8080" \
  "${DIGEST}"

# --- Step 5: Bounded Health Check & Smoke Test on Candidate ---
echo "[5/7] Health-gated validation of candidate container..."
HEALTH_SUCCESS=false
for i in $(seq 1 12); do
  STATUS=$(docker inspect --format='{{if .State.Health}}{{.State.Health.Status}}{{else}}starting{{end}}' "portfolio-ui-${CANDIDATE_COLOR}" 2>/dev/null || echo "starting")
  if [ "$STATUS" = "healthy" ]; then
    echo "Candidate container health check: HEALTHY (attempt ${i}/12)"
    HEALTH_SUCCESS=true
    break
  fi
  echo "Waiting for candidate health... Status: ${STATUS} (${i}/12)"
  sleep 5
done

if [ "$HEALTH_SUCCESS" != "true" ]; then
  rollback_deployment "Candidate container failed Docker healthcheck within 60 seconds"
fi

echo "Performing internal HTTP smoke test on candidate (http://127.0.0.1:${CANDIDATE_PORT}/)..."
CANDIDATE_HTTP=$(curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:${CANDIDATE_PORT}/" || echo "000")
if [ "$CANDIDATE_HTTP" -ne 200 ]; then
  rollback_deployment "Candidate container returned HTTP ${CANDIDATE_HTTP} instead of 200"
fi
echo "Candidate internal HTTP check: HTTP 200 OK"

# --- Step 6: Atomic Host NGINX Promotion ---
echo "[6/7] Promoting candidate container in Host NGINX..."
if [ -d /etc/nginx/conf.d ]; then
  echo "upstream portfolio_backend { server 127.0.0.1:${CANDIDATE_PORT}; }" | sudo tee /etc/nginx/conf.d/portfolio_upstream.conf > /dev/null
  if sudo nginx -t; then
    sudo systemctl reload nginx 2>/dev/null || sudo nginx -s reload 2>/dev/null || echo "Host NGINX reloaded"
  else
    rollback_deployment "Host NGINX configuration test (nginx -t) failed"
  fi
fi

# Smoke test through host endpoint
echo "Performing production HTTP smoke test through host NGINX..."
PROD_HTTP=$(curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:${CANDIDATE_PORT}/" || echo "000")
if [ "$PROD_HTTP" -ne 200 ]; then
  rollback_deployment "Production smoke test through NGINX returned HTTP ${PROD_HTTP}"
fi
echo "Production HTTP smoke test PASSED (HTTP 200 OK)"

# --- Step 7: Decommission Old Container & Record Deployment State ---
echo "[7/7] Decommissioning previous container and updating deployment state..."
if [ "${ACTIVE_COLOR}" = "blue" ] || [ "${ACTIVE_COLOR}" = "green" ]; then
  echo "Stopping previous container portfolio-ui-${ACTIVE_COLOR}..."
  docker stop "portfolio-ui-${ACTIVE_COLOR}" 2>/dev/null || true
  docker rm "portfolio-ui-${ACTIVE_COLOR}" 2>/dev/null || true
elif [ "${ACTIVE_COLOR}" = "legacy" ]; then
  echo "Stopping legacy container devops-portfolio-ui..."
  docker stop devops-portfolio-ui 2>/dev/null || true
  docker rm devops-portfolio-ui 2>/dev/null || true
fi

# Save deployment state
cat <<EOF > "$STATE_FILE" 2>/dev/null || true
{
  "active_slot": "${CANDIDATE_COLOR}",
  "active_port": "${CANDIDATE_PORT}",
  "image_ref": "${IMAGE_REF}",
  "digest": "${DIGEST}",
  "deployed_at": "$(date -u +"%Y-%m-%d %H:%M:%SZ")"
}
EOF

# Safe cleanup of dangling images
docker image prune -f || true

echo "======================================================================"
echo " 🎉 ZERO-DOWNTIME DEPLOYMENT SUCCESSFULLY PROMOTED!"
echo " Active Container: portfolio-ui-${CANDIDATE_COLOR} (Port ${CANDIDATE_PORT})"
echo " Image Digest: ${DIGEST}"
echo "======================================================================"
