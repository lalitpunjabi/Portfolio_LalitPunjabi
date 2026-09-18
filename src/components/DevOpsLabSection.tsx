import { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, CheckCircle2, ShieldCheck, Cpu, Database, Server, Cloud, Layers, Terminal, Sparkles, Activity } from 'lucide-react';

export default function DevOpsLabSection() {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'topology'>('pipeline');

  // CI/CD Simulator State
  const [isRunning, setIsRunning] = useState(false);
  const [currentStageIndex, setCurrentStageIndex] = useState(-1);
  const [logs, setLogs] = useState<string[]>([
    '[SYSTEM] DevSecOps Engine initialized. Click "Run Pipeline" to execute simulation.'
  ]);
  const activeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pipelineStages = [
    { id: 'lint', name: 'Lint & SAST', icon: <Terminal size={15} />, duration: 900, details: 'Running ESLint & SonarQube SAST scan...' },
    { id: 'security', name: 'Trivy CVE Audit', icon: <ShieldCheck size={15} />, duration: 1100, details: 'Scanning OCI container base image dependencies for vulnerabilities...' },
    { id: 'build', name: 'Docker Build & ECR', icon: <Cpu size={15} />, duration: 1200, details: 'Building multi-stage Alpine image (sha256:8f4b2) & pushing to AWS ECR...' },
    { id: 'terraform', name: 'Terraform IaC', icon: <Cloud size={15} />, duration: 1000, details: 'Applying HCL manifest: 4 resources added, 0 changed, 0 destroyed.' },
    { id: 'k8s', name: 'EKS Rollout', icon: <Layers size={15} />, duration: 900, details: 'kubectl rollout status deployment/web-api --namespace production.' }
  ];

  const stopPipeline = () => {
    if (activeTimerRef.current) {
      clearTimeout(activeTimerRef.current);
      activeTimerRef.current = null;
    }
  };

  const runPipeline = () => {
    stopPipeline();
    setIsRunning(true);
    setCurrentStageIndex(0);
    setLogs(['[SYSTEM] Initializing DevSecOps automated deployment pipeline...']);

    const processStage = (stageIdx: number) => {
      if (stageIdx >= pipelineStages.length) {
        setIsRunning(false);
        setCurrentStageIndex(pipelineStages.length);
        setLogs(prev => [
          ...prev,
          `[SUCCESS] All ${pipelineStages.length} pipeline stages passed cleanly!`,
          `[DEPLOYMENT] Live endpoint updated to production cluster (https://api.lalitpunjabi.dev)`
        ]);
        return;
      }

      setCurrentStageIndex(stageIdx);
      const stageData = pipelineStages[stageIdx];
      setLogs(prev => [
        ...prev,
        `[STAGE ${stageIdx + 1}/${pipelineStages.length}] ${stageData.name.toUpperCase()} STARTED`,
        `  ↳ ${stageData.details}`
      ]);

      activeTimerRef.current = setTimeout(() => {
        setLogs(prev => [...prev, `[PASSED] ${stageData.name} completed successfully (0 errors).`]);
        processStage(stageIdx + 1);
      }, stageData.duration);
    };

    processStage(0);
  };

  const resetPipeline = () => {
    stopPipeline();
    setIsRunning(false);
    setCurrentStageIndex(-1);
    setLogs(['[SYSTEM] Pipeline reset. Click "Run Pipeline" to execute simulation.']);
  };

  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => stopPipeline();
  }, []);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Topology Diagram Selected Node
  const [selectedNode, setSelectedNode] = useState<string>('eks');

  const topologyNodes: Record<string, { title: string; type: string; details: string[]; specs: string }> = {
    waf: {
      title: 'AWS WAF & CloudFront CDN',
      type: 'Edge Security Layer',
      specs: 'DDoS mitigation, TLS 1.3, Geo-restriction & OWASP Top 10 rulesets',
      details: [
        'Global edge caching via Amazon CloudFront distribution',
        'Managed WAF rules protecting API gateways from SQLi & XSS',
        'SSL/TLS certificate automation via AWS Certificate Manager'
      ]
    },
    alb: {
      title: 'Application Load Balancer (ALB)',
      type: 'Traffic Ingress & Routing',
      specs: 'Multi-AZ distribution, HTTP/2, Path-based routing, Health probes every 5s',
      details: [
        'Decouples public subnet traffic from private application cluster',
        'Automatic target group health checks & SSL termination',
        'Auto Scaling trigger on request count & CPU threshold (>70%)'
      ]
    },
    eks: {
      title: 'Amazon EKS Kubernetes Cluster',
      type: 'Compute Infrastructure Layer',
      specs: 'Kubernetes v1.29, Bottlerocket OS, Auto-scaling node groups (3-10 instances)',
      details: [
        'Managed Node Groups across 3 Availability Zones (ap-south-1)',
        'Calico CNI for Network Policy pod isolation',
        'Prometheus & Grafana sidecar agents for pod metrics telemetry'
      ]
    },
    rds: {
      title: 'Multi-AZ Amazon RDS PostgreSQL / MySQL',
      type: 'Persistent Data Layer',
      specs: 'Multi-AZ synchronous replication, Encrypted KMS storage, Automated snapshots',
      details: [
        'Private Subnet isolation with zero public IP exposure',
        'Read Replicas enabled for heavy database query scaling',
        'Automated daily backups with 30-day point-in-time recovery'
      ]
    },
    sec: {
      title: 'HashiCorp Vault & AWS Secrets Manager',
      type: 'Security & Identity Layer',
      specs: 'Dynamic DB credentials, IAM OIDC integration, Encryption keys (KMS)',
      details: [
        'Zero-Trust secret injection into K8s pods via Secrets Store CSI',
        'Automatic 90-day secret rotation workflows',
        'Audit logs piped directly to CloudWatch Security Hub'
      ]
    }
  };

  return (
    <section id="devops-lab" className="section bg-main relative overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-8 animate-slide-up-fade">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-mono mb-3">
            <Sparkles size={14} /> DEVSECOPS & CLOUD LAB VISUALIZER
          </div>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Interactive Infrastructure & CI/CD Engine
          </h2>
          <p className="text-text-secondary mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Test real-time pipeline build simulations and inspect production cloud topology blueprints.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-8">
          <div className="p-1 rounded-xl bg-[#0b0f19] border border-border-color flex gap-2">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-5 py-2 rounded-lg font-mono text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'pipeline'
                  ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30 shadow-glow'
                  : 'text-text-tertiary hover:text-text-primary'
              }`}
            >
              <Terminal size={15} /> CI/CD Pipeline Simulator
            </button>
            <button
              onClick={() => setActiveTab('topology')}
              className={`px-5 py-2 rounded-lg font-mono text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'topology'
                  ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30 shadow-glow'
                  : 'text-text-tertiary hover:text-text-primary'
              }`}
            >
              <Cloud size={15} /> Cloud Topology Viewer
            </button>
          </div>
        </div>

        {/* TAB 1: CI/CD PIPELINE SIMULATOR */}
        {activeTab === 'pipeline' && (
          <div className="glass-panel rounded-2xl border border-border-color p-6 md:p-8 relative bg-secondary/30 space-y-6">
            
            {/* Header Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border-color pb-5">
              <div>
                <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                  <Activity size={18} className="text-accent-primary" /> Automated DevSecOps Deployment Pipeline
                </h3>
                <p className="text-xs text-text-tertiary font-mono">Lint → Security Audit → OCI Build → Terraform → EKS Deployment</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={runPipeline}
                  disabled={isRunning}
                  className={`btn btn-primary text-xs px-4 py-2 flex items-center gap-2 ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <Play size={14} className={isRunning ? 'animate-spin' : ''} /> {isRunning ? 'Running Pipeline...' : 'Run Pipeline'}
                </button>
                <button
                  onClick={resetPipeline}
                  disabled={isRunning}
                  className="btn btn-outline text-xs px-3 py-2 text-text-tertiary hover:text-text-primary flex items-center gap-1.5"
                >
                  <RotateCcw size={14} /> Reset
                </button>
              </div>
            </div>

            {/* Stage Progress Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {pipelineStages.map((stg, idx) => {
                const isPassed = currentStageIndex > idx || (currentStageIndex === pipelineStages.length && !isRunning);
                const isCurrent = currentStageIndex === idx && isRunning;

                return (
                  <div
                    key={stg.id}
                    className={`p-3.5 rounded-xl border transition-all relative font-mono text-xs ${
                      isPassed
                        ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                        : isCurrent
                        ? 'bg-accent-primary/20 border-accent-primary text-accent-primary shadow-glow animate-pulse'
                        : 'bg-[#0b0f19] border-border-color text-text-tertiary'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-1 rounded bg-black/40">{stg.icon}</span>
                      {isPassed ? (
                        <CheckCircle2 size={16} className="text-emerald-400" />
                      ) : isCurrent ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-accent-primary animate-ping"></span>
                      ) : (
                        <span className="text-[10px] text-text-tertiary">#0{idx + 1}</span>
                      )}
                    </div>
                    <div className="font-bold text-text-primary text-[11px] mb-1">{stg.name}</div>
                    <div className="text-[10px] opacity-75 truncate">{isPassed ? '✓ Passed' : isCurrent ? '⚡ In Progress' : 'Pending'}</div>
                  </div>
                );
              })}
            </div>

            {/* Terminal Stream Output */}
            <div className="rounded-xl overflow-hidden border border-[#30363d] bg-[#0d1117] font-mono text-xs">
              <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between text-text-tertiary">
                <span className="flex items-center gap-2 text-xs">
                  <Terminal size={14} className="text-accent-primary" /> pipeline-execution.log
                </span>
                <span className="text-[10px]">Jenkins / GitHub Actions Runner</span>
              </div>
              <div ref={logContainerRef} className="p-4 h-[200px] overflow-y-auto space-y-1.5 text-gray-300 leading-relaxed">
                {logs.map((log, i) => (
                  <div key={i} className={
                    log.includes('[SUCCESS]') ? 'text-emerald-400 font-bold' :
                    log.includes('[STAGE') ? 'text-cyan-400 font-semibold' :
                    log.includes('[PASSED]') ? 'text-emerald-300' : 'text-gray-400'
                  }>
                    {log}
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: CLOUD TOPOLOGY VIEWER */}
        {activeTab === 'topology' && (
          <div className="glass-panel rounded-2xl border border-border-color p-6 md:p-8 bg-secondary/30 grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Diagram Nodes Interactive Map (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-3 font-mono">
              <div className="text-xs text-text-tertiary font-semibold uppercase tracking-wider mb-1">
                Select a Cloud Infrastructure Node to Inspect Specs:
              </div>

              {/* Node 1: Edge WAF */}
              <button
                onClick={() => setSelectedNode('waf')}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedNode === 'waf'
                    ? 'bg-purple-500/20 border-purple-500 text-purple-300 shadow-glow'
                    : 'bg-[#0b0f19] border-border-color hover:border-purple-500/40 text-text-secondary'
                }`}
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-purple-400 shrink-0" />
                  <div>
                    <div className="font-bold text-xs text-text-primary">AWS WAF & CloudFront CDN</div>
                    <div className="text-[10px] text-text-tertiary">Edge Security & Global Caching</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30">Edge</span>
              </button>

              <div className="text-center text-xs text-accent-primary/60 font-mono py-0.5">↓ HTTPS Ingress</div>

              {/* Node 2: ALB */}
              <button
                onClick={() => setSelectedNode('alb')}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedNode === 'alb'
                    ? 'bg-accent-primary/20 border-accent-primary text-accent-primary shadow-glow'
                    : 'bg-[#0b0f19] border-border-color hover:border-accent-primary/40 text-text-secondary'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Server size={18} className="text-accent-primary shrink-0" />
                  <div>
                    <div className="font-bold text-xs text-text-primary">Application Load Balancer (ALB)</div>
                    <div className="text-[10px] text-text-tertiary">Public Subnet Target Group Ingress</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-accent-primary/10 text-accent-primary border border-accent-primary/30">Routing</span>
              </button>

              <div className="text-center text-xs text-accent-primary/60 font-mono py-0.5">↓ Private VPC Peering</div>

              {/* Node 3: EKS Cluster */}
              <button
                onClick={() => setSelectedNode('eks')}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedNode === 'eks'
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-glow'
                    : 'bg-[#0b0f19] border-border-color hover:border-emerald-500/40 text-text-secondary'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Layers size={18} className="text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-bold text-xs text-text-primary">Amazon EKS Kubernetes Cluster</div>
                    <div className="text-[10px] text-text-tertiary">Private Subnet Worker Node Groups</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Compute</span>
              </button>

              <div className="text-center text-xs text-accent-primary/60 font-mono py-0.5">↙ Security Subnet Isolation ↘</div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedNode('rds')}
                  className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                    selectedNode === 'rds'
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-glow'
                      : 'bg-[#0b0f19] border-border-color hover:border-amber-500/40 text-text-secondary'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Database size={16} className="text-amber-400 shrink-0" />
                    <div>
                      <div className="font-bold text-xs text-text-primary">Multi-AZ RDS DB</div>
                      <div className="text-[10px] text-text-tertiary">Persistent Storage</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedNode('sec')}
                  className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                    selectedNode === 'sec'
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-glow'
                      : 'bg-[#0b0f19] border-border-color hover:border-cyan-500/40 text-text-secondary'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck size={16} className="text-cyan-400 shrink-0" />
                    <div>
                      <div className="font-bold text-xs text-text-primary">HashiCorp Vault</div>
                      <div className="text-[10px] text-text-tertiary">Secrets & KMS</div>
                    </div>
                  </div>
                </button>
              </div>

            </div>

            {/* Inspector Panel (5 Cols) */}
            <div className="lg:col-span-5 bg-[#0b0f19] border border-border-color rounded-xl p-5 flex flex-col justify-between">
              {topologyNodes[selectedNode] && (
                <div className="space-y-4">
                  <div className="border-b border-border-color pb-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-accent-primary/10 text-accent-primary border border-accent-primary/30">
                      {topologyNodes[selectedNode].type}
                    </span>
                    <h4 className="text-base font-bold text-text-primary mt-2">
                      {topologyNodes[selectedNode].title}
                    </h4>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-text-tertiary mb-1">SPECIFICATION:</div>
                    <div className="p-3 rounded-xl bg-secondary/80 text-xs font-mono text-emerald-400 border border-border-color">
                      {topologyNodes[selectedNode].specs}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-text-tertiary mb-2">INFRASTRUCTURE HIGHLIGHTS:</div>
                    <ul className="space-y-2">
                      {topologyNodes[selectedNode].details.map((dt, i) => (
                        <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                          <span className="text-accent-primary shrink-0">▸</span>
                          <span>{dt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-3 border-t border-border-color text-[10px] font-mono text-text-tertiary flex items-center justify-between">
                <span>Infrastructure Blueprint v3.2</span>
                <span className="text-emerald-400">● 100% Terraform</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
