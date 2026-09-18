import { Cloud, Server, Container, Cpu, Settings, GitBranch, Terminal, ShieldCheck } from 'lucide-react';

export default function EngineeringSnapshot() {
  const capabilities = [
    {
      title: 'Kubernetes Orchestration',
      icon: Server,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      description: 'Production EKS/kubeadm cluster management, pod scheduling, Helm charts, ingress controllers, and storage management.'
    },
    {
      title: 'AWS Cloud Architecture',
      icon: Cloud,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      description: 'Multi-AZ VPC networking, EC2 Auto Scaling, ALB, S3 storage lifecycles, and RDS PostgreSQL infrastructure.'
    },
    {
      title: 'Docker Containerization',
      icon: Container,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      description: 'Multi-stage Dockerfile optimization, slim Alpine runtime images, Docker Compose, and GHCR image registries.'
    },
    {
      title: 'Infrastructure as Code',
      icon: Cpu,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      description: 'Declarative Terraform HCL scripts with S3 remote state storage, DynamoDB state locking, and modular architecture.'
    },
    {
      title: 'Configuration Management',
      icon: Settings,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      description: 'Automated server provisioning and software hardening using Ansible playbooks, roles, and SSH keys.'
    },
    {
      title: 'CI/CD & GitOps',
      icon: GitBranch,
      color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
      description: 'Automated build, test, and release automation via GitHub Actions and Jenkins pipelines with GitOps synchronization.'
    },
    {
      title: 'Linux Systems (RHEL 9)',
      icon: Terminal,
      color: 'text-red-400 bg-red-500/10 border-red-500/20',
      description: 'RHCSA certified Red Hat Enterprise Linux 9 administration, LVM storage, systemd services, and shell scripting.'
    },
    {
      title: 'DevSecOps & Compliance',
      icon: ShieldCheck,
      color: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
      description: 'Container vulnerability auditing using Trivy, non-root user execution policies, and secret isolation.'
    }
  ];

  return (
    <section id="snapshot" className="py-20 px-4 md:px-8 border-b border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Engineering Snapshot
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Practical hands-on capabilities across cloud operations, containerized workloads, infrastructure automation, and system reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accent-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-4 group bg-[#0f141d]/60 backdrop-blur-md"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
