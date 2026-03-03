import { ExternalLink, Github, Code2, Database, LayoutTemplate, Activity } from 'lucide-react';

export default function ProjectsSection() {
  // The specific 4 projects requested by the user
  const projects = [
    {
      title: 'BloodMate – Enterprise-Grade Blood Bank Management System',
      problem: 'BloodMate is a modular, MVC-architected desktop application built using Java 17, JavaFX 21, and MySQL 8, designed to streamline end-to-end blood bank operations. The system implements robust donor and recipient management, real-time blood inventory tracking with expiration monitoring, emergency request handling, campaign coordination, and advanced analytics reporting.',
      architecture: 'MVC-based layered architecture (Controller → Service → DAO → Database) leveraging JDBC with optimized database connectivity.',
      deployment: 'Event-driven architecture with programmatic navigation handling. ScrollPane-optimized responsive UI with hardware acceleration. MySQL schema automation and connection pooling.',
      techStack: ['Java 17', 'JavaFX 21', 'MySQL 8', 'JDBC', 'Maven', 'FXML', 'CSS'],
      githubLink: 'https://github.com/lalitpunjabi/BloodMate-Advanced',
      icon: <Activity size={24} className="text-accent" />
    },
    {
      title: 'CitySamadhan – Civic Complaint Management System',
      problem: 'CitySamadhan is a scalable, full-stack web application designed to digitize and streamline civic complaint resolution. The system implements secure user authentication with OTP verification, complaint lifecycle management, real-time status tracking, community-driven prioritization (upvote/downvote system), department-based workflow routing, and automated email/in-app notifications.',
      architecture: 'MVC-inspired Flask application with ORM-backed data layer and RESTful endpoints. Integrates geolocation services using GeoPy.',
      deployment: 'RESTful route design with modular Flask structure. ORM-based database modeling (SQLite for development, PostgreSQL-ready).',
      techStack: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'HTML5', 'CSS3', 'Jinja2', 'Flask-Mail', 'GeoPy'],
      githubLink: 'https://github.com/lalitpunjabi/CitySamadhan-Final-',
      icon: <Database size={24} className="text-accent" />
    },
    {
      title: 'HoodNite – Full-Stack Nightlife Discovery Platform',
      problem: 'HoodNite is a modern full-stack application designed to help users discover nightlife events, explore venues, and manage shared expenses seamlessly. The platform implements a scalable RESTful API architecture with JWT-based authentication, protected routes, role-based admin controls, and modular backend routing.',
      architecture: 'Decoupled frontend-backend architecture with REST API and token-based authentication. Features dynamic event filtering and real-time bill-splitting logic.',
      deployment: 'RESTful Express API with modular route separation. MongoDB schema design using Mongoose ODM. JWT authentication with middleware-based route protection.',
      techStack: ['Next.js 14', 'React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Tailwind CSS', 'Framer Motion'],
      githubLink: 'https://github.com/lalitpunjabi/HoodNite',
      icon: <LayoutTemplate size={24} className="text-accent" />
    },
    {
      title: 'DateVibe – Romantic Date Planning Web Application',
      problem: 'DateVibe is a modern frontend-focused web application designed to deliver a premium venue discovery and booking experience. The application implements a component-driven architecture with strong type safety, modular routing, and centralized state management. It features advanced client-side filtering, dynamic venue detail rendering, wishlist management, and mock booking workflows.',
      architecture: 'Component-driven SPA with centralized state management and modular routing. Real-time dynamic filtering and sorting logic on structured datasets.',
      deployment: 'Type-safe React component architecture using TypeScript. Context-based state isolation. Design-system-driven UI with custom Tailwind theme configuration.',
      techStack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Context API'],
      githubLink: 'https://github.com/lalitpunjabi/DateVibe-AceHack',
      icon: <Code2 size={24} className="text-accent" />
    }
  ];

  return (
    <section id="projects" className="section bg-secondary relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12 animate-slide-up-fade">
          <h2 className="section-title inline-block relative group">
            Production-Ready Architecture
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-accent-primary via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 shadow-[0_0_20px_rgba(0,229,255,0.6)]"></div>
          </h2>
          <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto">Enterprise-grade solutions with scalable architecture and clean code practices</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-panel group transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-3 hover:shadow-glow flex flex-col rounded-xl overflow-hidden relative border border-color hover:border-accent-primary/40 animate-scale-in hover-lift tech-border"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Enhanced holographic scan line effect */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent shadow-[0_0_20px_rgba(0,229,255,0.8)] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_3s_linear_infinite] z-20 pointer-events-none"></div>
              {/* Animated gradient mesh */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl pointer-events-none"></div>
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-secondary/50 border-b border-color px-4 py-3 flex items-center relative group-hover:bg-secondary/70 transition-all duration-500">
                <div className="flex gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/50 group-hover:bg-red-400/40 group-hover:border-red-400/80 transition-all duration-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/50 group-hover:bg-amber-400/40 group-hover:border-amber-400/80 transition-all duration-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/50 group-hover:bg-emerald-400/40 group-hover:border-emerald-400/80 transition-all duration-500"></div>
                </div>
                <div className="absolute inset-x-0 text-center text-xs font-mono text-text-tertiary pointer-events-none">
                  {project.title.split(' ')[0].toLowerCase()}.sh
                </div>
                <div className="ml-auto flex items-center gap-3">
                   <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-primary hover:scale-125 transition-all duration-300">
                     <Github size={16} />
                   </a>
                   <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-primary hover:scale-125 hover:rotate-12 transition-all duration-300">
                     <ExternalLink size={16} />
                   </a>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col relative bg-main/40">
                
                <h3 className="text-xl font-bold mb-5 relative z-10 flex items-start gap-4 text-text-primary group-hover:text-accent-primary transition-colors duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                  <span className="mt-0.5 p-2 rounded-lg bg-bg-main/50 border border-color shrink-0 group-hover:border-accent-primary/30 group-hover:bg-accent-primary/5 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] group-hover:rotate-6 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10">{project.icon}</span>
                  </span>
                  <span className="group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] leading-tight">{project.title}</span>
                </h3>
                
                <div className="mb-5 relative z-10 group-hover:translate-x-2 transition-transform duration-500 delay-75 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                  <span className="text-[0.65rem] font-bold text-accent-primary/80 uppercase tracking-[0.2em] mb-2 block flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span>
                    Problem Overview
                  </span>
                  <p className="text-[0.9rem] text-text-secondary leading-relaxed">{project.problem}</p>
                </div>
                
                <div className="mb-5 relative z-10 group-hover:translate-x-2 transition-transform duration-500 delay-100 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                  <span className="text-[0.65rem] font-bold text-accent-purple/80 uppercase tracking-[0.2em] mb-2 block flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse"></span>
                    Architecture
                  </span>
                  <div className="bg-bg-main border border-color rounded-lg p-3.5 text-[0.85rem] font-mono text-text-secondary/90 group-hover:border-accent-purple/20 group-hover:bg-accent-purple/5 transition-all duration-500 leading-relaxed shadow-inner relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10">{project.architecture}</span>
                  </div>
                </div>
                
                <div className="mb-8 flex-1 relative z-10 group-hover:translate-x-2 transition-transform duration-500 delay-150 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                  <span className="text-[0.65rem] font-bold text-accent-green/80 uppercase tracking-[0.2em] mb-2 block flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                    Deployment Strategy
                  </span>
                  <p className="text-[0.9rem] text-text-secondary leading-relaxed">{project.deployment}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-color relative z-10">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-[0.7rem] font-bold tracking-wide uppercase bg-bg-tertiary text-text-secondary px-3 py-1.5 rounded border border-color hover:scale-110 group-hover:border-accent-primary/30 group-hover:bg-accent-primary/5 group-hover:text-accent-primary transition-all duration-500 cursor-default flex items-center gap-1.5 shadow-sm hover:shadow-md relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/60 group-hover:bg-accent-primary group-hover:animate-pulse relative z-10"></span>
                      <span className="relative z-10">{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-scale-in">
           <a href="https://github.com/lalitpunjabi" target="_blank" rel="noreferrer" className="btn btn-outline inline-flex items-center gap-2 hover-lift hover-glow group">
             View Complete GitHub Profile <Github size={16} className="group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
           </a>
        </div>
      </div>
    </section>
  );
}
