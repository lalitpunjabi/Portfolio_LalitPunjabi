import { Users, Mic } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section bg-secondary border-t border-color pb-16">
      <div className="container">
        <h2 className="section-title">Leadership & Experience</h2>
        
        <div className="flex flex-col gap-8">
          <div className="experience-card bg-main p-8 border border-color rounded-lg relative overflow-hidden transition-all hover:shadow-md hover:border-accent">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-5 rounded-bl-[100px] z-0 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-tertiary rounded-lg text-accent">
                  <Users size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Hack Arya Verse</h3>
                  <p className="text-secondary text-lg font-medium">Lead Organizer</p>
                </div>
              </div>
              
              <ul className="space-y-4 text-primary">
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

          <div className="experience-card bg-main p-8 border border-color rounded-lg relative overflow-hidden transition-all hover:shadow-md hover:border-accent">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-5 rounded-bl-[100px] z-0 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-tertiary rounded-lg text-accent">
                  <Mic size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">AceHack 4.0</h3>
                  <p className="text-secondary text-lg font-medium">Lead Anchor | UEM, ZeroIndex, ACM-UEMJ</p>
                </div>
              </div>
              
              <ul className="space-y-4 text-primary">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
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
