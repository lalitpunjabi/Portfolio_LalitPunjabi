import { Rocket, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CurrentlyBuildingSection() {
  return (
    <section id="currently-building" className="py-16 px-4 md:px-8 border-b border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-accent-primary/30 bg-gradient-to-r from-[#0f141d] via-[#111827] to-[#0d1117] relative overflow-hidden shadow-2xl">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <Rocket size={14} /> Currently Active Engineering
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-purple-400">DEPLOYMATE</span>
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Active development on GitOps reconciliation controllers, Trivy container security pipeline hooks, and automated EKS cluster monitoring dashboards.
              </p>
              
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {['GitOps', 'Amazon EKS', 'Trivy Security', 'Helm Charts', 'Prometheus Alerts', 'FastAPI'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-xl bg-accent-primary text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-accent-primary/90 transition-all shadow-lg hover:scale-105"
              >
                Explore Project <ArrowRight size={16} />
              </a>
              <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 flex items-center justify-center gap-2">
                <ShieldCheck size={16} /> Active Status: v2.6 Ready
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
