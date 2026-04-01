import { Server, Monitor, Layers, Code2, Wrench } from 'lucide-react';

export default function TechStackSection() {
  const categories = [
    {
      title: 'Containerization & Automation',
      items: ['Kubernetes', 'Docker', 'Ansible'],
      icon: <Server size={20} />,
      color: 'text-accent-primary',
      bgFade: 'from-accent-primary'
    },
    {
      title: 'Operating Systems',
      items: ['Linux (RHEL9)', 'RHEL'],
      icon: <Monitor size={20} />,
      color: 'text-accent-purple',
      bgFade: 'from-accent-purple'
    },
    {
      title: 'Tech Stack & Services',
      items: ['LAMP', 'AWS'],
      icon: <Layers size={20} />,
      color: 'text-emerald-400',
      bgFade: 'from-emerald-400'
    },
    {
      title: 'Languages',
      items: ['Python', 'Java', 'C++', 'C'],
      icon: <Code2 size={20} />,
      color: 'text-blue-400',
      bgFade: 'from-blue-400'
    },
    {
      title: 'Developer Tools',
      items: ['VM Workstation', 'Git & GitHub', 'GitLab', 'Visual Studio Code', 'Eclipse', 'MySQL'],
      icon: <Wrench size={20} />,
      color: 'text-amber-400',
      bgFade: 'from-amber-400'
    }
  ];

  return (
    <section id="tech-stack" className="section relative overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Enhanced background decoration */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] bg-accent-primary/5 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] bg-accent-purple/5 rounded-full blur-3xl pointer-events-none animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-gradient-to-r from-accent-primary/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-8 md:mb-10 lg:mb-12 animate-slide-up-fade">
          <h2 className="section-title inline-block relative group text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Technical Arsenal
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-accent-primary via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 shadow-[0_0_20px_rgba(0,229,255,0.6)]"></div>
          </h2>
          <p className="text-text-secondary mt-4 text-base sm:text-lg max-w-2xl mx-auto px-2">Comprehensive toolkit for building scalable cloud infrastructure</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="glass-panel p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl relative overflow-hidden group hover-lift hover:border-accent-primary/40 transition-all duration-500 animate-scale-in hover:shadow-glow tech-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgFade}/10 via-${category.bgFade}/5 to-transparent pointer-events-none z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none z-0"></div>
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-bl ${category.bgFade}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-lg sm:rounded-bl-3xl z-0`}></div>
              
              <h3 className="text-sm sm:text-base md:text-[1.05rem] font-bold mb-3 sm:mb-4 md:mb-5 border-b border-color pb-2 sm:pb-3 relative z-10 text-text-primary flex items-center gap-2 sm:gap-3 group-hover:border-accent-primary/40 transition-all duration-500">
                <span className={`${category.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 drop-shadow-[0_0_8px_currentColor]`}>
                  {category.icon}
                </span> 
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 sm:gap-2.5 relative z-10">
                {category.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="group/chip flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 bg-bg-main/60 border border-color rounded-md text-[0.7rem] sm:text-[0.8rem] tracking-wide font-medium text-text-secondary transition-all duration-300 hover:scale-105 hover:text-text-primary hover:border-accent-primary/50 hover:bg-accent-primary/10 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] cursor-default relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.bgFade}/5 to-transparent opacity-0 group-hover/chip:opacity-100 transition-opacity duration-300`}></div>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/40 mr-2 group-hover/chip:bg-accent-primary group-hover/chip:animate-pulse relative z-10"></span>
                    <span className="relative z-10">{item}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
