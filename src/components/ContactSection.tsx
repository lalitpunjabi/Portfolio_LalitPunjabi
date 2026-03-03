import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: EMAILJS_CONFIG.toEmail
        },
        EMAILJS_CONFIG.publicKey
      );
      
      setFormStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send message:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section bg-main border-t border-color pb-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-3xl pointer-events-none animate-float-delayed"></div>
      
      <div className="container relative z-10">
        
        <div className="text-center mb-16 animate-slide-up-fade">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-sm font-mono mb-6 shadow-[0_0_20px_rgba(0,229,255,0.15)] animate-glow-pulse tech-border">
             <span className="text-accent animate-pulse">&gt;_</span>
             <span className="text-accent ml-2 font-semibold">contact_sequence.init()</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold animate-slide-up-fade delay-100 mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-purple-400 to-pink-500 drop-shadow-[0_0_25px_rgba(0,242,254,0.4)] animate-glow-pulse">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent-primary to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(0,229,255,0.6)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Premium Contact Cards */}
          <div className="space-y-6 animate-slide-up-fade delay-200">
            <div className="text-left mb-8">
              <h3 className="text-3xl font-bold text-text-primary mb-3 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-accent-primary to-purple-500 rounded-full shadow-[0_0_15px_rgba(0,229,255,0.6)]"></span>
                Let's Connect
              </h3>
              <p className="text-secondary text-lg leading-relaxed max-w-md hover:text-text-primary transition-all duration-300 pl-5 border-l-2 border-accent-primary/20">
                Ready to build something amazing together? Let's discuss your next DevOps or Cloud project!
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <a href="mailto:lalitpunjabi.pro@gmail.com" className="group relative block p-5 rounded-2xl bg-bg-secondary/50 backdrop-blur-sm border border-accent-primary/20 hover:border-accent-primary/50 transition-all duration-500 hover-lift hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full blur-2xl group-hover:bg-accent-primary/10 transition-all duration-500 -mr-16 -mt-16"></div>
                <div className="relative flex items-center gap-5">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-accent-primary/20 to-purple-500/20 border border-accent-primary/30 flex items-center justify-center text-accent-primary group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all duration-500">
                    <Mail size={24} className="group-hover:animate-pulse" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-accent-primary uppercase tracking-wider">Email</span>
                      <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse shadow-[0_0_10px_rgba(0,229,255,0.8)]"></div>
                    </div>
                    <p className="text-text-primary font-bold text-lg truncate group-hover:text-accent-primary transition-colors">lalitpunjabi.pro@gmail.com</p>
                    <p className="text-text-tertiary text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to open email client →</p>
                  </div>
                  <div className="absolute right-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                    <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="group relative block p-5 rounded-2xl bg-bg-secondary/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover-lift hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] overflow-hidden cursor-default">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all duration-500 -mr-16 -mt-16"></div>
                <div className="relative flex items-center gap-5">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] transition-all duration-500">
                    <MapPin size={24} className="group-hover:animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Location</span>
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_rgba(124,58,237,0.8)]"></div>
                    </div>
                    <p className="text-text-primary font-bold text-lg">Bikaner, Rajasthan, India</p>
                    <p className="text-text-tertiary text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Open to remote & relocation</p>
                  </div>
                  <div className="absolute right-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a href="https://www.linkedin.com/in/lalit-punjabi-443911312/" target="_blank" rel="noreferrer" className="group relative block p-5 rounded-2xl bg-bg-secondary/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 hover-lift hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-500 -mr-16 -mt-16"></div>
                <div className="relative flex items-center gap-5">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-500">
                    <Linkedin size={24} className="group-hover:animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">LinkedIn</span>
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                    </div>
                    <p className="text-text-primary font-bold text-lg group-hover:text-blue-400 transition-colors">lalit-punjabi-443911312</p>
                    <p className="text-text-tertiary text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Connect on LinkedIn ↗</p>
                  </div>
                  <div className="absolute right-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* GitHub Card */}
              <a href="https://github.com/lalitpunjabi" target="_blank" rel="noreferrer" className="group relative block p-5 rounded-2xl bg-bg-secondary/50 backdrop-blur-sm border border-gray-500/20 hover:border-gray-400/50 transition-all duration-500 hover-lift hover:shadow-[0_0_30px_rgba(156,163,175,0.2)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-500/5 rounded-full blur-2xl group-hover:bg-gray-500/10 transition-all duration-500 -mr-16 -mt-16"></div>
                <div className="relative flex items-center gap-5">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-gray-500/20 to-slate-500/20 border border-gray-500/30 flex items-center justify-center text-gray-400 group-hover:scale-110 group-hover:-rotate-12 group-hover:shadow-[0_0_25px_rgba(156,163,175,0.4)] transition-all duration-500">
                    <Github size={24} className="group-hover:animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">GitHub</span>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse shadow-[0_0_10px_rgba(156,163,175,0.8)]"></div>
                    </div>
                    <p className="text-text-primary font-bold text-lg group-hover:text-gray-400 transition-colors">lalitpunjabi</p>
                    <p className="text-text-tertiary text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">View projects ↗</p>
                  </div>
                  <div className="absolute right-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Terminal Form */}
          <div className="animate-slide-up-fade delay-400 opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="glass-panel rounded-xl overflow-hidden shadow-card border border-color w-full hover:border-accent-primary/40 hover:shadow-glow transition-all duration-500 animate-scale-in delay-800">
              <div className="terminal-header bg-[#161b22] border-b border-[#30363d] px-4 py-3 flex items-center relative">
                <div className="flex gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] shadow-sm"></div>
                </div>
                <div className="absolute inset-x-0 text-center text-xs font-mono text-gray-400 pointer-events-none">
                  contact_form.sh — bash
                </div>
                <div className="w-10"></div>
              </div>
              
              <div className="p-6 md:p-8 bg-[#0d1117]/80 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div className="group/field">
                    <div className="flex items-center mb-2">
                      <span className="text-emerald-400 font-mono text-sm mr-2">➜</span>
                      <span className="text-cyan-400 font-mono text-sm mr-2">~</span>
                      <span className="text-purple-400 font-mono text-xs">./input_name.sh</span>
                    </div>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name..." 
                      required
                      className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-accent-primary/60 focus:bg-[#1c2533] focus:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all font-mono text-sm hover:border-accent-primary/30"
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div className="group/field">
                    <div className="flex items-center mb-2">
                      <span className="text-emerald-400 font-mono text-sm mr-2">➜</span>
                      <span className="text-cyan-400 font-mono text-sm mr-2">~</span>
                      <span className="text-purple-400 font-mono text-xs">./input_email.sh</span>
                    </div>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email..." 
                      required
                      className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-accent-primary/60 focus:bg-[#1c2533] focus:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all font-mono text-sm hover:border-accent-primary/30"
                    />
                  </div>
                  
                  {/* Message Field */}
                  <div className="group/field">
                    <div className="flex items-center mb-2">
                      <span className="text-emerald-400 font-mono text-sm mr-2">➜</span>
                      <span className="text-cyan-400 font-mono text-sm mr-2">~</span>
                      <span className="text-purple-400 font-mono text-xs">./compose_message.sh</span>
                    </div>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..." 
                      required
                      rows={5}
                      className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-accent-primary/60 focus:bg-[#1c2533] focus:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all resize-none font-mono text-sm hover:border-accent-primary/30"
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={formStatus !== 'idle'}
                    className={`w-full py-4 mt-2 rounded-lg font-mono text-sm font-bold flex items-center justify-center gap-3 transition-all duration-300 border-2 ${
                      formStatus === 'sent' 
                        ? 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/50 shadow-[0_0_30px_rgba(16,185,129,0.3)]'
                        : formStatus === 'sending'
                        ? 'bg-accent-primary/20 text-accent-primary border-accent-primary/50 shadow-[0_0_20px_rgba(0,229,255,0.3)] cursor-wait'
                        : 'bg-accent-primary/10 text-accent-primary border-accent-primary/40 hover:bg-accent-primary/25 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-[1.02]'
                    }`}
                  >
                    {formStatus === 'idle' && (
                      <>
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span>./send_message.sh</span>
                      </>
                    )}
                    {formStatus === 'sending' && (
                      <>
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                        <span>Executing script...</span>
                      </>
                    )}
                    {formStatus === 'sent' && (
                      <>
                        <span className="text-lg">✓</span>
                        <span>Message Sent Successfully! [OK]</span>
                      </>
                    )}
                  </button>
                  
                  {/* Status Messages */}
                  {formStatus === 'sent' && (
                    <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm font-mono text-center animate-scale-in">
                      <span className="text-lg mr-2">✓</span>
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {formStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm font-mono text-center animate-scale-in">
                      <span className="text-lg mr-2">✗</span>
                      Failed to send message. Please try again or email me directly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
