import { Server, Cloud, Code, Zap } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: <Server size={32} />,
      number: '99.9%',
      label: 'Uptime Achievement',
      description: 'Consistent high availability across all deployments',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: <Cloud size={32} />,
      number: '15+',
      label: 'Cloud Projects',
      description: 'Production-grade infrastructure on AWS & Azure',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Code size={32} />,
      number: '50+',
      label: 'Automation Scripts',
      description: 'Reducing manual work through intelligent automation',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: <Zap size={32} />,
      number: '10x',
      label: 'Deployment Speed',
      description: 'Accelerated CI/CD pipelines with optimized workflows',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section className="section relative overflow-hidden py-12 md:py-16 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container relative z-10 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl bg-bg-secondary/50 backdrop-blur-sm border border-color hover:border-accent-primary/30 transition-all duration-500 hover-lift overflow-hidden tech-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              
              {/* Icon with glow */}
              <div className="relative z-10 mb-4 md:mb-6">
                <div className={`inline-flex p-3 md:p-4 rounded-lg md:rounded-xl bg-gradient-to-br ${stat.color}/10 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {stat.icon}
                </div>
              </div>
              
              {/* Number with gradient */}
              <div className="relative z-10 mb-2 md:mb-3">
                <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {stat.number}
                </h3>
              </div>
              
              {/* Label */}
              <div className="relative z-10 mb-2 md:mb-3">
                <p className="text-base md:text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
              
              {/* Description */}
              <div className="relative z-10">
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300 line-clamp-2 md:line-clamp-none">
                  {stat.description}
                </p>
              </div>
              
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${stat.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl pointer-events-none`}></div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative line */}
        <div className="mt-8 md:mt-12 lg:mt-16 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_20px_rgba(0,229,255,0.8)] animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
