import { ArrowRight, Download } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

export default function HeroSection() {
  const typewriterText = useTypewriter([
    'DevOps Engineer',
    'Cloud Architect',
    'Site Reliability Engineer',
    'Automation Specialist'
  ]);

  return (
    <section className="hero-section">
      <div className="container hero-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="hero-content animate-fade-in order-2 md:order-1">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 backdrop-blur-md hover:bg-emerald-500/20 transition-colors cursor-default shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
            </span>
            <span className="text-sm font-semibold text-emerald-400 tracking-wide uppercase">Available for opportunities</span>
          </div>
          
          <h1 className="hero-title leading-tight mb-6 text-5xl md:text-[5.5rem] drop-shadow-lg">
            <span className="block text-text-primary">Lalit</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-purple-400 to-pink-500 font-extrabold tracking-tight drop-shadow-[0_0_25px_rgba(0,242,254,0.4)] pb-2">Punjabi</span>
          </h1>
          
          <h2 className="text-2xl font-mono text-accent-primary mb-6 h-8 flex items-center">
            <span className="text-text-tertiary mr-3 font-semibold">&gt;</span>
            {typewriterText}
            <span className="pulse-cursor ml-1 inline-block w-2.5 h-6 align-middle bg-accent-primary/80"></span>
          </h2>
          
          <p className="hero-subtitle text-[1.1rem] text-text-secondary leading-relaxed max-w-lg mb-10 font-medium">
            Aspiring DevOps Engineer specialize in OpenShift Administration with a strong foundation in AI and passionate about building scalable, automated infrastructure.
          </p>
          
          <div className="hero-cta flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary flex items-center gap-2">
              View Projects <ArrowRight size={16} />
            </a>
            <a 
              href="https://drive.google.com/file/d/1-HYEn4dk7m-nfc-Vod2f87J9JsZgi0Ut/view?usp=sharing" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in delay-200 flex flex-col items-center gap-8 md:gap-12 pl-0 md:pl-8">
          <div className="relative w-56 h-56 md:w-72 md:h-72 group mt-4 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary via-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-accent-primary via-purple-500 to-pink-500 shadow-[0_0_30px_rgba(0,242,254,0.3)] group-hover:scale-105 transition-transform duration-500 z-10">
              <img 
                src="/images/media__1772393850602.png" 
                alt="Lalit Punjabi" 
                className="w-full h-full object-cover rounded-full border-[6px] border-bg-main shadow-inner"
              />
            </div>
          </div>
          <div className="glass-panel rounded-xl overflow-hidden shadow-card border border-color w-full">
            <div className="terminal-header">
              <div className="terminal-btn close"></div>
              <div className="terminal-btn minimize"></div>
              <div className="terminal-btn maximize"></div>
              <div className="terminal-title">bash -- ~</div>
            </div>
            <div className="terminal-body font-mono">
              <div className="terminal-line">
                <span className="text-accent">$</span> whoami
              </div>
              <div className="terminal-output">Lalit Punjabi</div>
              
              <div className="terminal-line mt-2">
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
              <div className="terminal-line mt-2">
                <span className="text-accent pulse-cursor">$</span> 
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
