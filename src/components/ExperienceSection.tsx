import { Briefcase, Calendar, MapPin, ExternalLink, Code } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { experienceData } from '../data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section bg-secondary border-t border-color pb-24 relative overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent-primary/5 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent-purple/5 rounded-full blur-3xl pointer-events-none animate-float-delayed"></div>

      <div className="container relative z-10 max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="section-title inline-block relative group text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Engineering Experience
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-accent-primary via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 shadow-[0_0_20px_rgba(0,229,255,0.6)]"></div>
          </h2>
          <p className="text-text-secondary mt-4 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Professional internships, system administration, and infrastructure engineering
          </p>
        </div>

        <div className="space-y-6">
          {experienceData.map((job, index) => (
            <SpotlightCard 
              key={job.id}
              className="p-6 sm:p-8 rounded-xl sm:rounded-2xl relative overflow-hidden group hover-lift hover:border-accent-primary/40 transition-all duration-500 animate-scale-in tech-border"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary border border-accent-primary/20 shrink-0">
                        <Briefcase size={18} />
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold group-hover:text-accent-primary transition-colors duration-300">
                        {job.company}
                      </h3>
                    </div>
                    <p className="text-accent-primary font-semibold text-sm sm:text-base ml-11">
                      {job.role} <span className="text-text-tertiary text-xs">({job.type})</span>
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2.5 shrink-0 ml-11 md:ml-0">
                    <span className="flex items-center gap-1.5 text-xs text-text-secondary bg-bg-secondary px-3 py-1.5 rounded-full border border-color font-medium group-hover:border-accent-primary/30 group-hover:text-accent-primary transition-all">
                      <Calendar size={13} /> {job.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-text-secondary bg-bg-secondary px-3 py-1.5 rounded-full border border-color font-medium group-hover:border-accent-primary/30 group-hover:text-accent-primary transition-all">
                      <MapPin size={13} /> {job.location}
                    </span>
                    {job.credentialUrl && (
                      <a 
                        href={job.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-xs text-accent-primary hover:underline bg-accent-primary/10 px-3 py-1.5 rounded-full border border-accent-primary/30"
                      >
                        <ExternalLink size={12} /> Verification
                      </a>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 text-text-secondary text-sm sm:text-base pl-4 border-l border-accent-primary/20 my-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="relative pl-1">
                      <span className="absolute -left-[21px] top-2 w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
                      {resp}
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs text-text-tertiary font-mono flex items-center gap-1 mr-1">
                    <Code size={12} /> Tech:
                  </span>
                  {job.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-md bg-bg-tertiary text-text-secondary border border-color font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}

