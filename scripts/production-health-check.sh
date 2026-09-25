#!/usr/bin/env bash
# ==============================================================================
# Production Health & Observability Diagnostic Script for Portfolio
# ==============================================================================
set -Eeuo pipefail

echo "======================================================================"
echo " PORTFOLIO PRODUCTION HEALTH DIAGNOSTIC REPORT"
echo " Date: $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
echo "======================================================================"

EXIT_CODE=0

# --- 1. EC2 & Host System Status ---
echo "--- [1/6] EC2 Host & System Diagnostics ---"
MEMORY_USAGE=$(free -m | awk 'NR==2{printf "%.1f%%", $3*100/$2}' 2>/dev/null || echo "N/A")
DISK_USAGE=$(df -h / | awk 'NR==2{print $5}' 2>/dev/null || echo "N/A")
DISK_FREE=$(df -h / | awk 'NR==2{print $4}' 2>/dev/null || echo "N/A")

echo "Memory Usage: ${MEMORY_USAGE}"
echo "Disk Usage (/): ${DISK_USAGE} (Free: ${DISK_FREE})"

# --- 2. Active Slot & NGINX Upstream Inspection ---
echo ""
echo "--- [2/6] Active Blue/Green Slot Detection ---"
ACTIVE_COLOR="none"
ACTIVE_PORT="8080"

if [ -f /etc/nginx/conf.d/portfolio_upstream.conf ]; then
  UPSTREAM_LINE=$(cat /etc/nginx/conf.d/portfolio_upstream.conf 2>/dev/null || echo "")
  if echo "$UPSTREAM_LINE" | grep -q "8081"; then
    ACTIVE_COLOR="green"
    ACTIVE_PORT="8081"
  elif echo "$UPSTREAM_LINE" | grep -q "8080"; then
    ACTIVE_COLOR="blue"
    ACTIVE_PORT="8080"
  fi
fi

if [ "${ACTIVE_COLOR}" = "none" ]; then
  if docker ps --format '{{.Names}}' | grep -q "^portfolio-ui-blue$"; then
    ACTIVE_COLOR="blue"
    ACTIVE_PORT="8080"
  elif docker ps --format '{{.Names}}' | grep -q "^portfolio-ui-green$"; then
    ACTIVE_COLOR="green"
    ACTIVE_PORT="8081"
  elif docker ps --format '{{.Names}}' | grep -q "^devops-portfolio-ui$"; then
    ACTIVE_COLOR="legacy"
    ACTIVE_PORT="8080"
  fi
fi

echo "Active Production Slot: ${ACTIVE_COLOR} (Port ${ACTIVE_PORT})"

# --- 3. Docker Container State & Health ---
echo ""
echo "--- [3/6] Container State & Health Checks ---"
CONTAINER_NAME="portfolio-ui-${ACTIVE_COLOR}"
if [ "${ACTIVE_COLOR}" = "legacy" ]; then
  CONTAINER_NAME="devops-portfolio-ui"
fi

if docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
  HEALTH_STATUS=$(docker inspect --format='{{if .State.Health}}{{.State.Health.Status}}{{else}}no-check{{end}}' "${CONTAINER_NAME}" 2>/dev/null || echo "unknown")
  RESTART_COUNT=$(docker inspect --format='{{.RestartCount}}' "${CONTAINER_NAME}" 2>/dev/null || echo "0")
  IMAGE_DIGEST=$(docker inspect --format='{{index .RepoDigests 0}}' "${CONTAINER_NAME}" 2>/dev/null || echo "N/A")
  
  echo "Container Name: ${CONTAINER_NAME}"
  echo "Health Status: ${HEALTH_STATUS}"
  echo "Restart Count: ${RESTART_COUNT}"
  echo "Image Digest: ${IMAGE_DIGEST}"
  
  if [ "${HEALTH_STATUS}" != "healthy" ] && [ "${HEALTH_STATUS}" != "no-check" ]; then
    echo "⚠️ WARNING: Container health is not HEALTHY (Status: ${HEALTH_STATUS})"
    EXIT_CODE=1
  fi
else
  echo "❌ CRITICAL: Active container '${CONTAINER_NAME}' is NOT running!"
  EXIT_CODE=1
fi

# --- 4. Application HTTP Endpoint Verification ---
echo ""
echo "--- [4/6] Application HTTP & Health Endpoint Verification ---"
HEALTH_HTTP=$(curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:${ACTIVE_PORT}/health" 2>/dev/null || echo "000")
INDEX_HTTP=$(curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:${ACTIVE_PORT}/" 2>/dev/null || echo "000")

echo "Internal /health HTTP Code: ${HEALTH_HTTP}"
echo "Internal SPA root / HTTP Code: ${INDEX_HTTP}"

if [ "${HEALTH_HTTP}" -ne 200 ] || [ "${INDEX_HTTP}" -ne 200 ]; then
  echo "❌ CRITICAL: Application HTTP checks failed (Health: ${HEALTH_HTTP}, Root: ${INDEX_HTTP})"
  EXIT_CODE=1
fi

# --- 5. NGINX Process & Configuration Status ---
echo ""
echo "--- [5/6] Host NGINX Status ---"
if command -v nginx >/dev/null 2>&1; then
  if sudo nginx -t >/dev/null 2>&1; then
    echo "Host NGINX Config Test: PASS"
  else
    echo "⚠️ WARNING: Host NGINX config test failed (sudo nginx -t)"
  fi
else
  echo "Host NGINX binary not installed on local test host."
fi

# --- 6. Deployment History Log Inspection ---
echo ""
echo "--- [6/6] Last Deployment Record ---"
STATE_FILE="/opt/portfolio/deployment-state.json"
if [ -f "$STATE_FILE" ]; then
  cat "$STATE_FILE"
else
  echo "No state file found at $STATE_FILE"
fi

echo ""
echo "======================================================================"
if [ "$EXIT_CODE" -eq 0 ]; then
  echo " ✅ OVERALL PRODUCTION SYSTEM STATUS: HEALTHY & OPERATIONAL"
else
  echo " ❌ OVERALL PRODUCTION SYSTEM STATUS: UNHEALTHY / ISSUES DETECTED"
fi
echo "======================================================================"

exit $EXIT_CODE
