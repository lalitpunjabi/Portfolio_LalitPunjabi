import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import ParticleBackground from './ParticleBackground';

export default function HeroSection() {
  const typewriterText = useTypewriter([
    'DevOps Engineer',
    'Cloud Architect',
    'Site Reliability Engineer',
    'Automation Specialist'
  ]);

  return (
    <section className="hero-section relative overflow-hidden">
      {/* Enhanced Particle Background */}
      <ParticleBackground />
      
      <div className="container hero-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">

        {/* LEFT SIDE */}
        <div className="hero-content animate-slide-up-fade">

          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#041425]/90 mb-8 border border-[#0a2c4a] shadow-[0_0_18px_rgba(0,220,255,0.25)] animate-scale-in hover-lift cursor-default tech-border group hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-500">
            <span className="flex items-center justify-center h-2.5 w-2.5 rounded-full bg-[#00e0ff] shadow-[0_0_12px_rgba(0,224,255,0.8)] animate-pulse"></span>
            <span className="text-xs md:text-sm font-mono font-semibold tracking-[0.15em] text-[#00e0ff] uppercase flex items-center gap-2">
              <Sparkles size={14} className="animate-spin-slow group-hover:rotate-12 transition-transform duration-500" />
              Available for opportunities
            </span>
          </div>

          <h1 className="hero-title leading-tight mb-6 text-5xl md:text-[5.5rem] animate-slide-up-fade delay-200">
            <span className="block text-text-primary hover-glow transition-all duration-500 relative inline-block group">
              Lalit
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-accent-primary group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(236,72,153,0.6)]"></div>
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-accent-primary font-extrabold tracking-tight pb-2 animate-glow-pulse block hover:scale-[1.02] transition-transform duration-700">
              Punjabi
            </span>
          </h1>

          <h2 className="text-2xl font-mono text-accent-primary mb-6 h-8 flex items-center animate-slide-up-fade delay-300">
            <span className="text-text-tertiary mr-3 font-semibold animate-bounce-slow">&gt;</span>
            {typewriterText}
            <span className="pulse-cursor ml-1 inline-block w-2.5 h-6 bg-accent-primary/80 shadow-[0_0_10px_rgba(0,229,255,0.8)]"></span>
          </h2>

          <p className="hero-subtitle text-[1.1rem] text-text-secondary leading-relaxed max-w-md font-medium mb-10 animate-slide-up-fade delay-400 relative pl-6 border-l-2 border-accent-primary/30 hover:border-accent-primary/60 transition-colors duration-500">
            Aspiring DevOps Engineer specialize in OpenShift Administration with a strong foundation in AI and passionate about building scalable, automated infrastructure.
          </p>

          <div className="hero-cta flex flex-wrap gap-4 mt-8 animate-slide-up-fade delay-500">
            <a href="#projects" className="btn btn-primary flex items-center gap-2 group hover-lift hover-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">View Projects</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a
              href="https://drive.google.com/file/d/1-HYEn4dk7m-nfc-Vod2f87J9JsZgi0Ut/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline flex items-center gap-2 group hover-lift relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Download size={16} className="relative z-10 group-hover:-translate-y-1 group-hover:rotate-12 transition-all duration-300" />
              <span className="relative z-10">Resume</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-end gap-8 animate-slide-up-fade delay-600">

          {/* Profile Photo - Right Side */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 animate-float group">
            <div className="relative w-full h-full rounded-xl p-1 bg-bg-secondary shadow-lg hover:shadow-glow transition-all duration-500 group-hover:scale-105">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-primary/30 to-purple-500/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10"></div>
              <img
                src="/images/media__1772393850602.png"
                alt="Lalit Punjabi"
                className="w-full h-full object-cover rounded-xl border-[3px] border-bg-main group-hover:border-accent-primary/50 transition-all duration-500"
              />
            </div>
          </div>

          {/* Personal Details - Terminal Style */}
          <div className="glass-panel rounded-xl overflow-hidden shadow-card border border-color w-full hover:border-accent-primary/40 hover:shadow-glow transition-all duration-500 animate-scale-in delay-800">
            <div className="terminal-header">
              <div className="terminal-btn close"></div>
              <div className="terminal-btn minimize"></div>
              <div className="terminal-btn maximize"></div>
              <div className="terminal-title">personal details -- ~</div>
            </div>

            {/* Terminal Body */}
            <div className="terminal-body p-6 font-mono text-sm bg-[#0d1117]/80 backdrop-blur-sm">
              {/* Command Line */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-emerald-400 font-bold">➜</span>
                <span className="text-cyan-400 font-bold">~</span>
                <span className="text-text-secondary">cat</span>
                <span className="text-purple-400">personal_info.json</span>
              </div>

              {/* JSON Output */}
              <div className="text-text-secondary leading-relaxed space-y-2 pl-4 border-l-2 border-accent-primary/20">
                <div className="hover:bg-accent-primary/5 hover:translate-x-1 transition-all duration-300 cursor-default px-2 py-1 rounded">
                  <span className="text-purple-400">{`"name"`}</span>: <span className="text-green-400">"Lalit Punjabi"</span>,
                </div>
                <div className="hover:bg-accent-primary/5 hover:translate-x-1 transition-all duration-300 cursor-default px-2 py-1 rounded">
                  <span className="text-purple-400">{`"age"`}</span>: <span className="text-cyan-400">21</span>,
                </div>
                <div className="hover:bg-accent-primary/5 hover:translate-x-1 transition-all duration-300 cursor-default px-2 py-1 rounded">
                  <span className="text-purple-400">{`"nationality"`}</span>: <span className="text-green-400">"Indian"</span>,
                </div>
                <div className="hover:bg-accent-primary/5 hover:translate-x-1 transition-all duration-300 cursor-default px-2 py-1 rounded">
                  <span className="text-purple-400">{`"languages"`}</span>: [<span className="text-green-400">"English"</span>, <span className="text-green-400">"Hindi"</span>],
                </div>
                <div className="hover:bg-accent-primary/5 hover:translate-x-1 transition-all duration-300 cursor-default px-2 py-1 rounded">
                  <span className="text-purple-400">{`"hobbies"`}</span>: [<span className="text-green-400">"Gym"</span>, <span className="text-green-400">"Football"</span>],
                </div>
                <div className="hover:bg-accent-primary/5 hover:translate-x-1 transition-all duration-300 cursor-default px-2 py-1 rounded">
                  <span className="text-purple-400">{`"location"`}</span>: <span className="text-green-400">"Bikaner, Rajasthan, India"</span>,
                </div>
                <div className="hover:bg-accent-primary/5 hover:translate-x-1 transition-all duration-300 cursor-default px-2 py-1 rounded">
                  <span className="text-purple-400">{`"availability"`}</span>: <span className="text-cyan-400 font-bold">"Open to Opportunities"</span>
                </div>
              </div>

              {/* Cursor Line */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-accent-primary/10">
                <span className="text-emerald-400 font-bold">➜</span>
                <span className="text-cyan-400 font-bold">~</span>
                <span className="w-2.5 h-5 bg-accent-primary/80 animate-pulse inline-block"></span>
              </div>
            </div>
          </div>

          {/* Skillset Terminal */}
          <div className="glass-panel rounded-xl overflow-hidden shadow-card border border-color w-full hover:border-accent-primary/40 hover:shadow-glow transition-all duration-500 animate-scale-in delay-800">
            <div className="terminal-header">
              <div className="terminal-btn close"></div>
              <div className="terminal-btn minimize"></div>
              <div className="terminal-btn maximize"></div>
              <div className="terminal-title">bash -- ~</div>
            </div>

            <div className="terminal-body font-mono text-sm">
              <div className="terminal-line">
                <span className="text-accent">$</span> cat skillset.json
              </div>
              <div className="terminal-output text-success">
{`{
  "os": "Linux (RHEL 9)",
  "cloud": "AWS (EC2, S3, IAM)",
  "containers": ["Docker", "Kubernetes"],
  "automation": "Ansible",
  "ci_cd": ["GitHub Actions", "Jenkins"]
}`}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}