import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Terminal, FileText, Search, Download, Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

interface HeroSectionProps {
  onOpenResume?: () => void;
  onOpenPalette?: () => void;
  isRecruiterMode?: boolean;
  onToggleRecruiterMode?: () => void;
}

export default function HeroSection({ onOpenResume, onOpenPalette, isRecruiterMode = false }: HeroSectionProps) {

  const typewriterText = useTypewriter([
    'Kubernetes Cluster Orchestration',
    'AWS EC2, VPC & EKS Architecture',
    'Automated CI/CD Pipeline Security',
    'Terraform & Ansible Automation'
  ]);

  const resumeUrl = "https://drive.google.com/file/d/1Z3KWY-u0CRRqhxd26ZznGPZ0TBoG8dHk/view?usp=sharing";

  const [inputVal, setInputVal] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command: string; output: string | React.ReactNode }>>([
    {
      command: 'system_init.sh',
      output: (
        <div className="space-y-1 text-xs font-mono">
          <p className="text-accent-primary font-bold">Lalit DevSecOps Interactive Console v2.6.0</p>
          <p className="text-emerald-400">✔ Connection established: node-ap-south-1.dev</p>
          <p className="text-gray-400">Type a command or click a quick-action tag below:</p>
        </div>
      )
    }
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
          <div className="text-xs text-gray-300 space-y-1 font-mono">
            <p className="text-accent-primary font-bold">Available Commands:</p>
            <p className="text-emerald-400">  neofetch      - Show profile card & system statistics</p>
            <p className="text-emerald-400">  skills        - List core cloud & DevOps arsenal</p>
            <p className="text-emerald-400">  terraform     - Preview IaC HCL execution plan</p>
            <p className="text-emerald-400">  k8s-nodes     - List active Kubernetes EKS worker nodes</p>
            <p className="text-emerald-400">  security-scan - Trigger Trivy container vulnerability scan</p>
            <p className="text-emerald-400">  experience    - Show summarized internships timeline</p>
            <p className="text-emerald-400">  contact       - Display social handles & email details</p>
            <p className="text-emerald-400">  clear         - Wipe console output logs</p>
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
            <div className="space-y-1 text-white">
              <p className="font-bold text-accent-primary">Lalit Punjabi @ devops-node</p>
              <p className="text-gray-500">----------------------------</p>
              <p><span className="text-purple-400 font-bold">OS:</span> Red Hat Enterprise Linux 9 / AWS Linux 2023</p>
              <p><span className="text-purple-400 font-bold">Current:</span> DevOps Intern @ Davine Technologies</p>
              <p><span className="text-purple-400 font-bold">Cert:</span> RHCSA Certified (Red Hat)</p>
              <p><span className="text-purple-400 font-bold">GPA:</span> 9.43 / 10.0 (B.Tech AI & Data Science)</p>
              <p><span className="text-purple-400 font-bold">Cluster:</span> Amazon EKS (ap-south-1)</p>
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
  "iac": "Terraform HCL",
  "containers": ["Docker", "Kubernetes", "Helm"],
  "automation": "Ansible",
  "ci_cd": ["Jenkins", "GitHub Actions", "GitLab CI/CD"],
  "monitoring": ["Prometheus", "Grafana"]
}`}
          </pre>
        );
        break;
      case 'terraform':
        output = (
          <div className="text-xs text-emerald-300 font-mono space-y-1">
            <p className="text-accent-primary font-bold">Plan: 4 to add, 0 to change, 0 to destroy.</p>
            <p>+ aws_vpc.main_vpc (10.0.0.0/16)</p>
            <p>+ aws_eks_cluster.devsecops_cluster (v1.29)</p>
            <p>+ aws_rds_cluster.db_multi_az (PostgreSQL 15)</p>
            <p>+ aws_wafv2_web_acl.edge_waf (OWASP Ruleset)</p>
          </div>
        );
        break;
      case 'k8s-nodes':
        output = (
          <div className="text-xs text-gray-300 font-mono space-y-1">
            <p className="text-cyan-400 font-bold">NAME                               STATUS   ROLES    AGE   VERSION</p>
            <p>ip-10-0-1-42.ap-south-1.compute.internal   Ready    worker   45d   v1.29.2-eks</p>
            <p>ip-10-0-2-88.ap-south-1.compute.internal   Ready    worker   45d   v1.29.2-eks</p>
            <p>ip-10-0-3-19.ap-south-1.compute.internal   Ready    worker   45d   v1.29.2-eks</p>
          </div>
        );
        break;
      case 'security-scan':
        output = (
          <div className="text-xs text-emerald-400 font-mono space-y-1">
            <p className="text-accent-primary font-bold">Trivy Vulnerability Report (node:20-alpine):</p>
            <p>Total: 0 (UNKNOWN: 0, LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0)</p>
            <p className="text-emerald-300">✔ Image passed compliance policy. Ready for production image registry.</p>
          </div>
        );
        break;
      case 'experience':
        output = (
          <div className="text-xs text-gray-300 space-y-1 font-mono">
            <p className="text-white font-bold">💼 Internships Timeline:</p>
            <p>➜ <span className="text-emerald-400">DevOps Intern</span> @ Davine Technologies (Jul 2026 - Present)</p>
            <p>➜ <span className="text-emerald-400">Kubernetes Intern</span> @ GRRAS Solutions (May 2026 - Jul 2026)</p>
            <p>➜ <span className="text-emerald-400">Salesforce Arch Intern</span> @ TechForce Academy (Jun 2025 - Aug 2025)</p>
          </div>
        );
        break;
      case 'contact':
        output = (
          <div className="text-xs text-gray-300 space-y-1 font-mono">
            <p>➜ <span className="text-purple-400 font-bold">Email:</span> lalitpunjabi.pro@gmail.com</p>
            <p>➜ <span className="text-purple-400 font-bold">LinkedIn:</span> linkedin.com/in/lalit-punjabi-443911312/</p>
            <p>➜ <span className="text-purple-400 font-bold">GitHub:</span> github.com/lalitpunjabi</p>
          </div>
        );
        break;
      default:
        output = (
          <div className="text-xs text-red-400 font-mono">
            bash: command not found: {cleanCmd}. Type 'help' for available commands.
          </div>
        );
    }

    setTerminalHistory(prev => [...prev, { command: cleanCmd, output }]);
    setInputVal('');
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    if (onOpenResume) {
      e.preventDefault();
      onOpenResume();
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 sm:pt-36 md:pt-40 pb-16 px-4 md:px-6 lg:px-8 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN — HERO TEXT & PROOF BADGES */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for DevOps & Cloud Roles
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Lalit Punjabi
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-primary font-mono tracking-tight">
                DevOps & Cloud Engineer
              </h2>
            </div>

            {/* Typewriter Specialty Subtitle */}
            <div className="text-xs sm:text-sm font-mono text-gray-400 flex items-center gap-2 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
              <span className="text-accent-primary font-bold">Focus:</span>
              <span className="text-gray-200">{typewriterText}</span>
            </div>

            {/* Supporting Core Statement */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Building and automating cloud infrastructure, containerized workloads and CI/CD systems with AWS, Kubernetes, Docker and Infrastructure as Code.
            </p>

            {/* Hero Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 text-xs font-mono text-gray-300">
                <GraduationCap size={16} className="text-accent-primary shrink-0" />
                <div>
                  <span className="text-white font-bold block text-[11px]">B.Tech AI & DS</span>
                  <span className="text-[10px] text-gray-400">CGPA: 9.43</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 text-xs font-mono text-gray-300">
                <Award size={16} className="text-red-400 shrink-0" />
                <div>
                  <span className="text-white font-bold block text-[11px]">RHCSA Certified</span>
                  <span className="text-[10px] text-gray-400">Red Hat RHEL 9</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 text-xs font-mono text-gray-300 col-span-2 sm:col-span-1">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <div>
                  <span className="text-white font-bold block text-[11px]">Cloud AWS & K8s</span>
                  <span className="text-[10px] text-gray-400">Production Ready</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-full bg-accent-primary text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-accent-primary/90 transition-all shadow-lg hover:scale-105"
              >
                View Featured Projects <ArrowRight size={16} />
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={handleResumeClick}
                className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs flex items-center gap-2 transition-all hover:scale-105"
              >
                <FileText size={16} className="text-accent-primary" /> Download Resume
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all"
                title="Download Resume directly from Google Drive"
              >
                <Download size={15} />
              </a>

              {onOpenPalette && (
                <button
                  onClick={onOpenPalette}
                  className="p-3 rounded-full bg-[#161b22] hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-all font-mono text-xs flex items-center gap-1.5"
                  title="Open Command Palette (Ctrl + K)"
                >
                  <Search size={15} className="text-accent-primary" /> 
                  <kbd className="hidden sm:inline text-[10px] bg-black/40 px-1.5 py-0.5 rounded border border-white/10">⌘K</kbd>
                </button>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN — MINIMAL CLOUD TOPOLOGY & PROFILE CARD */}
          <div className="lg:col-span-6 flex flex-col gap-6 items-center lg:items-stretch w-full">
            
            {/* Sleek Profile Photo Card & Status Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full glass-card p-5 rounded-3xl border border-white/10 bg-[#0f141d]/70 backdrop-blur-md shadow-2xl">
              
              {/* Profile Photo Thumbnail Card */}
              <div 
                className="rounded-2xl overflow-hidden border-2 border-accent-primary/40 shadow-[0_0_25px_rgba(0,229,255,0.2)] relative group shrink-0 bg-[#0d1117]"
                style={{ width: '180px', height: '230px', minWidth: '180px', minHeight: '230px', maxWidth: '180px', maxHeight: '230px', overflow: 'hidden' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src="/images/IMG-20260918-WA0000.jpg"
                  alt="Lalit Punjabi - DevOps Engineer"
                  loading="eager"
                  decoding="async"
                  className="group-hover:scale-105 transition-transform duration-500"
                  style={{ width: '180px', height: '230px', maxWidth: '180px', maxHeight: '230px', objectFit: 'cover', objectPosition: 'top' }}
                />
                <div className="absolute bottom-2 left-1.5 right-1.5 z-20 text-[10px] font-mono text-center text-accent-primary bg-black/80 backdrop-blur-sm py-1 rounded-md border border-accent-primary/30 font-bold truncate">
                  Lalit Punjabi
                </div>
              </div>

              {/* Minimal Cloud Topology Visual */}
              <div className="flex-1 space-y-3 font-mono text-xs text-gray-300 w-full">
                <div className="text-[11px] font-bold text-accent-primary uppercase tracking-wider border-b border-white/10 pb-1.5 flex items-center justify-between">
                  <span>Cloud Topology Flow</span>
                  <span className="text-emerald-400 text-[9px] uppercase font-bold">✔ Active</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-gray-300">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 font-semibold">GitHub</div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 font-semibold">CI/CD</div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 font-semibold">Docker</div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 font-semibold">K8s EKS</div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 font-semibold">AWS VPC</div>
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 font-bold text-emerald-400">Prod</div>
                </div>

                <div className="text-[11px] text-gray-400 space-y-1 pt-1 border-t border-white/5">
                  <p><span className="text-white font-bold">Role:</span> DevOps Intern @ Davine Technologies</p>
                  <p><span className="text-white font-bold">Location:</span> Jaipur, Rajasthan, India</p>
                </div>
              </div>

            </div>

            {/* Interactive Terminal Window (or Dev Mode console) */}
            {!isRecruiterMode && (
              <div className="w-full flex flex-col min-w-0">
                <div 
                  className="glass-panel rounded-2xl overflow-hidden flex flex-col border border-white/10 hover:border-accent-primary/40 hover:shadow-glow transition-all duration-500 bg-[#0d1117]/95"
                  onClick={focusInput}
                >
                  {/* Terminal Window Header */}
                  <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-2.5 flex items-center relative shrink-0">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="absolute inset-x-0 text-center text-[11px] font-mono text-gray-400 pointer-events-none flex items-center justify-center gap-1.5">
                      <Terminal size={12} className="text-accent-primary animate-pulse" /> 
                      lalitpunjabi@devops-node:~
                    </div>
                  </div>

                  {/* Command Bar Tags */}
                  <div className="bg-[#0f141c]/90 px-3 py-2 border-b border-[#21262d] flex flex-wrap items-center gap-1 shrink-0">
                    <span className="text-[10px] text-gray-400 font-mono mr-1">RUN:</span>
                    {['neofetch', 'skills', 'terraform', 'k8s-nodes', 'security-scan', 'contact', 'clear'].map((cmd) => (
                      <button
                        key={cmd}
                        onClick={(e) => {
                          e.stopPropagation();
                          executeCommand(cmd);
                        }}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c2128] hover:bg-accent-primary/15 hover:text-accent-primary border border-[#30363d] hover:border-accent-primary/40 transition-all font-semibold cursor-pointer text-gray-300"
                      >
                        ./{cmd}
                      </button>
                    ))}
                  </div>

                  {/* Output Terminal Stream */}
                  <div 
                    ref={terminalBodyRef}
                    className="p-4 font-mono text-xs leading-relaxed overflow-y-auto max-h-[190px] text-gray-300 space-y-3"
                  >
                    {terminalHistory.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center">
                          <span className="text-emerald-400 mr-1.5">➜</span>
                          <span className="text-cyan-400 mr-1.5">~</span>
                          <span className="text-purple-400">./{item.command}</span>
                        </div>
                        <div className="text-gray-300 pl-4">{item.output}</div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Terminal Input Prompt */}
                  <form onSubmit={handleSubmit} className="bg-[#161b22] px-4 py-2 border-t border-[#30363d] flex items-center shrink-0">
                    <span className="text-emerald-400 font-mono text-xs mr-2">➜</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder="Type 'help' or click a command tag..."
                      className="w-full bg-transparent border-none outline-none font-mono text-xs text-white placeholder:text-gray-500"
                    />
                  </form>

                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

