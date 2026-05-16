# Stage 1: Build the React application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (npm ci is preferred for reproducible builds in CI/CD)
RUN npm ci

# Fix for Rollup on Alpine (musl libc) missing optional dependency
RUN npm install @rollup/rollup-linux-x64-musl --save-optional

# Copy the rest of the application code
COPY . .

# Build the Vite application for production
RUN npm run build

# Stage 2: Serve the application using NGINX
FROM nginx:alpine AS production

# Remove default NGINX static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the custom NGINX configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Add a healthcheck to ensure NGINX is serving content properly
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://localhost/ || exit 1

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
