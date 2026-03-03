import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-main border-t border-color pb-24">
      <div className="container">
        
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-color bg-tertiary text-sm text-secondary mb-6 font-mono shadow-inner">
             <span className="text-accent">&gt;_</span> contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-accent drop-shadow-[0_0_15px_rgba(0,242,254,0.3)]">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-16 gap-12 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-8 animate-slide-right">
            <p className="text-secondary text-lg leading-relaxed mb-10 max-w-md">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat about DevOps & Cloud!
            </p>

            <div className="space-y-6">
              <a href="mailto:lalitpunjabi.pro@gmail.com" className="flex items-center gap-6 group p-4 -ml-4 rounded-xl transition-all hover:bg-bg-tertiary border border-transparent hover:border-color">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-bg-secondary border border-color flex items-center justify-center text-text-primary group-hover:border-accent-primary/50 group-hover:text-accent-primary transition-all duration-300 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-secondary group-hover:text-primary transition-colors">lalitpunjabi.pro@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group p-4 -ml-4 rounded-xl transition-all hover:bg-bg-tertiary border border-transparent hover:border-color cursor-default">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-bg-secondary border border-color flex items-center justify-center text-text-primary group-hover:border-accent-primary/50 group-hover:text-accent-primary transition-all duration-300 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-secondary group-hover:text-primary transition-colors">Bikaner, Rajasthan, India</p>
                </div>
              </div>

              <a href="https://www.linkedin.com/in/lalit-punjabi-443911312/" target="_blank" rel="noreferrer" className="flex items-center gap-6 group p-4 -ml-4 rounded-xl transition-all hover:bg-bg-tertiary border border-transparent hover:border-color">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-bg-secondary border border-color flex items-center justify-center text-text-primary group-hover:border-accent-primary/50 group-hover:text-accent-primary transition-all duration-300 shadow-sm">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-secondary group-hover:text-primary transition-colors">lalit-punjabi-443911312</p>
                </div>
              </a>

              <a href="https://github.com/lalitpunjabi" target="_blank" rel="noreferrer" className="flex items-center gap-6 group p-4 -ml-4 rounded-xl transition-all hover:bg-bg-tertiary border border-transparent hover:border-color">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-bg-secondary border border-color flex items-center justify-center text-text-primary group-hover:border-accent-primary/50 group-hover:text-accent-primary transition-all duration-300 shadow-sm">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-secondary group-hover:text-primary transition-colors">lalitpunjabi</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Terminal Form */}
          <div className="animate-slide-left opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="rounded-xl overflow-hidden shadow-terminal bg-[#0B1120] border border-[#1E293B] group">
              {/* Mac Terminal Header */}
              <div className="px-4 py-3 bg-[#111827] border-b border-[#1E293B] flex items-center relative">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                </div>
                <div className="absolute inset-x-0 text-center text-xs font-mono text-gray-400 pointer-events-none">
                  bash -- ~
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="text-emerald-400 font-mono text-sm mr-2">$</span>
                      <span className="text-gray-400 font-mono text-xs">enter_name</span>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      required
                      className="w-full bg-[#111827] border border-[#1E293B] rounded-lg px-4 py-3.5 text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-accent-primary/60 focus:bg-[#1A2234] focus:shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-all font-mono text-sm"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="text-emerald-400 font-mono text-sm mr-2">$</span>
                      <span className="text-gray-400 font-mono text-xs">enter_email</span>
                    </div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      required
                      className="w-full bg-[#111827] border border-[#1E293B] rounded-lg px-4 py-3.5 text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-accent-primary/60 focus:bg-[#1A2234] focus:shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-all font-mono text-sm"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="text-emerald-400 font-mono text-sm mr-2">$</span>
                      <span className="text-gray-400 font-mono text-xs">compose_message</span>
                    </div>
                    <textarea 
                      placeholder="Your Message..." 
                      required
                      rows={4}
                      className="w-full bg-[#111827] border border-[#1E293B] rounded-lg px-4 py-3.5 text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-accent-primary/60 focus:bg-[#1A2234] focus:shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-all resize-none font-mono text-sm"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formStatus !== 'idle'}
                    className={`w-full py-3.5 mt-2 rounded-lg font-mono text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      formStatus === 'sent' 
                        ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                        : 'bg-accent-primary/10 text-accent-primary border border-accent-primary/30 hover:bg-accent-primary/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]'
                    }`}
                  >
                    {formStatus === 'idle' && <><span className="text-lg">./</span>send_message.sh</>}
                    {formStatus === 'sending' && <span className="animate-pulse">Executing...</span>}
                    {formStatus === 'sent' && <span>Delivery Confirmed [OK]</span>}
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
