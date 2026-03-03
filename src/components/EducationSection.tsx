import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  const educationList = [
    {
      institution: 'Arya College of Engineering & IT',
      affiliation: 'Affiliated to Rajasthan Technical University',
      degree: 'Bachelor of Technology (Artificial Intelligence & Data Science)',
      score: '9.324 CGPA',
      duration: 'August 2023 - May 2027'
    },
    {
      institution: 'Shiksha High School Bikaner',
      affiliation: '12th CBSE',
      degree: 'Senior Secondary',
      score: '72.6%',
      duration: 'March 2022 - May 2023'
    },
    {
      institution: 'Bikaner Boys School Bikaner',
      affiliation: '10th CBSE',
      degree: 'High School',
      score: '85.8%',
      duration: 'March 2020 - August 2021'
    }
  ];

  return (
    <section id="education" className="section relative pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-3xl pointer-events-none animate-float-delayed"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12 animate-slide-up-fade">
          <h2 className="section-title inline-block relative group">
            Education
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-accent-primary via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 shadow-[0_0_20px_rgba(0,229,255,0.6)]"></div>
          </h2>
          <p className="text-text-secondary mt-4 text-lg">Academic background and qualifications</p>
        </div>
        
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {educationList.map((edu, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 rounded-2xl relative overflow-hidden transition-all hover:shadow-glow group cursor-default hover-lift hover:border-accent-primary/40 animate-scale-in tech-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced effects */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-start gap-5 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                  <div className="p-4 bg-bg-tertiary rounded-xl text-accent-primary mt-1 border border-color group-hover:border-accent-primary/40 group-hover:bg-accent-primary/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                    <GraduationCap size={28} className="group-hover:animate-pulse transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="text-[1.35rem] font-semibold mb-1.5 text-text-primary group-hover:text-accent-primary transition-colors duration-300">{edu.institution}</h3>
                    <p className="text-text-primary/90 font-medium mb-1.5">{edu.affiliation}</p>
                    <p className="text-text-secondary text-sm">{edu.degree} - <span className="text-accent-primary font-medium inline-block group-hover:scale-105 transition-transform duration-300">{edu.score}</span></p>
                  </div>
                </div>
                
                <div className="mt-2 md:mt-0 text-right shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <span className="inline-block px-4 py-2 border border-color rounded-full bg-bg-secondary text-[13px] font-medium text-text-secondary shadow-sm group-hover:border-accent-primary/30 group-hover:bg-accent-primary/10 group-hover:text-accent-primary transition-all duration-300">
                    {edu.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
