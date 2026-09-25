import { CheckCircle2, Terminal, Shield, Cpu, RefreshCw } from 'lucide-react';

export default function PortfolioInfrastructureSection() {
  const infraStack = [
    { title: 'Frontend Framework', name: 'React 18 + Vite + TypeScript', icon: Cpu },
    { title: 'Styling & Tokens', name: 'Tailwind CSS v4 + PostCSS', icon: Terminal },
    { title: 'Containerization', name: 'Docker Multi-Stage Build (Alpine)', icon: RefreshCw },
    { title: 'Web Proxy Server', name: 'NGINX Security Hardened', icon: Shield },
    { title: 'CI/CD Pipeline', name: 'GitHub Actions Automated Workflow', icon: CheckCircle2 },
    { title: 'Container Registry', name: 'GitHub Container Registry (GHCR)', icon: CheckCircle2 },
    { title: 'Security Auditing', name: 'Trivy Vulnerability Scan in CI', icon: Shield },
    { title: 'Kubernetes Ready', name: 'Rolling Update Deployment Manifests', icon: Cpu }
  ];

  return (
    <section id="infrastructure" className="py-24 px-4 md:px-8 border-b border-white/5 relative z-20 bg-[#090d16]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Signature Feature
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            This Portfolio Is a DevOps Project
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Demonstrating production engineering standards: containerized with Docker, proxied via NGINX, continuously integrated through GitHub Actions, and deployment-ready for Kubernetes.
          </p>
        </div>

        {/* Visual Pipeline Topology Flow */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0f141d] border border-white/10 shadow-2xl font-mono text-xs space-y-6">
          <div className="text-xs uppercase tracking-wider text-gray-400 font-bold border-b border-white/5 pb-3">
            Continuous Integration & Deployment Architecture
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            {['Git Push', 'Type Check', 'Lint Audit', 'Docker Build', 'Trivy Scan', 'GHCR Push', 'EC2 Deploy'].map((step, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center space-y-1 hover:border-accent-primary/40 transition-colors">
                <span className="text-[10px] text-accent-primary font-bold">0{idx + 1}</span>
                <span className="text-white font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infraStack.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4 hover:border-accent-primary/30 transition-colors">
                <div className="p-2.5 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary shrink-0">
                  <Icon size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-gray-400 uppercase block">{item.title}</span>
                  <span className="text-sm font-semibold text-white block">{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
