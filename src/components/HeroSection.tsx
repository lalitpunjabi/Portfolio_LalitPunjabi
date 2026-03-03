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
      <div className="container hero-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="hero-content animate-fade-in">

          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#041425]/90 mb-8 border border-[#0a2c4a] shadow-[0_0_18px_rgba(0,220,255,0.25)]">
            <span className="flex items-center justify-center h-2.5 w-2.5 rounded-full bg-[#00e0ff] shadow-[0_0_12px_rgba(0,224,255,0.8)]" />
            <span className="text-xs md:text-sm font-mono font-semibold tracking-[0.15em] text-[#00e0ff] uppercase">
              Available for opportunities
            </span>
          </div>

          <h1 className="hero-title leading-tight mb-6 text-5xl md:text-[5.5rem]">
            <span className="block text-text-primary">Lalit</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-purple-400 to-pink-500 font-extrabold tracking-tight pb-2">
              Punjabi
            </span>
          </h1>

          <h2 className="text-2xl font-mono text-accent-primary mb-6 h-8 flex items-center">
            <span className="text-text-tertiary mr-3 font-semibold">&gt;</span>
            {typewriterText}
            <span className="pulse-cursor ml-1 inline-block w-2.5 h-6 bg-accent-primary/80"></span>
          </h2>

          <p className="hero-subtitle text-[1.1rem] text-text-secondary leading-relaxed max-w-md font-medium mb-10">
            Aspiring DevOps Engineer specialize in OpenShift Administration with a strong foundation in AI and passionate about building scalable, automated infrastructure.
          </p>

          <div className="hero-cta flex flex-wrap gap-4 mt-8">
            <a href="#projects" className="btn btn-primary flex items-center gap-2 group">
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1-HYEn4dk7m-nfc-Vod2f87J9JsZgi0Ut/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline flex items-center gap-2 group"
            >
              <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-end gap-8">

          {/* Small Photo Right Side */}
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <div className="relative w-full h-full rounded-xl p-1 bg-bg-secondary shadow-lg">
              <img
                src="/images/media__1772393850602.png"
                alt="Lalit Punjabi"
                className="w-full h-full object-cover rounded-xl border-[3px] border-bg-main"
              />
            </div>
          </div>

          {/* Personal Details */}
          <div className="glass-panel p-6 rounded-xl shadow-card border border-color w-full">
            <h3 className="text-lg mb-4 font-semibold text-gradient-accent">
              Personal Details
            </h3>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li><strong className="text-text-primary">DOB:</strong> 04/09/2004</li>
              <li><strong className="text-text-primary">Nationality:</strong> Indian</li>
              <li><strong className="text-text-primary">Languages:</strong> English, Hindi</li>
              <li><strong className="text-text-primary">Hobbies:</strong> Gym, Football</li>
              <li><strong className="text-text-primary">Address:</strong> A-109 Samta Nagar Bikaner</li>
            </ul>
          </div>

          {/* Skillset Terminal */}
          <div className="glass-panel rounded-xl overflow-hidden shadow-card border border-color w-full">
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