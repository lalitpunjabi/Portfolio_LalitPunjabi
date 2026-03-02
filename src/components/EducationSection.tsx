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
    <section id="education" className="section relative pb-20">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {educationList.map((edu, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl relative overflow-hidden transition-all hover:shadow-glow group cursor-default">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-bg-tertiary rounded-xl text-accent-primary mt-1 border border-color group-hover:border-accent-primary/40 transition-colors">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h3 className="text-[1.35rem] font-semibold mb-1.5 text-text-primary group-hover:text-accent-primary transition-colors">{edu.institution}</h3>
                    <p className="text-text-primary/90 font-medium mb-1.5">{edu.affiliation}</p>
                    <p className="text-text-secondary text-sm">{edu.degree} - <span className="text-accent-primary font-medium">{edu.score}</span></p>
                  </div>
                </div>
                
                <div className="mt-2 md:mt-0 text-right shrink-0">
                  <span className="inline-block px-4 py-2 border border-color rounded-full bg-bg-secondary text-[13px] font-medium text-text-secondary shadow-sm">
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
