# Lalit Punjabi - DevOps Engineer Portfolio

[![CI Pipeline](https://img.shields.io/github/actions/workflow/status/lalitpunjabi/Portfolio_LalitPunjabi/ci.yml?branch=main&label=CI%20Pipeline&style=flat-square)](https://github.com/lalitpunjabi/Portfolio_LalitPunjabi/actions/workflows/ci.yml)
[![DevSecOps Scan](https://img.shields.io/github/actions/workflow/status/lalitpunjabi/Portfolio_LalitPunjabi/security.yml?branch=main&label=Security%20Scan&style=flat-square)](https://github.com/lalitpunjabi/Portfolio_LalitPunjabi/actions/workflows/security.yml)
[![Docker Publish](https://img.shields.io/github/actions/workflow/status/lalitpunjabi/Portfolio_LalitPunjabi/docker-publish.yml?branch=main&label=Docker%20Publish&style=flat-square)](https://github.com/lalitpunjabi/Portfolio_LalitPunjabi/actions/workflows/docker-publish.yml)
[![AWS EC2 Deployment](https://img.shields.io/github/actions/workflow/status/lalitpunjabi/Portfolio_LalitPunjabi/cd-vps.yml?branch=main&label=AWS%20EC2%20Deployment&style=flat-square)](https://github.com/lalitpunjabi/Portfolio_LalitPunjabi/actions/workflows/cd-vps.yml)
[![Kubernetes CD](https://img.shields.io/github/actions/workflow/status/lalitpunjabi/Portfolio_LalitPunjabi/cd-k8s.yml?branch=main&label=K8s%20Deployment&style=flat-square)](https://github.com/lalitpunjabi/Portfolio_LalitPunjabi/actions/workflows/cd-k8s.yml)

A premium, high-performance developer portfolio built with React, Vite, and completely custom Cyber-Midnight CSS. Designed specifically to showcase enterprise-grade DevSecOps expertise, robust CI/CD automation, containerization workflows, and cloud infrastructure deployments.

## 🚀 Features

*   **Recruiter vs. Developer View Toggle**: Instantly switch between a streamlined 30-second recruiter overview and an in-depth technical developer mode with live interactive CI/CD lab simulations.
*   **Flagship Production Case Studies**:
    *   **DEPLOYMATE**: Intelligent Enterprise CI/CD, GitOps & AIOps Platform (Jenkins, Docker, Kubernetes, Prometheus, Grafana, Trivy).
    *   **BloodMate**: Real-Time Emergency Blood Connect System (React, Vite, FastAPI, PostgreSQL, AWS RDS, AWS EC2, NGINX).
    *   **AWS Infrastructure Automation**: Production Multi-AZ VPC, EKS & RDS Terraform automation.
*   **Vibrant Cyber-Midnight Aesthetic**: A custom, ultra-premium dark theme with cosmic backgrounds (`#0b0f19`), pulsing neon accents, and ambient mesh gradients.
*   **DevOps Engineering Proof of Work**: Features an Engineering Capability Snapshot, interactive terminal visualizers, and a signature "This Portfolio is a DevOps Project" infrastructure guide.
*   **Enterprise Containerization**: Fully Dockerized production environment utilizing multi-stage builds and an optimized NGINX alpine server.
*   **SEO & Performance Optimized**: Built on Vite for lightning-fast HMR and minimal bundle sizes, served via Gzip-compressed NGINX.


## 🛠️ Tech Stack & DevOps Tools

*   **Frontend Framework**: React 18 (with React DOM)
*   **Build Tool & Bundler**: Vite (Lightning-fast HMR and optimized builds)
*   **Language**: TypeScript (Strong typing for robust development)
*   **Styling**: Pure CSS3 (Custom Variables, Flexbox/Grid, Glassmorphism, Advanced Animations)
*   **Containerization**: Docker & Docker Compose (Multi-stage builds, Alpine base images)
*   **Web Server**: NGINX (Configured for SPA routing, Gzip, Security Headers, and aggressive caching)
*   **CI/CD Automation**: GitHub Actions (For automated build, validation, and deployment pipelines)
*   **Cloud Infrastructure & Hosting**: AWS EC2 (Docker + NGINX Reverse Proxy + Certbot SSL on `app.devlalit.space`) / AWS S3 & CloudFront

---

## 🐳 Docker Architecture & Workflow

This project utilizes a highly optimized, production-ready multi-stage Docker build process to ensure the smallest possible attack surface and image size.

```mermaid
graph TD
    A[Source Code] -->|npm ci & npm run build| B(Stage 1: Node.js Builder)
    B -->|dist/ artifacts| C(Stage 2: NGINX Alpine Production)
    D[nginx.conf] --> C
    C -->|Expose Port 80| E{Containerized App}
```

### 🛡️ Production Best Practices Implemented
*   **Multi-stage Builds**: Separates the build environment (Node.js) from the runtime environment (NGINX), discarding unnecessary source files and `node_modules` in the final image.
*   **Optimized Layer Caching**: `package.json` is copied and installed before source code to maximize Docker cache utilization.
*   **Minimal Base Images**: Utilizes `alpine` Linux variants to keep the image footprint drastically small and secure.
*   **Security Hardening**: NGINX is configured to serve strict security headers (`X-Frame-Options`, `X-XSS-Protection`, etc.).
*   **SPA Support**: NGINX is explicitly configured with `try_files` to natively support React Router's client-side routing.
*   **Healthchecks**: Built-in container health checks ensure orchestration tools can monitor the application state.

---

## 🔄 Enterprise DevSecOps CI/CD Pipeline

This project features a fully automated, production-grade GitHub Actions CI/CD architecture designed to ensure code quality, security, and seamless deployments.

*   **Continuous Integration (`ci.yml`)**: 
    *   Runs parallel Matrix Testing on Node.js 18 and 20.
    *   Enforces strict TypeScript type-checking and dependency integrity checks.
    *   Verifies production builds and securely passes artifacts downstream.
*   **DevSecOps Scanning (`security.yml`)**: 
    *   Runs Aqua Security's **Trivy** to scan Docker images and local filesystems.
    *   Automatically blocks deployments if `HIGH` or `CRITICAL` vulnerabilities or exposed secrets are detected.
*   **Docker Image Automation (`docker-publish.yml`)**: 
    *   Automatically builds and publishes the optimized Docker image to the GitHub Container Registry (GHCR).
    *   Implements multi-tagging (`latest`, short SHA, and semantic versions).
*   **AWS EC2 Continuous Deployment (`cd-vps.yml`)**: 
    *   Triggered automatically on `push` to the `main` branch.
    *   Builds the production Docker image, pushes to GHCR, and authenticates via SSH key to the AWS EC2 instance using GitHub Environment Secrets (`Production` environment: `VPS_HOST`, `VPS_USERNAME`, `VPS_SSH_KEY`).
    *   Restarts the container on port `8080`, proxied by Host NGINX with Let's Encrypt SSL on `app.devlalit.space`.
*   **Environment-Based Deployments (`cd-aws.yml`)**: 
    *   Deploys static artifacts to AWS S3 + CloudFront using strict GitHub Environments (`production`) for manual approval gating.
*   **Release Automation (`release.yml`)**: 
    *   Automatically generates GitHub Releases and rich changelogs based on semantic tags.
*   **Kubernetes Automation (`cd-k8s.yml`)**:
    *   Dynamically injects the new image SHA into K8s manifests and validates structural integrity before live cluster rollouts.

---

## ☸️ Enterprise Kubernetes Orchestration

The application is engineered to run seamlessly on production Kubernetes clusters (e.g., AWS EKS, Minikube). The `k8s/` directory contains standard Kubernetes manifests implementing cloud-native best practices.

### 🏗️ Cluster Architecture
*   **Deployment (`deployment.yaml`)**: Uses a **RollingUpdate** strategy (`maxSurge: 1`, `maxUnavailable: 0`) for true zero-downtime deployments. Configures strict CPU/Memory resource boundaries and runs unprivileged security contexts.
*   **Health Probes**: Explicit `livenessProbe` and `readinessProbe` HTTP checks ensure the NGINX container is ready before the Service load balancer routes traffic to it.
*   **Service (`service.yaml`)**: Internal `ClusterIP` exposing port 80.
*   **Ingress (`ingress.yaml`)**: NGINX Ingress Controller routing configuration to safely expose the internal Service to the public web (HTTPS/TLS ready).
*   **Auto-Scaling (`hpa.yaml`)**: A Horizontal Pod Autoscaler dynamically scales replicas from 2 to 5 based on CPU utilization crossing 70%.
*   **Config & Secrets**: Separates configuration (`configmap.yaml`) and sensitive data (`secrets.yaml`) from the application code following 12-factor app methodologies.

### 🚀 Deploying to Kubernetes

**1. Apply Configuration and Secrets:**
```bash
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secrets.yaml
```

**2. Deploy the Application Stack:**
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
kubectl apply -f k8s/hpa.yaml
```

**3. Verify Zero-Downtime Rollout:**
```bash
kubectl rollout status deployment/portfolio-ui
kubectl get pods -l app=portfolio-ui
```

---

## 💻 Local Development & Docker Setup

### Option A: Using Docker Compose (Recommended)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/lalitpunjabi/portfolio.git
    cd portfolio
    ```

2.  **Spin up the containerized environment:**
    ```bash
    docker-compose up --build -d
    ```
    *The application will now be running at `http://localhost:8080`.*

3.  **To stop the container:**
    ```bash
    docker-compose down
    ```

### Option B: Standard Node.js Development

1.  **Install dependencies and start dev server:**
    ```bash
    npm install
    npm run dev
    ```
    *Available at `http://localhost:5173`.*

---

## 🚀 Production Deployment Steps

### Deploying to AWS EC2 via Docker & GitHub Actions (Active Production Deployment)

This portfolio is configured for automated continuous deployment to an **AWS EC2 Ubuntu Instance** with Hostinger DNS (`app.devlalit.space`) and automated Let's Encrypt SSL/TLS.

#### 1. Hostinger DNS Configuration
*   Create an **A Record** on Hostinger hPanel for domain `devlalit.space`:
    *   **Host:** `app`
    *   **Points to:** `YOUR_AWS_EC2_ELASTIC_IP`
    *   **TTL:** `300`

#### 2. AWS EC2 Instance & Security Group
*   Launch an Ubuntu 24.04 LTS `t2.micro` / `t3.micro` EC2 instance.
*   Attach an **Elastic IP** to ensure a persistent public IP.
*   In the **Security Group**, allow inbound rules:
    *   **Port 22 (SSH)** from your IP / Anywhere
    *   **Port 80 (HTTP)** from Anywhere (`0.0.0.0/0`)
    *   **Port 443 (HTTPS)** from Anywhere (`0.0.0.0/0`)

#### 3. One-Time EC2 Server Setup
Connect via SSH (`ssh -i key.pem ubuntu@YOUR_EC2_IP`) and execute:
```bash
# Install Docker, Host Nginx, and Certbot
sudo apt update && sudo apt install -y docker.io nginx certbot python3-certbot-nginx
sudo systemctl enable --now docker nginx
sudo usermod -aG docker ubuntu

# Configure Host Nginx Reverse Proxy
sudo nano /etc/nginx/sites-available/app.devlalit.space
```

Add the following Nginx proxy block:
```nginx
server {
    listen 80;
    server_name app.devlalit.space;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable site & generate automated SSL:
```bash
sudo ln -s /etc/nginx/sites-available/app.devlalit.space /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d app.devlalit.space
```

#### 4. GitHub Environment Secrets Setup
In GitHub Repository $\rightarrow$ **Settings** $\rightarrow$ **Secrets and variables** $\rightarrow$ **Actions** $\rightarrow$ **Environment Secrets** under the **`Production`** environment:
*   `VPS_HOST`: Your AWS EC2 Elastic IP address
*   `VPS_USERNAME`: `ubuntu`
*   `VPS_SSH_KEY`: Full contents of your `.pem` SSH private key

#### 5. Automated CI/CD Execution
Pushing code to the `main` branch automatically triggers `.github/workflows/cd-vps.yml`, which builds the image, pushes to `ghcr.io`, SSHs into your EC2 server, and restarts the container on port `8080`.

---

### Alternative: AWS S3 + CloudFront (Serverless)

This portfolio is also built to be deployed using a highly scalable, serverless AWS architecture.

1.  **Build:** `npm run build`
2.  **Upload to S3:** Upload the `dist/` folder to a private S3 bucket.
3.  **Configure CloudFront:** Create a CDN pointing to the S3 bucket, enable **Origin Access Control (OAC)**, and set error pages (403/404) to redirect to `/index.html`.

---

## 🔧 Docker Troubleshooting

*   **Port Conflicts:** If `docker-compose up` fails, ensure port `8080` isn't in use. Modify the `ports` mapping in `docker-compose.yml` (e.g., `"8081:80"`) if necessary.
*   **Routing Issues (404s on refresh):** If you experience 404s when manually refreshing a page, ensure the custom `nginx.conf` is properly mounting inside the container. This is handled by default via `COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf` in the Dockerfile.
*   **Stale Changes:** If recent code changes aren't reflecting, force a clean build without cache:
    ```bash
    docker-compose build --no-cache
    docker-compose up -d
    ```

## 📝 License

Designed and developed for Lalit Punjabi.
