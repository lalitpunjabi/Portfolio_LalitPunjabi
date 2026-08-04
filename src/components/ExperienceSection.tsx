import { Users, Mic, Briefcase, Calendar, MapPin, Star } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function ExperienceSection() {
  const internships = [
    {
      company: 'Davine Technologies',
      role: 'DevOps Intern',
      duration: '7th Jul 2026 – Present',
      location: 'Remote',
      bullets: [
        'Collaborating on cloud infrastructure administration, environment orchestration, and deployment automation.',
        'Learning and implementing scalable cloud architectures and CI/CD pipelines to optimize software delivery cycles.'
      ]
    },
    {
      company: 'GRRAS Solutions Pvt. Ltd.',
      role: 'Certified Kubernetes Administrator Intern',
      duration: '21st May 2026 – 5th Jul 2026',
      location: 'Hybrid',
      bullets: [
        'Deployed and managed containerized applications using Kubernetes Pods, Deployments, Services, ConfigMaps, Secrets, Ingress, RBAC, and Persistent Volumes.',
        'Performed application scaling, rolling updates, Linux troubleshooting, and Kubernetes resource management.'
      ]
    },
    {
      company: 'TechForce Academy Australia',
      role: 'Salesforce Programming Architect Intern',
      duration: '24th Jun 2025 – 25th Aug 2025',
      location: 'Remote',
      bullets: [
        'Gained hands-on exposure to Salesforce architecture, cloud platform fundamentals, and enterprise application design.'
      ]
    }
  ];

  const leadership = [
    {
      title: 'Hack Arya Verse',
      role: 'Lead Organizer',
      icon: <Users size={24} />,
      bullets: [
        'Led technical coordination across multiple teams, ensuring smooth integration of hackathon platforms and tools for 500+ participants.',
        'Managed team execution by adopting agile methodologies to organize schedules, distribute tasks, and handle on-site technical emergencies efficiently.',
        'Driven communication and anchored the main stage, demonstrating end-to-end ownership and public speaking leadership.'
      ]
    },
    {
      title: 'AceHack 4.0',
      role: 'Lead Anchor | UEM, ZeroIndex, ACM-UEMJ',
      icon: <Mic size={24} />,
      bullets: [
        'Served as the lead anchor of AceHack 4.0, representing Arya College of Engineering & IT and the Arya Hackathon Club as the voice behind a revolution of code, creativity, and courage.'
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-secondary border-t border-color pb-24 relative overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent-primary/5 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent-purple/5 rounded-full blur-3xl pointer-events-none animate-float-delayed"></div>

      <div className="container relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="section-title inline-block relative group text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Professional Experience & Leadership
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-accent-primary via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 shadow-[0_0_20px_rgba(0,229,255,0.6)]"></div>
          </h2>
          <p className="text-text-secondary mt-4 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Demonstrated engineering experience and hackathon leadership roles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN - PROFESSIONAL INTERNSHIPS (7 COLS) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <span className="p-1.5 rounded-lg bg-accent-primary/10 text-accent-primary border border-accent-primary/20 shrink-0">
                <Briefcase size={20} />
              </span>
              Work Experience & Internships
            </h3>

            <div className="space-y-6">
              {internships.map((job, index) => (
                <SpotlightCard 
                  key={index}
                  className="p-5 sm:p-6 md:p-8 rounded-xl relative overflow-hidden group hover-lift hover:border-accent-primary/40 transition-all duration-500 animate-scale-in tech-border"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {/* Subtle top light effect */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-[40px] pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold group-hover:text-accent-primary transition-colors duration-300">
                          {job.company}
                        </h4>
                        <p className="text-accent-primary/95 text-sm sm:text-base font-semibold">
                          {job.role}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2.5 sm:text-right shrink-0">
                        <span className="flex items-center gap-1 text-[11px] sm:text-xs text-text-secondary bg-bg-secondary px-3 py-1 rounded-full border border-color font-medium group-hover:border-accent-primary/20 group-hover:text-accent-primary transition-all">
                          <Calendar size={12} /> {job.duration}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] sm:text-xs text-text-secondary bg-bg-secondary px-3 py-1 rounded-full border border-color font-medium group-hover:border-accent-primary/20 group-hover:text-accent-primary transition-all">
                          <MapPin size={12} /> {job.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-text-secondary text-sm sm:text-base pl-4 border-l border-accent-primary/20 group-hover:border-accent-primary/40 transition-colors">
                      {job.bullets.map((bullet, idx) => (
                        <li key={idx} className="relative group/bullet transition-all hover:text-text-primary pl-1">
                          <span className="absolute -left-[21px] top-2 w-1.5 h-1.5 rounded-full bg-accent-primary/50 group-hover/bullet:bg-accent-primary group-hover/bullet:scale-125 transition-all"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - LEADERSHIP & COMMUNITY (5 COLS) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <span className="p-1.5 rounded-lg bg-accent-purple/10 text-accent-purple border border-accent-purple/20 shrink-0">
                <Star size={20} className="text-purple-400" />
              </span>
              Leadership & Community
            </h3>

            <div className="space-y-6">
              {leadership.map((lead, index) => (
                <SpotlightCard 
                  key={index}
                  className="p-5 sm:p-6 md:p-8 rounded-xl relative overflow-hidden group hover-lift hover:border-accent-purple/40 transition-all duration-500 animate-scale-in tech-border"
                  style={{ animationDelay: `${(index + 3) * 120}ms` }}
                >
                  {/* Subtle top light effect */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-[40px] pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 group-hover:translate-x-1 transition-transform">
                      <div className="p-2.5 bg-bg-tertiary rounded-lg text-accent-purple border border-color group-hover:border-accent-purple/40 group-hover:bg-accent-purple/10 group-hover:scale-105 transition-all duration-500 shadow-sm shrink-0">
                        {lead.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold group-hover:text-accent-purple transition-colors duration-300">
                          {lead.title}
                        </h4>
                        <p className="text-purple-400 text-sm font-semibold">
                          {lead.role}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-text-secondary text-sm pl-4 border-l border-accent-purple/20 group-hover:border-accent-purple/40 transition-colors">
                      {lead.bullets.map((bullet, idx) => (
                        <li key={idx} className="relative group/bullet transition-all hover:text-text-primary pl-1">
                          <span className="absolute -left-[21px] top-2 w-1.5 h-1.5 rounded-full bg-accent-purple/50 group-hover/bullet:bg-purple-400 group-hover/bullet:scale-125 transition-all"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
