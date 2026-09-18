export interface Project {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  highlights: string[];
  technologies: string[];
  category: 'DevOps & CI/CD' | 'Cloud Architecture' | 'Full-Stack & Systems';
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: {
    problem: string;
    solution: string;
    architectureDescription: string;
    devopsHighlights: string[];
    securityControls: string[];
    deploymentEnv: string;
    codeSnippet?: {
      language: string;
      filename: string;
      code: string;
    };
  };
}

export type ProjectItem = Project;

export const projectsData: Project[] = [
  {
    id: 'deploymate',
    name: 'DEPLOYMATE',
    tagline: 'Intelligent Enterprise CI/CD, GitOps & AIOps Platform',
    problem:
      'Modern delivery workflows often require multiple disconnected tools for CI/CD, container security, infrastructure automation, deployment management, and observability.',
    solution:
      'Designed DEPLOYMATE as a unified DevOps platform concept that brings CI/CD, containerization, infrastructure automation, Kubernetes deployment workflows, security checks, and operational visibility into a single engineering interface.',
    highlights: [
      'Designed a unified workflow for source control, CI/CD, container builds, infrastructure automation, and Kubernetes deployments.',
      'Integrated container and DevSecOps concepts including image scanning and deployment validation.',
      'Designed Kubernetes-oriented deployment workflows with rolling-update and operational visibility concepts.',
      'Created an AIOps-oriented layer for connecting deployment activity with application and infrastructure signals.'
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Docker',
      'Kubernetes',
      'Terraform',
      'GitHub Actions',
      'Prometheus',
      'Grafana',
      'Python'
    ],
    category: 'DevOps & CI/CD',
    githubUrl: 'https://github.com/lalitpunjabi',
    caseStudy: {
      problem:
        'Managing CI/CD, infrastructure, Kubernetes deployments, security checks, and operational signals across separate tools increases workflow complexity and makes troubleshooting harder.',
      solution:
        'Built a unified platform experience focused on automating delivery workflows and presenting deployment, security, infrastructure, and operational information from a single interface.',
      architectureDescription:
        'Source Control → CI/CD Workflow → Build & Validation → Container Image → Infrastructure / Kubernetes Deployment → Monitoring & Operational Feedback',
      devopsHighlights: [
        'CI/CD workflow orchestration and deployment automation',
        'Docker-based application containerization',
        'Kubernetes-oriented deployment and rollout workflows',
        'Infrastructure-as-Code concepts using Terraform',
        'Operational visibility using Prometheus and Grafana'
      ],
      securityControls: [
        'Container vulnerability scanning integrated into DevSecOps workflows',
        'Kubernetes security-context and least-privilege deployment concepts',
        'Secure handling of deployment configuration and secrets',
        'Validation gates before deployment progression'
      ],
      deploymentEnv:
        'Cloud and Kubernetes-oriented architecture; deployment details should be shown only where verified by the project implementation.'
    }
  },

  {
    id: 'bloodmate',
    name: 'BloodMate',
    tagline: 'Full-Stack Blood Bank Management & Emergency Donor Platform',
    problem:
      'Blood banks and emergency donation workflows require reliable coordination between donors, blood requests, hospital requirements, and operational data.',
    solution:
      'Developed a full-stack web platform using a modern React frontend and FastAPI backend, with PostgreSQL-based persistence and AWS infrastructure for deployment.',
    highlights: [
      'Built a responsive React + Vite frontend for donor, request, and blood-bank workflows.',
      'Developed REST APIs using FastAPI for application and business operations.',
      'Used PostgreSQL for structured application data and integrated AWS RDS for managed database hosting.',
      'Deployed the application on AWS EC2 with NGINX acting as the reverse proxy.',
      'Containerized application services with Docker for repeatable deployments.'
    ],
    technologies: [
      'React',
      'Vite',
      'TypeScript',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'AWS RDS',
      'AWS EC2',
      'Docker',
      'NGINX',
      'Certbot'
    ],
    category: 'Full-Stack & Systems',
    githubUrl: 'https://github.com/lalitpunjabi/BloodMate-Advanced',
    caseStudy: {
      problem:
        'The platform needed a maintainable full-stack architecture capable of handling application workflows, structured relational data, authentication, and cloud deployment.',
      solution:
        'Implemented a React + FastAPI architecture backed by PostgreSQL, then deployed the application stack on AWS infrastructure with NGINX as the reverse-proxy layer.',
      architectureDescription:
        'React + Vite Frontend → NGINX → FastAPI Backend → PostgreSQL / AWS RDS',
      devopsHighlights: [
        'Docker-based service containerization',
        'AWS EC2 deployment and server configuration',
        'NGINX reverse-proxy configuration',
        'Managed PostgreSQL deployment using AWS RDS',
        'HTTPS configuration using Certbot where enabled in the deployment'
      ],
      securityControls: [
        'Authenticated API access and protected application workflows',
        'Password hashing for user credentials',
        'Restricted database network access through AWS security-group configuration',
        'HTTPS support for secure client-server communication'
      ],
      deploymentEnv:
        'AWS EC2 + AWS RDS PostgreSQL + NGINX'
    }
  },

  {
    id: 'cloud-infrastructure-automation',
    name: 'AWS Cloud Infrastructure Automation',
    tagline: 'Infrastructure-as-Code & Configuration Automation',
    problem:
      'Manually provisioning cloud infrastructure can lead to inconsistent configurations, repetitive setup work, and configuration drift.',
    solution:
      'Built reusable infrastructure-automation workflows around Terraform and Ansible to simplify AWS resource provisioning and server configuration.',
    highlights: [
      'Defined AWS infrastructure declaratively using Terraform.',
      'Automated server configuration and software setup using Ansible.',
      'Worked with AWS networking and compute components including VPC and EC2.',
      'Applied Infrastructure-as-Code principles to improve repeatability and maintainability.',
      'Used automation to reduce repetitive manual infrastructure configuration.'
    ],
    technologies: [
      'Terraform',
      'Ansible',
      'AWS VPC',
      'AWS EC2',
      'Bash',
      'Linux',
      'IAM'
    ],
    category: 'Cloud Architecture',
    githubUrl: 'https://github.com/lalitpunjabi',
    caseStudy: {
      problem:
        'Repeated manual infrastructure setup makes cloud environments harder to reproduce and maintain consistently.',
      solution:
        'Used Terraform for declarative provisioning and Ansible for configuration automation, creating a reusable workflow for infrastructure and server setup.',
      architectureDescription:
        'Terraform → AWS Infrastructure → EC2 → Ansible Configuration → Application Services',
      devopsHighlights: [
        'Declarative AWS infrastructure using Terraform',
        'Automated host configuration using Ansible playbooks',
        'Linux-based server administration and automation',
        'Reusable infrastructure configuration instead of repeated manual setup'
      ],
      securityControls: [
        'IAM-aware infrastructure design',
        'Security-group based network access control',
        'Separation of infrastructure configuration from application code',
        'Controlled server configuration through automation'
      ],
      deploymentEnv:
        'AWS cloud infrastructure; exact services and topology should be displayed according to the actual Terraform and Ansible implementation.'
    }
  }
];
