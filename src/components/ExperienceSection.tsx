import { Users, Mic } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section bg-secondary border-t border-color pb-12 md:pb-16 relative overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent-green/5 rounded-full blur-3xl pointer-events-none animate-float"></div>
      
      <div className="container relative z-10">
        <h2 className="section-title animate-slide-up-fade text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Leadership & Experience</h2>
        
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="glass-panel p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl relative overflow-hidden group hover-lift hover:border-accent-primary/40 transition-all duration-500 animate-scale-in">
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-accent opacity-5 rounded-bl-lg sm:rounded-bl-[100px] z-0 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 group-hover:translate-x-2 transition-transform duration-500">
                <div className="p-3 sm:p-4 bg-tertiary rounded-lg text-accent group-hover:bg-accent-primary/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] shrink-0">
                  <Users size={28} className="sm:size-32 group-hover:animate-pulse transition-all duration-500" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold group-hover:text-accent-primary transition-colors duration-300">Hack Arya Verse</h3>
                  <p className="text-secondary text-base sm:text-lg font-medium">Lead Organizer</p>
                </div>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 text-primary [&>li]:hover:translate-x-2 [&>li]:transition-all [&>li]:duration-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                  <p className="text-sm sm:text-base"><strong>Led technical coordination</strong> across multiple teams, ensuring smooth integration of hackathon platforms and tools for 500+ participants.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                  <p className="text-sm sm:text-base"><strong>Managed team execution</strong> by adopting agile methodologies to organize schedules, distribute tasks, and handle on-site technical emergencies efficiently.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                  <p className="text-sm sm:text-base"><strong>Driven communication</strong> and anchored the main stage, demonstrating end-to-end ownership and public speaking leadership.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl relative overflow-hidden group hover-lift hover:border-accent-primary/40 transition-all duration-500 animate-scale-in delay-200">
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-accent opacity-5 rounded-bl-lg sm:rounded-bl-[100px] z-0 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 group-hover:translate-x-2 transition-transform duration-500">
                <div className="p-3 sm:p-4 bg-tertiary rounded-lg text-accent group-hover:bg-accent-primary/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] shrink-0">
                  <Mic size={28} className="sm:size-32 group-hover:animate-pulse transition-all duration-500" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold group-hover:text-accent-primary transition-colors duration-300">AceHack 4.0</h3>
                  <p className="text-secondary text-base sm:text-lg font-medium">Lead Anchor | UEM, ZeroIndex, ACM-UEMJ</p>
                </div>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 text-primary [&>li]:hover:translate-x-2 [&>li]:transition-all [&>li]:duration-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 group-hover:bg-accent-primary group-hover:scale-125 transition-all duration-300 shrink-0"></div>
                  <p className="text-sm sm:text-base">I was the lead anchor of AceHack 4.0, representing Arya College of Engineering & IT and the Arya Hackathon Club. I had the honor of being the voice behind a revolution of code, creativity, and courage.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
