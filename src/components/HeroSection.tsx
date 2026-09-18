import { ArrowRight, Download, Sparkles, Terminal } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import ParticleBackground from './ParticleBackground';
import { useState, useRef, useEffect } from 'react';

export default function HeroSection() {
  const typewriterText = useTypewriter([
    'DevOps Engineer',
    'Cloud Architect',
    'Site Reliability Engineer',
    'Automation Specialist'
  ]);

  const [inputVal, setInputVal] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command: string; output: string | React.ReactNode }>>([
    {
      command: 'system_init.sh',
      output: (
        <div className="space-y-1 text-xs font-mono">
          <p className="text-accent-primary font-bold">Lalit DevSecOps Interactive Console v2.5.0</p>
          <p className="text-emerald-400">✔ Connection established: node-ap-south-1.dev</p>
          <p className="text-text-tertiary">Type a command or click a quick-action tag below:</p>
        </div>
      )
    }
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    let output: string | React.ReactNode = '';

    switch (cleanCmd) {
      case 'help':
        output = (
          <div className="text-xs text-text-secondary space-y-1 font-mono">
            <p>Available commands:</p>
            <p className="text-accent-primary">  neofetch    - Show profile card & system statistics</p>
            <p className="text-accent-primary">  skills      - List core cloud & DevOps arsenal</p>
            <p className="text-accent-primary">  experience  - Show summarized internships timeline</p>
            <p className="text-accent-primary">  contact     - Display social handles & email details</p>
            <p className="text-accent-primary">  clear       - Wipe console output logs</p>
          </div>
        );
        break;
      case 'clear':
        setTerminalHistory([]);
        setInputVal('');
        return;
      case 'neofetch':
        output = (
          <div className="text-xs font-mono flex flex-col sm:flex-row gap-4 items-stretch text-[#00e5ff] overflow-x-auto">
            <pre className="text-purple-400 font-bold leading-tight shrink-0 hidden xs:block">
{`   ______   __  
  / ____/  / /  
 / /      / /   
/ /___   / /___ 
\\____/  /_____/ 
                `}
            </pre>
            <div className="space-y-1 text-text-primary">
              <p className="font-bold text-accent-primary">Lalit Punjabi @ devops-node</p>
              <p className="text-text-tertiary">----------------------------</p>
              <p><span className="text-purple-400 font-bold">OS:</span> Linux (RHEL 9, Ubuntu, Amazon Linux)</p>
              <p><span className="text-purple-400 font-bold">Current:</span> DevOps Intern @ Davine Tech</p>
              <p><span className="text-purple-400 font-bold">Cert:</span> RHCSA Certified (Red Hat)</p>
              <p><span className="text-purple-400 font-bold">GPA:</span> 9.42 / 10.0 (B.Tech AI & Data Science)</p>
              <p><span className="text-purple-400 font-bold">Uptime:</span> 21 Years</p>
              <p><span className="text-purple-400 font-bold">Shell:</span> zsh / bash</p>
            </div>
          </div>
        );
        break;
      case 'skills':
        output = (
          <pre className="text-xs text-emerald-400 font-mono whitespace-pre-wrap">
{`{
  "cloud": "AWS (EC2, S3, IAM, VPC, RDS, ELB, Route53, CloudFront)",
  "iac": "Terraform",
  "containers": ["Docker", "Kubernetes"],
  "automation": "Ansible",
  "ci_cd": ["Jenkins", "GitHub Actions", "GitLab CI/CD"]
}`}
          </pre>
        );
        break;
      case 'experience':
        output = (
          <div className="text-xs text-text-secondary space-y-1 font-mono">
            <p className="text-text-primary font-bold">💼 Summary of Internships:</p>
            <p>➜ <span className="text-emerald-400">DevOps Intern</span> @ Davine Technologies (Jul 2026 - Present)</p>
            <p>➜ <span className="text-emerald-400">Kubernetes Intern</span> @ GRRAS Solutions (May 2026 - Jul 2026)</p>
            <p>➜ <span className="text-emerald-400">Salesforce Arch Intern</span> @ TechForce Academy (Jun 2025 - Aug 2025)</p>
          </div>
        );
        break;
      case 'contact':
        output = (
          <div className="text-xs text-text-secondary space-y-1 font-mono">
            <p>➜ <span className="text-purple-400 font-bold">Email:</span> lalitpunjabi.pro@gmail.com</p>
            <p>➜ <span className="text-purple-400 font-bold">LinkedIn:</span> linkedin.com/in/lalit-punjabi-443911312/</p>
            <p>➜ <span className="text-purple-400 font-bold">GitHub:</span> github.com/lalitpunjabi</p>
          </div>
        );
        break;
      default:
        output = (
          <div className="text-xs text-red-400 font-mono">
            bash: command not found: {cleanCmd}. Type 'help' for options.
          </div>
        );
    }

    setTerminalHistory(prev => [...prev, { command: cmd, output }]);
    setInputVal('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <section className="hero-section relative overflow-hidden">
      <ParticleBackground />

      <div className="container hero-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#041425]/90 mb-8 border border-[#0a2c4a] w-fit">
            <span className="h-2.5 w-2.5 rounded-full bg-[#00e0ff] animate-pulse"></span>
            <span className="text-xs font-mono font-semibold tracking-[0.15em] text-[#00e0ff] uppercase flex items-center gap-2">
              <Sparkles size={14} />
              Available for opportunities
            </span>
          </div>

          <h1 className="hero-title cyber-glitch-hover cursor-default">
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
            Aspiring DevOps Engineer specializing in Kubernetes, AWS, and Cloud Architecture, 
            passionate about building automated, scalable, and resilient infrastructure.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={16} />
            </a>

            <a
              href="https://drive.google.com/file/d/1HLKgUImrQAsIRylnowpZaikM_608o-_D/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — INTERACTIVE DUAL COLUMN LAYOUT */}
        <div className="flex flex-col sm:flex-row gap-6 h-full items-stretch min-h-[400px]">

          {/* PHOTO (Full Height) */}
          <div className="w-full sm:w-[150px] flex-shrink-0">
            <div className="h-full rounded-xl overflow-hidden border border-color shadow-card relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img
                src="/images/IMG-20260918-WA0000.png"
                alt="Lalit Punjabi"
                className="w-full h-[220px] sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* INTERACTIVE DevSecOps CONSOLE */}
          <div className="flex-1 flex flex-col min-w-0">
            <div 
              className="glass-panel rounded-xl overflow-hidden flex-1 flex flex-col border border-color hover:border-accent-primary/30 hover:shadow-glow transition-all duration-500"
              onClick={focusInput}
            >
              {/* Terminal Window Header */}
              <div className="terminal-header bg-[#161b22] border-b border-[#30363d] px-4 py-3 flex items-center relative shrink-0">
                <div className="flex gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
                </div>
                <div className="absolute inset-x-0 text-center text-xs font-mono text-gray-400 pointer-events-none flex items-center justify-center gap-1.5">
                  <Terminal size={12} className="text-accent-primary animate-pulse" /> 
                  lalitpunjabi@devops-node:~
                </div>
              </div>

              {/* Console Toolbar / Command badging */}
              <div className="bg-[#0f141c]/90 px-4 py-2 border-b border-[#21262d] flex flex-wrap items-center gap-1.5 shrink-0">
                <span className="text-[10px] text-text-tertiary font-mono mr-1.5">QUICK COMMANDS:</span>
                {['neofetch', 'skills', 'experience', 'contact', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={(e) => {
                      e.stopPropagation();
                      executeCommand(cmd);
                    }}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c2128] hover:bg-accent-primary/10 hover:text-accent-primary border border-[#30363d] hover:border-accent-primary/40 transition-all font-semibold cursor-pointer text-text-secondary"
                  >
                    ./{cmd}
                  </button>
                ))}
              </div>

              {/* Scrollable output body */}
              <div 
                ref={terminalBodyRef}
                className="p-4 bg-[#0d1117]/85 font-mono text-sm leading-relaxed overflow-y-auto flex-1 max-h-[300px] text-gray-300 space-y-3"
              >
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center text-xs">
                      <span className="text-emerald-400 mr-2">➜</span>
                      <span className="text-cyan-400 mr-2">~</span>
                      <span className="text-purple-400">./{item.command}</span>
                    </div>
                    <div className="pl-4 text-text-primary">{item.output}</div>
                  </div>
                ))}
              </div>

              {/* Input Command Line */}
              <form 
                onSubmit={handleFormSubmit}
                className="bg-[#0d1117]/95 border-t border-[#30363d] px-4 py-3 flex items-center gap-2 shrink-0 font-mono text-sm"
              >
                <span className="text-emerald-400">➜</span>
                <span className="text-cyan-400">~</span>
                <span className="text-text-tertiary">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Type 'help' and press Enter..."
                  className="flex-1 bg-transparent border-none text-accent-primary focus:outline-none placeholder:text-gray-600 font-mono"
                />
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
