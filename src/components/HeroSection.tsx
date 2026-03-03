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
          
          <div className="flex flex-col xl:flex-row gap-6 items-start xl:items-center mb-10 mt-6 relative z-10">
            <p className="hero-subtitle text-[1.1rem] text-text-secondary leading-relaxed max-w-sm font-medium m-0">
              Aspiring DevOps Engineer specialize in OpenShift Administration with a strong foundation in AI and passionate about building scalable, automated infrastructure.
            </p>
            {/* Reduced size image positioned right next to the text on desktop */}
            <div className="relative w-32 h-32 md:w-36 md:h-36 shrink-0 group z-10 mx-auto xl:mx-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 to-accent-purple/20 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
              <div className="absolute inset-[-2px] rounded-full border border-accent-primary/20 group-hover:border-accent-primary/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all duration-500 z-0"></div>
              <div className="relative w-full h-full rounded-full p-1 bg-bg-secondary shadow-[0_4px_20px_rgba(0,0,0,0.6)] z-10">
                <img 
                  src="/images/media__1772393850602.png" 
                  alt="Lalit Punjabi" 
                  className="w-full h-full object-cover rounded-full border-[3px] border-bg-main shadow-inner relative z-20 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
          
          <div className="hero-cta flex flex-wrap gap-4 mt-8">
            <a href="#projects" className="btn btn-primary flex items-center gap-2 group">
              View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1-HYEn4dk7m-nfc-Vod2f87J9JsZgi0Ut/view?usp=sharing" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline flex items-center gap-2 group"
            >
              <Download size={16} className="group-hover:-translate-y-1 transition-transform" /> Resume
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in delay-200 w-full pl-0 xl:pl-8 relative flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Personal Details Panel */}
            <div className="glass-panel p-6 rounded-xl shadow-card border border-color w-full h-full flex flex-col justify-center relative z-10">
              <h3 className="text-lg mb-4 font-semibold text-gradient-accent flex items-center gap-2">
                <span className="text-xl">🧑‍💻</span> Personal Details
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-accent-primary text-xl">📅</span>
                  <p className="text-text-secondary text-xs lg:text-sm"><strong className="text-text-primary font-medium">DOB:</strong> 04/09/2004</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent-primary text-xl">🌍</span>
                  <p className="text-text-secondary text-xs lg:text-sm"><strong className="text-text-primary font-medium">Nationality:</strong> Indian</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent-primary text-xl">🗣️</span>
                  <p className="text-text-secondary text-xs lg:text-sm"><strong className="text-text-primary font-medium">Languages:</strong> English, Hindi</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent-primary text-xl">⚽</span>
                  <p className="text-text-secondary text-xs lg:text-sm"><strong className="text-text-primary font-medium">Hobbies:</strong> Gym, Football</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary text-xl mt-0.5">📍</span>
                  <p className="text-text-secondary text-xs lg:text-sm"><strong className="text-text-primary font-medium">Address:</strong> A-109 Samta Nagar Bikaner</p>
                </li>
              </ul>
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
