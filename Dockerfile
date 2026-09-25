# Stage 1: Build the React application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency definitions first to maximize Docker layer caching
COPY package*.json ./

# Deterministic dependency installation
RUN npm ci

# Copy application source code
COPY . .

# Compile TypeScript and generate production Vite bundle in dist/
RUN npm run build

# Stage 2: Serve the static application using non-root unprivileged NGINX
FROM nginxinc/nginx-unprivileged:alpine AS production

# Copy custom NGINX SPA configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy production static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose unprivileged port 8080
EXPOSE 8080

# Healthcheck validating HTTP availability on /health endpoint
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/health || exit 1

# Start NGINX in foreground (runs natively as non-root user 101:nginx)
CMD ["nginx", "-g", "daemon off;"]
