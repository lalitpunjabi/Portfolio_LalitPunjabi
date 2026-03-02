# Lalit Punjabi - DevOps Engineer Portfolio

A premium, high-performance developer portfolio built with React, Vite, and completely custom Cyber-Midnight CSS. Designed specifically to showcase production-ready DevOps expertise, containerization workflows, and cloud infrastructure deployments.

## 🚀 Features

*   **Vibrant Cyber-Midnight Aesthetic**: A totally custom, ultra-premium dark mode featuring deep cosmic backgrounds (`#02040a`), pulsing neon auras, and ambient mesh gradients to create a distinct, modern tech feel.
*   **Responsive Bento Grid & Terminal UI**: Utilizes modern Bento Grid layouts for skills and Mac/Linux terminal window aesthetics for project cards, maximizing readability and developer appeal.
*   **Dynamic Interactive Components**: 
    *   Custom floating terminal typing effect in the Hero section.
    *   Glassmorphism cards (`backdrop-blur-xl`) with high-saturation gradient hover states.
    *   Interactive 'Get In Touch' simulated macOS terminal form.
*   **SEO & Performance Optimized**: Built on Vite for lightning-fast HMR and minimal bundle sizes.

## 🛠️ Tech Stack

*   **Framework**: React 18
*   **Build Tool**: Vite
*   **Language**: TypeScript
*   **Styling**: Pure CSS3 (Custom Variables, Flexbox/Grid, Animations)
*   **Icons**: `lucide-react`

## 📦 Local Development

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).

3.  **Build for production:**
    ```bash
    npm run build
    ```
    The optimized production assets will be generated in the `dist` directory.

## 📁 Project Structure

*   **/src/components/**: Contains all reusable and modular UI components (`HeroSection`, `AboutSection`, `ProjectsSection`, etc.).
*   **/src/index.css**: The core styling engine containing all theme variables, gradients, and utility classes (`.glass-panel`, `.btn-primary`).
*   **/public/images/**: Contains all static media assets optimized for the web.

## � AWS Deployment (S3 + CloudFront)

This portfolio is built to be deployed using a secure, highly scalable AWS architecture via S3 and CloudFront using Origin Access Control (OAC).

1.  **Build the application:**
    ```bash
    npm run build
    ```
2.  **Upload to S3:**
    *   Create a private Amazon S3 bucket.
    *   Upload the contents of the `dist/` folder to the bucket.
3.  **Configure CloudFront CDN:**
    *   Create a CloudFront distribution pointing to the S3 bucket.
    *   Enable **Origin Access Control (OAC)** to keep the S3 bucket strictly private.
    *   Set the Default Root Object to `index.html`.
    *   Set Error Pages (403 and 404) to redirect to `/index.html` with a 200 OK response (for React Router support).
4.  **Attach SSL & Custom Domain:**
    *   Request a public certificate in AWS ACM (us-east-1 region).
    *   Attach the certificate to the CloudFront distribution.
    *   Add CNAME records in your DNS provider pointing to the CloudFront URL.

## �📝 License

Designed and developed for Lalit Punjabi.
