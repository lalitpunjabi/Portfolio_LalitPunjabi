import { X, ExternalLink, Github, Shield, Server, Cpu, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-[#0d1117] border border-white/10 rounded-3xl shadow-2xl overflow-y-auto flex flex-col font-sans relative text-gray-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#161b22]/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-accent-primary animate-pulse" />
            <h2 className="text-lg sm:text-xl font-bold text-white font-mono">{project.name} • Case Study</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            title="Close modal (Esc)"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Headline & Tagline */}
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-primary/10 text-accent-primary border border-accent-primary/30 inline-block">
              {project.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.name}
            </h1>
            <p className="text-base text-gray-300 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 font-mono flex items-center gap-2">
                Problem Statement
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 font-mono flex items-center gap-2">
                Engineering Solution
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architecture Description */}
          <div className="p-6 rounded-2xl bg-[#0f141d] border border-accent-primary/20 space-y-3 font-mono">
            <h3 className="text-xs uppercase tracking-wider text-accent-primary font-bold flex items-center gap-2">
              <Cpu size={16} /> Architectural Pipeline Topology
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              {project.caseStudy.architectureDescription}
            </p>
          </div>

          {/* DevOps Highlights & Security Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                <Server size={16} className="text-cyan-400" /> DevOps & Infrastructure
              </h3>
              <ul className="space-y-2">
                {project.caseStudy.devopsHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                <Shield size={16} className="text-purple-400" /> DevSecOps Controls
              </h3>
              <ul className="space-y-2">
                {project.caseStudy.securityControls.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 size={15} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Code Snippet (if available) */}
          {project.caseStudy.codeSnippet && (
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                <span>Infrastructure-as-Code ({project.caseStudy.codeSnippet.filename})</span>
                <span className="text-accent-primary uppercase">{project.caseStudy.codeSnippet.language}</span>
              </div>
              <pre className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
                <code>{project.caseStudy.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Deployment Environment Badge */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 font-mono text-xs">
            <div>
              <span className="text-gray-400 block text-[10px]">DEPLOYMENT ENVIRONMENT</span>
              <span className="text-white font-semibold">{project.caseStudy.deploymentEnv}</span>
            </div>
            <div className="flex gap-3">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 transition-colors"
                >
                  <Github size={14} /> Repository
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-3 py-1.5 rounded-lg bg-accent-primary text-black font-bold hover:bg-accent-primary/90 flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
