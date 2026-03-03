import { Server, Monitor, Layers, Code2, Wrench } from 'lucide-react';

export default function TechStackSection() {
  const categories = [
    {
      title: 'Containerization & Automation',
      items: ['Docker', 'Ansible'],
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
      items: ['VM Workstation', 'Git & GitHub', 'Visual Studio Code', 'Eclipse', 'MySQL'],
      icon: <Wrench size={20} />,
      color: 'text-amber-400',
      bgFade: 'from-amber-400'
    }
  ];

  return (
    <section id="tech-stack" className="section">
      <div className="container">
        <h2 className="section-title">Technical Arsenal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="glass-panel p-6 rounded-xl relative overflow-hidden group hover:border-color transition-all duration-500">
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgFade}/5 to-transparent pointer-events-none z-0 group-hover:opacity-100 opacity-50 transition-opacity duration-500`}></div>
              
              <h3 className="text-[1.05rem] font-bold mb-5 border-b border-color pb-3 relative z-10 text-text-primary flex items-center gap-3">
                <span className={`${category.color} opacity-80 group-hover:opacity-100 transition-opacity`}>{category.icon}</span> 
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.items.map((item, idx) => (
                  <span key={idx} className="flex items-center px-3 py-1.5 bg-bg-main/60 border border-color rounded-md text-[0.8rem] tracking-wide font-medium text-text-secondary transition-all duration-300 hover:scale-[1.03] hover:text-text-primary hover:border-color hover:bg-bg-tertiary cursor-default shadow-sm">
                    {item}
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
