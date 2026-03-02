export default function TechStackSection() {
  const categories = [
    {
      title: 'Containerization & Automation',
      items: ['Docker', 'Ansible']
    },
    {
      title: 'Operating Systems',
      items: ['Linux (RHEL9)', 'RHEL']
    },
    {
      title: 'Tech Stack & Services',
      items: ['LAMP', 'AWS']
    },
    {
      title: 'Languages',
      items: ['Python', 'Java', 'C++', 'C']
    },
    {
      title: 'Developer Tools',
      items: ['VM Workstation', 'Git & GitHub', 'Visual Studio Code', 'Eclipse', 'MySQL']
    }
  ];

  return (
    <section id="tech-stack" className="section">
      <div className="container">
        <h2 className="section-title">Technical Arsenal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="tech-card p-6 rounded-lg glass-panel relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-0 rounded-bl-full transition-opacity duration-500 group-hover:opacity-10 blur-2xl"></div>
              <h3 className="text-lg font-semibold mb-4 border-b border-color pb-2 relative z-10">{category.title}</h3>
              <ul className="space-y-2 relative z-10">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-secondary text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(0,242,254,0.8)]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
