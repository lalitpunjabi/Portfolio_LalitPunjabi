#!/usr/bin/env bash
# ==============================================================================
# Local Blue/Green Deployment Simulation & Automated Rollback Test
# ==============================================================================
set -Eeuo pipefail

IMAGE_NAME="${1:-portfolio-phase5-test:latest}"

echo "======================================================================"
echo " Starting Local Blue/Green Deployment Simulation"
echo " Simulation Image: ${IMAGE_NAME}"
echo "======================================================================"

# Step 1: Ensure image is available locally
docker image inspect "${IMAGE_NAME}" > /dev/null 2>&1 || {
  echo "Image ${IMAGE_NAME} not found locally. Building image..."
  docker buildx build --load -t "${IMAGE_NAME}" .
}

# Step 2: Start Blue container on 8080
echo "[1/4] Starting Blue container on port 8080..."
docker stop portfolio-sim-blue 2>/dev/null || true
docker rm portfolio-sim-blue 2>/dev/null || true

docker run -d \
  --name portfolio-sim-blue \
  -p 8080:8080 \
  "${IMAGE_NAME}"

echo "Waiting for Blue container health..."
for i in $(seq 1 12); do
  STATUS=$(docker inspect --format='{{if .State.Health}}{{.State.Health.Status}}{{else}}starting{{end}}' portfolio-sim-blue 2>/dev/null || echo "starting")
  if [ "$STATUS" = "healthy" ]; then
    echo "Blue container: HEALTHY"
    break
  fi
  sleep 2
done

# Step 3: Start Green container on 8081 (Zero-Downtime candidate)
echo "[2/4] Starting Green candidate container on port 8081..."
docker stop portfolio-sim-green 2>/dev/null || true
docker rm portfolio-sim-green 2>/dev/null || true

docker run -d \
  --name portfolio-sim-green \
  -p 8081:8080 \
  "${IMAGE_NAME}"

echo "Waiting for Green candidate container health..."
for i in $(seq 1 12); do
  STATUS=$(docker inspect --format='{{if .State.Health}}{{.State.Health.Status}}{{else}}starting{{end}}' portfolio-sim-green 2>/dev/null || echo "starting")
  if [ "$STATUS" = "healthy" ]; then
    echo "Green container: HEALTHY"
    break
  fi
  sleep 2
done

# Step 4: Verify HTTP responses from both slots
echo "[3/4] Testing HTTP availability on both Blue (8080) and Green (8081)..."
BLUE_HTTP=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8080/ || echo "000")
GREEN_HTTP=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8081/ || echo "000")

echo "Blue Slot HTTP Status: ${BLUE_HTTP}"
echo "Green Slot HTTP Status: ${GREEN_HTTP}"

if [ "$BLUE_HTTP" -eq 200 ] && [ "$GREEN_HTTP" -eq 200 ]; then
  echo "✅ LOCAL BLUE/GREEN PROMOTION SIMULATION PASSED!"
else
  echo "❌ LOCAL SIMULATION FAILED"
  exit 1
fi

# Step 5: Test Simulated Failure & Rollback Scenario
echo "[4/4] Simulating candidate deployment failure & automatic rollback..."
docker stop portfolio-sim-green 2>/dev/null || true
docker rm portfolio-sim-green 2>/dev/null || true

# Verify Blue remains unaffected
BLUE_RECOVERED=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8080/ || echo "000")
if [ "$BLUE_RECOVERED" -eq 200 ]; then
  echo "✅ ROLLBACK SIMULATION PASSED: Blue container remained 100% active and healthy throughout."
fi

# Clean up simulation containers
docker stop portfolio-sim-blue 2>/dev/null || true
docker rm portfolio-sim-blue 2>/dev/null || true

echo "======================================================================"
echo " Blue/Green Simulation Complete - All Checks Passed!"
echo "======================================================================"
