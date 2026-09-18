export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  credentialUrl?: string;
  technologies: string[];
  responsibilities: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'davine-technologies',
    company: 'Davine Technologies',
    role: 'DevOps Intern',
    duration: 'Jul 2026 – Present',
    location: 'Jaipur, Rajasthan, India',
    type: 'Internship',
    technologies: [
      'AWS EC2',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'RHEL 9',
      'Shell Scripting',
      'Nginx'
    ],
    responsibilities: [
      'Built and maintained containerized application deployment workflows using Docker Compose and Jenkins CI/CD pipelines.',
      'Configured Nginx reverse proxies, SSL/TLS certificates, and AWS EC2 environments for application deployment.',
      'Performed Linux system administration on RHEL 9, including user management, permissions, service configuration, and troubleshooting.',
      'Worked with Kubernetes deployment manifests and integrated Trivy-based container vulnerability scanning into DevOps workflows.'
    ]
  },
  {
    id: 'grras-solutions',
    company: 'GRRAS Solutions',
    role: 'Kubernetes & Linux System Administration Intern',
    duration: 'May 2026 – Jul 2026',
    location: 'Jaipur, Rajasthan, India',
    type: 'Internship',
    technologies: [
      'Red Hat Enterprise Linux',
      'Kubernetes',
      'Docker',
      'Bash',
      'RHCSA',
      'Networking'
    ],
    responsibilities: [
      'Administered RHEL 9 environments covering storage management, LVM, user access controls, permissions, and systemd services.',
      'Configured multi-node Kubernetes environments using kubeadm and worked with pods, services, networking, and persistent storage.',
      'Automated routine system administration and health-check tasks using Bash scripting and cron jobs.',
      'Applied Linux administration and troubleshooting practices aligned with RHCSA certification objectives.'
    ]
  },
  {
    id: 'techforce-academy',
    company: 'TechForce Academy Australia',
    role: 'Salesforce Programming Architect Intern',
    duration: 'Jun 2025 – Aug 2025',
    location: 'Remote',
    type: 'Virtual Internship',
    credentialUrl:
      'https://www.linkedin.com/posts/lalit-punjabi-443911312_thrilled-to-share-that-ive-successfully-activity-7373400354555793408-YooC',
    technologies: [
      'Salesforce Cloud',
      'Apex',
      'Lightning Web Components',
      'CRM Architecture',
      'Cloud Data Modeling',
      'Git'
    ],
    responsibilities: [
      'Designed Salesforce data models using custom objects, relationships, and platform security controls.',
      'Developed business logic and user-facing functionality using Apex and Lightning Web Components.',
      'Worked in remote agile sprint cycles while using Git for source-code version control and collaboration.',
      'Explored Salesforce platform architecture, workflow automation, API integrations, and data migration concepts.'
    ]
  }
];