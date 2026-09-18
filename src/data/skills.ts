export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  items: {
    name: string;
    capabilities: string[];
  }[];
  featured?: boolean;
}

export const skillsData: SkillCategory[] = [
  {
    id: 'devops',
    title: 'DevOps & Containerization',
    subtitle: 'Containerization, orchestration, automation, and delivery workflows',
    iconName: 'Container',
    featured: true,
    items: [
      {
        name: 'Kubernetes',
        capabilities: [
          'Deployments',
          'Services',
          'Ingress',
          'ConfigMaps & Secrets',
          'PV/PVC',
          'Scheduling',
          'Health Probes',
          'Rolling Updates'
        ]
      },
      {
        name: 'Docker',
        capabilities: [
          'Dockerfiles',
          'Multi-Stage Builds',
          'Docker Compose',
          'Container Networking',
          'Image Management',
          'GHCR'
        ]
      },
      {
        name: 'Terraform',
        capabilities: [
          'HCL',
          'Modules',
          'Variables & Outputs',
          'AWS Infrastructure',
          'Remote State',
          'VPC Provisioning'
        ]
      },
      {
        name: 'Ansible',
        capabilities: [
          'Playbooks',
          'Configuration Management',
          'Package Provisioning',
          'Service Management',
          'Linux Automation'
        ]
      },
      {
        name: 'CI/CD',
        capabilities: [
          'GitHub Actions',
          'Jenkins',
          'Build Automation',
          'Artifact Workflows',
          'Deployment Automation',
          'Pipeline Troubleshooting'
        ]
      },
      {
        name: 'Linux / RHEL',
        capabilities: [
          'RHEL 9',
          'Systemd',
          'LVM',
          'User & Permission Management',
          'SSH',
          'Bash Scripting',
          'System Troubleshooting'
        ]
      }
    ]
  },

  {
    id: 'aws',
    title: 'AWS Cloud Infrastructure',
    subtitle: 'Cloud compute, networking, storage, databases, and deployment',
    iconName: 'Cloud',
    featured: true,
    items: [
      {
        name: 'Compute & Deployment',
        capabilities: [
          'EC2',
          'Elastic Load Balancing',
          'Auto Scaling',
          'Launch Templates',
          'CloudFront'
        ]
      },
      {
        name: 'Networking',
        capabilities: [
          'VPC',
          'Public & Private Subnets',
          'Route Tables',
          'Internet Gateway',
          'NAT Gateway',
          'Security Groups'
        ]
      },
      {
        name: 'Identity & Security',
        capabilities: [
          'IAM',
          'IAM Policies',
          'Roles',
          'Least-Privilege Access',
          'OIDC Concepts'
        ]
      },
      {
        name: 'Storage & Databases',
        capabilities: [
          'S3',
          'EBS',
          'RDS',
          'PostgreSQL',
          'Database Connectivity'
        ]
      },
      {
        name: 'Edge & Operations',
        capabilities: [
          'CloudFront',
          'ACM',
          'Route 53',
          'CloudWatch',
          'AWS CLI'
        ]
      }
    ]
  },

  {
    id: 'development',
    title: 'Development & APIs',
    subtitle: 'Programming, backend services, frontend applications, and databases',
    iconName: 'Code2',
    items: [
      {
        name: 'Programming',
        capabilities: [
          'Python',
          'Java',
          'C++',
          'C',
          'JavaScript',
          'TypeScript',
          'SQL',
          'Bash'
        ]
      },
      {
        name: 'Web & Backend',
        capabilities: [
          'React',
          'Vite',
          'FastAPI',
          'Node.js',
          'Express',
          'Flask',
          'REST APIs'
        ]
      },
      {
        name: 'Databases',
        capabilities: [
          'PostgreSQL',
          'MySQL',
          'MongoDB',
          'SQLite'
        ]
      },
      {
        name: 'Web Infrastructure',
        capabilities: [
          'NGINX',
          'Apache HTTP Server',
          'Reverse Proxy',
          'HTTPS',
          'Certbot'
        ]
      }
    ]
  },

  {
    id: 'devsecops',
    title: 'DevSecOps & Observability',
    subtitle: 'Security scanning, monitoring, troubleshooting, and engineering tooling',
    iconName: 'ShieldCheck',
    items: [
      {
        name: 'Security & Scanning',
        capabilities: [
          'Trivy',
          'Container Vulnerability Scanning',
          'Dependency Security',
          'Secret Handling',
          'Security Contexts'
        ]
      },
      {
        name: 'Observability',
        capabilities: [
          'Prometheus',
          'Grafana',
          'CloudWatch',
          'Application Health Checks',
          'Container Health Checks',
          'Kubernetes Troubleshooting'
        ]
      },
      {
        name: 'Developer Tooling',
        capabilities: [
          'Git',
          'GitHub',
          'VS Code',
          'IntelliJ IDEA',
          'Postman',
          'VMware Workstation'
        ]
      }
    ]
  }
];
