import { Server, Cloud, Code, ShieldCheck } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { skillsData } from '../data/skills';

export default function TechStackSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Server': return <Server size={20} />;
      case 'Cloud': return <Cloud size={20} />;
      case 'Code': return <Code size={20} />;
      default: return <ShieldCheck size={20} />;
    }
  };

  return (
    <section id="tech-stack" className="section relative overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] bg-accent-primary/5 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] bg-accent-purple/5 rounded-full blur-3xl pointer-events-none animate-float-delayed"></div>
      
      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 animate-slide-up-fade">
          <h2 className="section-title inline-block relative group text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Technical Arsenal
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-accent-primary via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 shadow-[0_0_20px_rgba(0,229,255,0.6)]"></div>
          </h2>
          <p className="text-text-secondary mt-4 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Structured capability domains across Cloud, DevOps, Infrastructure as Code, and Software Engineering
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((category, index) => (
            <SpotlightCard 
              key={index} 
              className="p-6 rounded-xl relative overflow-hidden group hover-lift hover:border-accent-primary/40 transition-all duration-500 animate-scale-in tech-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4 border-b border-color pb-3">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-lg bg-accent-primary/10 text-accent-primary border border-accent-primary/20 shrink-0">
                    {getIcon(category.iconName)}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-text-tertiary font-mono">{category.subtitle}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <span className="text-xs font-semibold text-text-secondary font-mono tracking-wide">
                      {item.name}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.capabilities.map((cap, capIdx) => (
                        <span 
                          key={capIdx}
                          className="px-2.5 py-1 text-xs rounded-md bg-bg-main/80 text-text-secondary border border-color font-sans hover:border-accent-primary/40 hover:text-text-primary transition-colors"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

