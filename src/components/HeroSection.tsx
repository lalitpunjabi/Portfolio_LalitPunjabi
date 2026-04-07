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
      <ParticleBackground />

      <div className="container hero-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch relative z-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#041425]/90 mb-8 border border-[#0a2c4a]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#00e0ff] animate-pulse"></span>
            <span className="text-xs font-mono font-semibold tracking-[0.15em] text-[#00e0ff] uppercase flex items-center gap-2">
              <Sparkles size={14} />
              Available for opportunities
            </span>
          </div>

          <h1 className="hero-title">
            <span className="block">Lalit</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-accent-primary font-extrabold block">
              Punjabi
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-mono text-accent-primary mb-6 h-8 flex items-center">
            <span className="mr-3">&gt;</span>
            {typewriterText}
            <span className="pulse-cursor ml-1"></span>
          </h2>

          <p className="hero-subtitle">
            Aspiring DevOps Engineer specialize in OpenShift Administration
            with a strong foundation in AI and passionate about building
            scalable, automated infrastructure.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={16} />
            </a>

            <a
              href="https://drive.google.com/file/d/1CCXkiVJbg0OatwFH1i0Oc4IH6-ThhNCf/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — FIXED STRUCTURE */}
        <div className="flex gap-6 h-full">

          {/* PHOTO (Full Height) */}
          <div className="w-[140px] flex-shrink-0">
            <div className="h-full rounded-xl overflow-hidden border border-color shadow-card">
              <img
                src="/images/media__1772393850602.png"
                alt="Lalit Punjabi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT PANELS */}
          <div className="flex flex-col gap-6 flex-1">

            {/* PERSONAL DETAILS */}
            <div className="glass-panel rounded-xl overflow-hidden">
              <div className="terminal-header">
                <div className="terminal-btn close"></div>
                <div className="terminal-btn minimize"></div>
                <div className="terminal-btn maximize"></div>
                <div className="terminal-title">personal details -- ~</div>
              </div>

              <div className="terminal-body font-mono text-sm">
                <div className="mb-3">
                  <span className="text-emerald-400">➜</span>{' '}
                  <span className="text-cyan-400">~</span>{' '}
                  cat personal_info.json
                </div>

                <div className="space-y-2 border-l-2 border-accent-primary/20 pl-4">
                  <div><span className="text-purple-400">"name"</span>: <span className="text-green-400">"Lalit Punjabi"</span>,</div>
                  <div><span className="text-purple-400">"age"</span>: 21,</div>
                  <div><span className="text-purple-400">"nationality"</span>: <span className="text-green-400">"Indian"</span>,</div>
                  <div><span className="text-purple-400">"languages"</span>: ["English", "Hindi"],</div>
                  <div><span className="text-purple-400">"location"</span>: <span className="text-green-400">"Bikaner, Rajasthan, India"</span></div>
                </div>
              </div>
            </div>

            {/* BASH TERMINAL */}
            <div className="glass-panel rounded-xl overflow-hidden">
              <div className="terminal-header">
                <div className="terminal-btn close"></div>
                <div className="terminal-btn minimize"></div>
                <div className="terminal-btn maximize"></div>
                <div className="terminal-title">bash -- ~</div>
              </div>

              <div className="terminal-body font-mono text-sm">
                <div className="mb-3">$ cat skillset.json</div>
                <pre className="text-success whitespace-pre-wrap">
{`{
  "os": "Linux (RHEL 9)",
  "cloud": "AWS (EC2, S3, IAM, VPC, RDS, EBS, ELB&ASG, Route53, CloudFront, DNS Management, ACM)",
  "containers": ["Docker", "Kubernetes"],
  "automation": "Ansible",
  "ci_cd": ["GitHub Actions", "GitLab CI"]
}`}
                </pre>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}