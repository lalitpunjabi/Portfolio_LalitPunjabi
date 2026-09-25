#!/usr/bin/env bash
# ==============================================================================
# Production Manual/Emergency Rollback Script for Portfolio
# ==============================================================================
set -Eeuo pipefail

STATE_FILE="/opt/portfolio/deployment-state.json"

echo "======================================================================"
echo " Starting Manual Rollback Routine"
echo "======================================================================"

# Determine active slot
ACTIVE_COLOR="none"
ACTIVE_PORT="8080"
ROLLBACK_COLOR="green"
ROLLBACK_PORT="8081"

if docker ps --format '{{.Names}}' | grep -q "^portfolio-ui-blue$"; then
  ACTIVE_COLOR="blue"
  ACTIVE_PORT="8080"
  ROLLBACK_COLOR="green"
  ROLLBACK_PORT="8081"
elif docker ps --format '{{.Names}}' | grep -q "^portfolio-ui-green$"; then
  ACTIVE_COLOR="green"
  ACTIVE_PORT="8081"
  ROLLBACK_COLOR="blue"
  ROLLBACK_PORT="8080"
fi

echo "Currently Active Slot: ${ACTIVE_COLOR} (Port ${ACTIVE_PORT})"
echo "Target Rollback Slot: ${ROLLBACK_COLOR} (Port ${ROLLBACK_PORT})"

# Verify rollback container exists or can be restarted
if ! docker ps -a --format '{{.Names}}' | grep -q "^portfolio-ui-${ROLLBACK_COLOR}$"; then
  echo "ERROR: Previous container portfolio-ui-${ROLLBACK_COLOR} does not exist on host."
  echo "Manual container launch from state file required."
  exit 1
fi

echo "Restarting rollback container portfolio-ui-${ROLLBACK_COLOR}..."
docker start "portfolio-ui-${ROLLBACK_COLOR}" 2>/dev/null || true

# Wait for rollback container health
echo "Waiting for rollback container health..."
HEALTH_SUCCESS=false
for i in $(seq 1 12); do
  STATUS=$(docker inspect --format='{{if .State.Health}}{{.State.Health.Status}}{{else}}starting{{end}}' "portfolio-ui-${ROLLBACK_COLOR}" 2>/dev/null || echo "starting")
  if [ "$STATUS" = "healthy" ]; then
    echo "Rollback container health: HEALTHY (attempt ${i}/12)"
    HEALTH_SUCCESS=true
    break
  fi
  sleep 5
done

if [ "$HEALTH_SUCCESS" != "true" ]; then
  echo "ERROR: Rollback container failed health check"
  exit 1
fi

# Switch Host NGINX to rollback port
if [ -d /etc/nginx/conf.d ]; then
  echo "upstream portfolio_backend { server 127.0.0.1:${ROLLBACK_PORT}; }" | sudo tee /etc/nginx/conf.d/portfolio_upstream.conf > /dev/null
  sudo nginx -t && (sudo systemctl reload nginx 2>/dev/null || sudo nginx -s reload 2>/dev/null)
fi

# Smoke test
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:${ROLLBACK_PORT}/" || echo "000")
if [ "$HTTP_CODE" -eq 200 ]; then
  echo "Stopping failed active container portfolio-ui-${ACTIVE_COLOR}..."
  docker stop "portfolio-ui-${ACTIVE_COLOR}" 2>/dev/null || true
  docker rm "portfolio-ui-${ACTIVE_COLOR}" 2>/dev/null || true
  
  cat <<EOF > "$STATE_FILE" 2>/dev/null || true
{
  "active_slot": "${ROLLBACK_COLOR}",
  "active_port": "${ROLLBACK_PORT}",
  "rolled_back_at": "$(date -u +"%Y-%m-%d %H:%M:%SZ")"
}
EOF
  echo "======================================================================"
  echo " ✅ MANUAL ROLLBACK SUCCESSFULLY EXECUTED!"
  echo " Active Slot: portfolio-ui-${ROLLBACK_COLOR} (Port ${ROLLBACK_PORT})"
  echo "======================================================================"
else
  echo "ERROR: Rollback container returned HTTP ${HTTP_CODE}"
  exit 1
fi
