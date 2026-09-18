import { useState } from 'react';
import { ExternalLink, Github, Code2, Database, LayoutTemplate, Activity, ShieldCheck, FileCode, CheckCircle2, Copy, Check } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function ProjectsSection() {
  const [activeTabs, setActiveTabs] = useState<Record<number, 'overview' | 'code' | 'security'>>({
    0: 'overview',
    1: 'overview',
    2: 'overview',
    3: 'overview'
  });

  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  const setTab = (index: number, tab: 'overview' | 'code' | 'security') => {
    setActiveTabs(prev => ({ ...prev, [index]: tab }));
  };

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const projects = [
    {
      title: 'BloodMate – Enterprise Blood Bank Management System',
      filename: 'bloodmate_engine.java',
      problem: 'BloodMate is a modular, MVC-architected application built using Java 17, JavaFX 21, and MySQL 8. Designed to streamline end-to-end blood bank operations, donor tracking, real-time expiration monitoring, emergency requests, and analytics reporting.',
      architecture: 'MVC layered architecture (Controller → Service → DAO → Database) leveraging JDBC with HikariCP connection pooling.',
      deployment: 'Event-driven UI navigation with hardware acceleration. Programmatic MySQL schema migrations and pool optimization.',
      techStack: ['Java 17', 'JavaFX 21', 'MySQL 8', 'JDBC', 'Maven', 'CSS'],
      githubLink: 'https://github.com/lalitpunjabi/BloodMate-Advanced',
      icon: <Activity size={22} className="text-accent-primary" />,
      codeSnippet: `// MySQL HikariCP Connection Pool & Schema Init
public class DatabaseManager {
    private static final String URL = "jdbc:mysql://localhost:3306/bloodmate_db";
    private static HikariDataSource dataSource;

    static {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(URL);
        config.setUsername("bloodmate_app");
        config.setMaximumPoolSize(10);
        dataSource = new HikariDataSource(config);
    }
}`,
      securityControls: [
        'BCrypt password hashing for medical staff authentication',
        'Strict PreparedStatement parameterization preventing SQL Injection',
        'Role-based Access Control (Admin vs Hospital Staff)'
      ]
    },
    {
      title: 'CitySamadhan – Civic Complaint Management System',
      filename: 'city_samadhan_app.py',
      problem: 'CitySamadhan is a scalable full-stack web platform digitizing civic complaint resolution. Features secure user authentication with OTP verification, complaint lifecycle management, community upvoting, and department routing.',
      architecture: 'MVC-inspired Flask architecture with ORM-backed data layer and REST endpoints. Geolocation calculations powered by GeoPy.',
      deployment: 'RESTful API design with modular Flask blueprints. PostgreSQL-ready database modeling using SQLAlchemy ORM.',
      techStack: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'Jinja2', 'Flask-Mail'],
      githubLink: 'https://github.com/lalitpunjabi/CitySamadhan-Final-',
      icon: <Database size={22} className="text-accent-primary" />,
      codeSnippet: `# Flask SQLAlchemy ORM Complaint Endpoint
@app.route('/api/complaints', methods=['POST'])
@login_required
def create_complaint():
    data = request.get_json()
    new_ticket = Complaint(
        title=data['title'],
        department=route_department(data['category']),
        lat=data['latitude'], lon=data['longitude'],
        user_id=current_user.id
    )
    db.session.add(new_ticket)
    db.session.commit()
    send_notification_email(current_user.email, new_ticket.id)`,
      securityControls: [
        'OTP email verification for valid citizen complaint reporting',
        'CSRF token protection across Flask form endpoints',
        'Municipal boundary sanitization via GeoPy'
      ]
    },
    {
      title: 'HoodNite – Full-Stack Nightlife Discovery Platform',
      filename: 'Dockerfile.production',
      problem: 'HoodNite is a modern full-stack application for discovering nightlife events, exploring venues, and managing shared expenses. Built with REST API architecture, JWT authentication, and role-based admin controls.',
      architecture: 'Decoupled Next.js frontend & Express backend with REST API endpoints, JWT token protection, and dynamic event filtering.',
      deployment: 'Multi-stage Docker containerization on Alpine Linux. Containerized deployment with automated health checks.',
      techStack: ['Next.js 14', 'React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      githubLink: 'https://github.com/lalitpunjabi/HoodNite',
      icon: <LayoutTemplate size={22} className="text-accent-primary" />,
      codeSnippet: `# Multi-stage Production OCI Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
USER node
EXPOSE 3000
CMD ["node", "dist/server.js"]`,
      securityControls: [
        'Non-root container user execution (`USER node`) in Alpine',
        'JWT Bearer token middleware on protected API routes',
        'Express Rate Limiting (100 req/15min per client IP)'
      ]
    },
    {
      title: 'DateVibe – Romantic Date Planning Web Application',
      filename: 'venue_context.ts',
      problem: 'DateVibe is a frontend-focused venue discovery application delivering curated dating venue suggestions. Implements dynamic client-side filtering, wishlist management, and mock booking workflows.',
      architecture: 'Component-driven SPA architecture with strong TypeScript type safety, Context API state isolation, and custom Tailwind styling.',
      deployment: 'Vite build pipeline with chunk splitting and production bundle minification. Context API global state management.',
      techStack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
      githubLink: 'https://github.com/lalitpunjabi/DateVibe-AceHack',
      icon: <Code2 size={22} className="text-accent-primary" />,
      codeSnippet: `// Type-safe State Engine & Context Provider
export interface Venue {
  id: string;
  name: string;
  rating: number;
  category: 'restaurant' | 'lounge' | 'outdoor';
}

export const VenueContext = createContext<{
  venues: Venue[];
  filterCategory: (cat: string) => void;
}>({ venues: [], filterCategory: () => {} });`,
      securityControls: [
        'Strict TypeScript compilation (`noImplicitAny: true`)',
        'Sanitized client-side search input sanitization',
        'Vite bundle tree-shaking & security audits'
      ]
    }
  ];

  return (
    <section id="projects" className="section bg-secondary relative overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-10 animate-slide-up-fade">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Production-Ready Architecture & Projects
          </h2>
          <p className="text-text-secondary mt-3 text-base sm:text-lg max-w-2xl mx-auto">
            Explore architecture blueprints, multi-stage Dockerfiles, and DevSecOps security controls.
          </p>
        </div>
        
        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {projects.map((project, index) => {
            const currentTab = activeTabs[index] || 'overview';

            return (
              <SpotlightCard 
                key={index} 
                className="group flex flex-col rounded-2xl overflow-hidden relative border border-border-color hover:border-accent-primary/40 transition-all duration-300 bg-main/50"
              >
                {/* Window Control Header */}
                <div className="bg-[#111827] border-b border-border-color px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <span className="ml-2 font-mono text-xs text-text-tertiary hidden sm:inline">{project.filename}</span>
                  </div>

                  <div className="flex items-center gap-3">
                     <a 
                       href={project.githubLink} 
                       target="_blank" 
                       rel="noreferrer" 
                       className="text-text-tertiary hover:text-accent-primary transition-colors flex items-center gap-1 font-mono text-xs"
                     >
                       <Github size={14} /> Repository
                     </a>
                     <a 
                       href={project.githubLink} 
                       target="_blank" 
                       rel="noreferrer" 
                       className="text-text-tertiary hover:text-accent-primary transition-colors"
                     >
                       <ExternalLink size={14} />
                     </a>
                  </div>
                </div>

                {/* Main Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Title & Icon Header */}
                  <div>
                    <h3 className="text-lg font-bold text-text-primary flex items-start gap-3 mb-4">
                      <span className="p-2 rounded-xl bg-accent-primary/10 border border-accent-primary/30 shrink-0">
                        {project.icon}
                      </span>
                      <span className="leading-snug">{project.title}</span>
                    </h3>

                    {/* Interactive Tab Switcher */}
                    <div className="flex rounded-xl bg-[#0b0f19] p-1 border border-border-color font-mono text-xs">
                      <button
                        onClick={() => setTab(index, 'overview')}
                        className={`flex-1 py-1.5 px-3 rounded-lg font-semibold transition-all ${
                          currentTab === 'overview'
                            ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30 shadow-sm'
                            : 'text-text-tertiary hover:text-text-primary'
                        }`}
                      >
                        Architecture
                      </button>
                      <button
                        onClick={() => setTab(index, 'code')}
                        className={`flex-1 py-1.5 px-3 rounded-lg font-semibold transition-all ${
                          currentTab === 'code'
                            ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30 shadow-sm'
                            : 'text-text-tertiary hover:text-text-primary'
                        }`}
                      >
                        IaC / Code Snippet
                      </button>
                      <button
                        onClick={() => setTab(index, 'security')}
                        className={`flex-1 py-1.5 px-3 rounded-lg font-semibold transition-all ${
                          currentTab === 'security'
                            ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30 shadow-sm'
                            : 'text-text-tertiary hover:text-text-primary'
                        }`}
                      >
                        DevSecOps
                      </button>
                    </div>
                  </div>

                  {/* Tab Body View (Consistent Height) */}
                  <div className="min-h-[200px] flex flex-col justify-center">
                    
                    {/* TAB 1: ARCHITECTURE OVERVIEW */}
                    {currentTab === 'overview' && (
                      <div className="space-y-4 animate-fade-in">
                        <div>
                          <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider block mb-1">
                            PROBLEM & OVERVIEW
                          </span>
                          <p className="text-xs text-text-secondary leading-relaxed">{project.problem}</p>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider block mb-1">
                            SYSTEM ARCHITECTURE
                          </span>
                          <div className="bg-[#0b0f19] border border-border-color rounded-xl p-3 text-xs font-mono text-emerald-400">
                            {project.architecture}
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider block mb-1">
                            DEPLOYMENT STRATEGY
                          </span>
                          <p className="text-xs text-text-secondary">{project.deployment}</p>
                        </div>
                      </div>
                    )}

                    {/* TAB 2: CODE / IaC SNIPPET */}
                    {currentTab === 'code' && (
                      <div className="space-y-2 animate-fade-in font-mono">
                        <div className="flex items-center justify-between text-[11px] text-text-tertiary">
                          <span className="flex items-center gap-1.5">
                            <FileCode size={13} className="text-accent-primary" /> Highlighted Source Code / IaC
                          </span>
                          <button
                            onClick={() => copyCode(project.codeSnippet, index)}
                            className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-secondary hover:bg-white/10 text-text-secondary hover:text-accent-primary border border-border-color transition-colors"
                          >
                            {copiedCodeIndex === index ? (
                              <>
                                <Check size={12} className="text-emerald-400" /> Copied!
                              </>
                            ) : (
                              <>
                                <Copy size={12} /> Copy Code
                              </>
                            )}
                          </button>
                        </div>
                        <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-3 text-[11px] leading-relaxed text-emerald-400 overflow-x-auto max-h-[190px]">
                          <pre>{project.codeSnippet}</pre>
                        </div>
                      </div>
                    )}

                    {/* TAB 3: DEVSECOPS CONTROLS */}
                    {currentTab === 'security' && (
                      <div className="space-y-3 animate-fade-in font-mono">
                        <div className="text-[11px] text-text-tertiary flex items-center gap-1.5">
                          <ShieldCheck size={14} className="text-emerald-400" /> Security & Compliance Controls:
                        </div>
                        <div className="space-y-2">
                          {project.securityControls.map((sec, i) => (
                            <div key={i} className="text-xs text-text-secondary flex items-start gap-2 bg-[#0b0f19] p-3 rounded-xl border border-border-color">
                              <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                              <span>{sec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Tech Stack Footer */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-color">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-mono uppercase bg-[#0b0f19] text-text-secondary px-2.5 py-1 rounded-lg border border-border-color font-semibold"
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
        
        {/* GitHub Button */}
        <div className="text-center">
           <a 
             href="https://github.com/lalitpunjabi" 
             target="_blank" 
             rel="noreferrer" 
             className="btn btn-outline inline-flex items-center gap-2 font-mono text-xs px-6 py-3"
           >
             View Complete Repositories on GitHub <Github size={15} />
           </a>
        </div>
      </div>
    </section>
  );
}
