import { useState } from 'react';
import { Github, ShieldCheck, FileCode, CheckCircle2, Copy, Check, BookOpen } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { projectsData, Project } from '../data/projects';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';

interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTabs, setActiveTabs] = useState<Record<string, 'overview' | 'code' | 'security'>>({
    deploymate: 'overview',
    bloodmate: 'overview',
    'cloud-infrastructure-automation': 'overview'
  });

  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const setTab = (id: string, tab: 'overview' | 'code' | 'security') => {
    setActiveTabs(prev => ({ ...prev, [id]: tab }));
  };

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <section id="projects" className="py-24 px-4 md:px-6 lg:px-8 bg-[#0b0f19] relative overflow-hidden border-b border-white/5">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Engineering Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Featured DevOps & Cloud Projects
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Real enterprise projects featuring automated CI/CD security scanning, container orchestration, IaC Terraform modules, and cloud infrastructure.
          </p>
        </div>
        
        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project) => {
            const currentTab = activeTabs[project.id] || 'overview';

            return (
              <SpotlightCard 
                key={project.id} 
                className="group flex flex-col rounded-3xl overflow-hidden relative border border-white/10 hover:border-accent-primary/40 transition-all duration-300 bg-[#0f141d]/70 backdrop-blur-md shadow-2xl"
              >
                {/* Window Control Header */}
                <div className="bg-[#161b22] border-b border-white/10 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 font-mono text-xs text-gray-400 font-semibold">{project.id}.yaml</span>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-gray-400 hover:text-accent-primary transition-colors flex items-center gap-1"
                      >
                        <Github size={14} /> Repository
                      </a>
                    )}
                  </div>
                </div>

                {/* Main Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Title & Icon Header */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-accent-primary font-bold block mb-1">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-accent-primary transition-colors">
                          {project.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => onSelectProject ? onSelectProject(project) : setSelectedProject(project)}
                        className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-accent-primary/20 border border-white/10 hover:border-accent-primary/40 text-xs font-mono text-gray-300 hover:text-accent-primary flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
                        title="View Full Case Study"
                      >

                        <BookOpen size={13} /> Case Study
                      </button>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed font-medium">
                      {project.tagline}
                    </p>

                    {/* Interactive Tab Switcher */}
                    <div className="flex rounded-xl bg-[#0b0f19] p-1 border border-white/10 font-mono text-xs">
                      <button
                        onClick={() => setTab(project.id, 'overview')}
                        className={`flex-1 py-1.5 px-3 rounded-lg font-semibold transition-all ${
                          currentTab === 'overview'
                            ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30 shadow-sm'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        Architecture
                      </button>
                      <button
                        onClick={() => setTab(project.id, 'code')}
                        className={`flex-1 py-1.5 px-3 rounded-lg font-semibold transition-all ${
                          currentTab === 'code'
                            ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30 shadow-sm'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        IaC / Code
                      </button>
                      <button
                        onClick={() => setTab(project.id, 'security')}
                        className={`flex-1 py-1.5 px-3 rounded-lg font-semibold transition-all ${
                          currentTab === 'security'
                            ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30 shadow-sm'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        DevSecOps
                      </button>
                    </div>
                  </div>

                  {/* Tab Body View (Consistent Height) */}
                  <div className="min-h-[190px] flex flex-col justify-center">
                    
                    {/* TAB 1: ARCHITECTURE OVERVIEW */}
                    {currentTab === 'overview' && (
                      <div className="space-y-4 animate-fade-in text-xs">
                        <div>
                          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
                            PROBLEM STATEMENT
                          </span>
                          <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
                            ENGINEERING HIGHLIGHTS
                          </span>
                          <ul className="space-y-1.5">
                            {project.highlights.slice(0, 3).map((h, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-300">
                                <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* TAB 2: CODE / IaC SNIPPET */}
                    {currentTab === 'code' && (
                      <div className="space-y-2 animate-fade-in font-mono text-xs">
                        <div className="flex items-center justify-between text-[11px] text-gray-400">
                          <span className="flex items-center gap-1.5">
                            <FileCode size={13} className="text-accent-primary" /> 
                            {project.caseStudy.codeSnippet ? project.caseStudy.codeSnippet.filename : 'architecture.yaml'}
                          </span>
                          {project.caseStudy.codeSnippet && (
                            <button
                              onClick={() => copyCode(project.caseStudy.codeSnippet!.code, project.id)}
                              className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-gray-300 hover:text-accent-primary border border-white/10 transition-colors"
                            >
                              {copiedCodeId === project.id ? (
                                <>
                                  <Check size={12} className="text-emerald-400" /> Copied!
                                </>
                              ) : (
                                <>
                                  <Copy size={12} /> Copy Code
                                </>
                              )}
                            </button>
                          )}
                        </div>
                        <div className="bg-[#0b0f19] border border-white/10 rounded-xl p-3 text-[11px] leading-relaxed text-emerald-400 overflow-x-auto max-h-[160px]">
                          <pre>
                            <code>
                              {project.caseStudy.codeSnippet 
                                ? project.caseStudy.codeSnippet.code 
                                : `# ${project.name} Architecture Topology\n${project.caseStudy.architectureDescription}`}
                            </code>
                          </pre>
                        </div>
                      </div>
                    )}

                    {/* TAB 3: DEVSECOPS CONTROLS */}
                    {currentTab === 'security' && (
                      <div className="space-y-3 animate-fade-in font-mono text-xs">
                        <div className="text-[11px] text-gray-400 flex items-center gap-1.5">
                          <ShieldCheck size={14} className="text-purple-400" /> Security & Compliance Controls:
                        </div>
                        <div className="space-y-2">
                          {project.caseStudy.securityControls.map((sec, i) => (
                            <div key={i} className="text-xs text-gray-300 flex items-start gap-2 bg-[#0b0f19] p-2.5 rounded-xl border border-white/10">
                              <CheckCircle2 size={14} className="text-purple-400 shrink-0 mt-0.5" />
                              <span>{sec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Tech Stack Footer Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-mono bg-[#0b0f19] text-gray-300 px-2.5 py-1 rounded-lg border border-white/10 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </SpotlightCard>
            );
          })}
        </div>
        
        {/* GitHub Direct Link Button */}
        <div className="text-center">
          <a 
            href="https://github.com/lalitpunjabi" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 font-mono text-xs px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hover:scale-105"
          >
            View Complete Repositories on GitHub <Github size={15} />
          </a>
        </div>

      </div>

      {/* Case Study Modal Popup */}
      <ProjectCaseStudyModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </section>
  );
}
