import { Users, Mic } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section bg-secondary border-t border-color pb-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-3xl pointer-events-none animate-float"></div>
      
      <div className="container relative z-10">
        <h2 className="section-title animate-slide-up-fade">Leadership & Experience</h2>
        
        <div className="flex flex-col gap-8">
          <div className="glass-panel p-8 rounded-xl relative overflow-hidden group hover-lift hover:border-accent-primary/40 transition-all duration-500 animate-scale-in">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-5 rounded-bl-[100px] z-0 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                <div className="p-4 bg-tertiary rounded-lg text-accent group-hover:bg-accent-primary/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                  <Users size={32} className="group-hover:animate-pulse transition-all duration-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-accent-primary transition-colors duration-300">Hack Arya Verse</h3>
                  <p className="text-secondary text-lg font-medium">Lead Organizer</p>
                </div>
              </div>
              
              <ul className="space-y-4 text-primary [&>li]:hover:translate-x-2 [&>li]:transition-all [&>li]:duration-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                  <p><strong>Led technical coordination</strong> across multiple teams, ensuring smooth integration of hackathon platforms and tools for 500+ participants.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                  <p><strong>Managed team execution</strong> by adopting agile methodologies to organize schedules, distribute tasks, and handle on-site technical emergencies efficiently.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                  <p><strong>Driven communication</strong> and anchored the main stage, demonstrating end-to-end ownership and public speaking leadership.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-xl relative overflow-hidden group hover-lift hover:border-accent-primary/40 transition-all duration-500 animate-scale-in delay-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-5 rounded-bl-[100px] z-0 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                <div className="p-4 bg-tertiary rounded-lg text-accent group-hover:bg-accent-primary/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                  <Mic size={32} className="group-hover:animate-pulse transition-all duration-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-accent-primary transition-colors duration-300">AceHack 4.0</h3>
                  <p className="text-secondary text-lg font-medium">Lead Anchor | UEM, ZeroIndex, ACM-UEMJ</p>
                </div>
              </div>
              
              <ul className="space-y-4 text-primary [&>li]:hover:translate-x-2 [&>li]:transition-all [&>li]:duration-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 group-hover:bg-accent-primary group-hover:scale-125 transition-all duration-300"></div>
                  <p>I was the lead anchor of AceHack 4.0, representing Arya College of Engineering & IT and the Arya Hackathon Club. I had the honor of being the voice behind a revolution of code, creativity, and courage.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
