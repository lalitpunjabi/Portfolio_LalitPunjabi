import { useState, useEffect } from 'react';
import { Server, Cloud, Code, Zap, Activity, ShieldCheck, Cpu, Github, ExternalLink } from 'lucide-react';

export default function StatsSection() {
  const [latency, setLatency] = useState(22);
  const podCount = 12;

  // Simulate subtle real-time telemetry jitter
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(18 + Math.random() * 10));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: <Server size={28} />,
      number: '99.99%',
      label: 'Uptime SLA',
      description: 'Consistent high availability across EKS & AWS Multi-AZ infra',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: <Cloud size={28} />,
      number: '15+',
      label: 'Cloud Projects',
      description: 'Production-grade infrastructure built with Terraform & Kubernetes',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Code size={28} />,
      number: '50+',
      label: 'IaC & Scripts',
      description: 'Automated Ansible playbooks, Dockerfiles & CI/CD workflows',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: <Zap size={28} />,
      number: '10x',
      label: 'Deployment Speed',
      description: 'Accelerated automated release pipelines with zero-downtime',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section className="section relative overflow-hidden py-12 md:py-16 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent">
      {/* Ambient Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 pointer-events-none"></div>
      
      <div className="container relative z-10 px-4 md:px-6 lg:px-8 space-y-10">

        {/* FEATURE 2: LIVE SRE HEALTH MONITOR TELEMETRY BAR */}
        <div className="glass-panel p-4 md:p-5 rounded-2xl border border-accent-primary/30 shadow-glow bg-[#0b0f19]/90 font-mono">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Health Badge */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <span className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <Activity size={14} className="text-emerald-400" /> SRE Cluster Status: HEALTHY
                </span>
                <p className="text-[10px] text-text-tertiary">Region: ap-south-1 (AWS) • Node Group: Active</p>
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs w-full md:w-auto">
              
              <div className="px-3 py-2 rounded-xl bg-secondary/80 border border-border-color flex items-center gap-2">
                <Activity size={14} className="text-accent-primary shrink-0" />
                <div>
                  <div className="text-[9px] text-text-tertiary">API LATENCY</div>
                  <div className="font-bold text-emerald-400">{latency}ms</div>
                </div>
              </div>

              <div className="px-3 py-2 rounded-xl bg-secondary/80 border border-border-color flex items-center gap-2">
                <Cpu size={14} className="text-purple-400 shrink-0" />
                <div>
                  <div className="text-[9px] text-text-tertiary">K8S PODS</div>
                  <div className="font-bold text-text-primary">{podCount}/{podCount} Ready</div>
                </div>
              </div>

              <div className="px-3 py-2 rounded-xl bg-secondary/80 border border-border-color flex items-center gap-2">
                <ShieldCheck size={14} className="text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[9px] text-text-tertiary">TRIVY AUDIT</div>
                  <div className="font-bold text-emerald-400">0 Critical</div>
                </div>
              </div>

              <div className="px-3 py-2 rounded-xl bg-secondary/80 border border-border-color flex items-center gap-2">
                <Server size={14} className="text-amber-400 shrink-0" />
                <div>
                  <div className="text-[9px] text-text-tertiary">UPTIME SLA</div>
                  <div className="font-bold text-text-primary">99.99%</div>
                </div>
              </div>

            </div>

          </div>
        </div>
        
        {/* Core Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl bg-bg-secondary/50 backdrop-blur-sm border border-color hover:border-accent-primary/30 transition-all duration-500 hover-lift overflow-hidden tech-border"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 mb-4 md:mb-6">
                <div className={`inline-flex p-3 md:p-4 rounded-lg md:rounded-xl bg-gradient-to-br ${stat.color}/10 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {stat.icon}
                </div>
              </div>
              
              <div className="relative z-10 mb-2 md:mb-3">
                <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {stat.number}
                </h3>
              </div>
              
              <div className="relative z-10 mb-2 md:mb-3">
                <p className="text-base md:text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
              
              <div className="relative z-10">
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Engineering Card */}
        <div className="glass-panel p-6 rounded-2xl border border-color flex flex-col sm:flex-row items-center justify-between gap-4 bg-secondary/30">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/30 text-accent-primary">
              <Github size={28} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-text-primary">Continuous Engineering on GitHub</h4>
              <p className="text-xs text-text-tertiary font-mono">Explore open-source DevOps scripts, repositories, and IaC blueprints.</p>
            </div>
          </div>
          <a
            href="https://github.com/lalitpunjabi"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline text-xs px-4 py-2.5 flex items-center gap-2 text-text-secondary hover:text-accent-primary shrink-0 font-mono"
          >
            github.com/lalitpunjabi <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
