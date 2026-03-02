import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
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
            <div className="glass-panel rounded-2xl overflow-hidden shadow-card transition-shadow duration-500 hover:shadow-glow bg-bg-secondary/40 backdrop-blur-xl border border-color">
              <div className="px-4 py-3 bg-bg-tertiary/50 border-b border-color flex items-center relative">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/30 border border-red-400/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/30 border border-amber-400/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400/30 border border-emerald-400/50"></div>
                </div>
                <div className="absolute inset-x-0 text-center text-xs font-mono text-text-tertiary pointer-events-none">send-message.sh</div>
              </div>
              
              <div className="p-6 md:p-8 bg-bg-main/30">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      required
                      className="w-full bg-bg-secondary/40 border border-color rounded-xl px-4 py-3.5 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-primary/50 focus:bg-bg-tertiary transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      required
                      className="w-full bg-bg-secondary/40 border border-color rounded-xl px-4 py-3.5 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-primary/50 focus:bg-bg-tertiary transition-all"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      required
                      rows={4}
                      className="w-full bg-bg-secondary/40 border border-color rounded-xl px-4 py-3.5 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-primary/50 focus:bg-bg-tertiary transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formStatus !== 'idle'}
                    className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      formStatus === 'sent' 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                        : 'btn-primary'
                    }`}
                  >
                    {formStatus === 'idle' && <><Send size={18} /> Send Message</>}
                    {formStatus === 'sending' && <span className="animate-pulse">Transmitting...</span>}
                    {formStatus === 'sent' && <span>Delivery Confirmed</span>}
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
