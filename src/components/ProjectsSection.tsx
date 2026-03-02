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
    <section id="projects" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">Production-Ready Architecture</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-panel group transition-all hover:shadow-glow flex flex-col rounded-xl overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-secondary/50 border-b border-color px-4 py-3 flex items-center relative">
                <div className="flex gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/50"></div>
                </div>
                <div className="absolute inset-x-0 text-center text-xs font-mono text-text-tertiary pointer-events-none">
                  {project.title.split(' ')[0].toLowerCase()}.sh
                </div>
                <div className="ml-auto flex items-center gap-3">
                   <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
                     <Github size={16} />
                   </a>
                   <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
                     <ExternalLink size={16} />
                   </a>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col relative bg-main/40">
                
                <h3 className="text-xl font-semibold mb-4 relative z-10 flex items-start gap-3 text-text-primary">
                  <span className="mt-1 p-2 rounded-lg bg-bg-tertiary border border-color shrink-0 group-hover:border-accent-primary/30 transition-colors">
                    {project.icon}
                  </span>
                  {project.title}
                </h3>
                
                <div className="mb-5 relative z-10">
                  <span className="text-xs font-semibold text-accent-primary uppercase tracking-widest mb-2 block">Problem Overview</span>
                  <p className="text-sm text-text-secondary leading-relaxed">{project.problem}</p>
                </div>
                
                <div className="mb-5 relative z-10">
                  <span className="text-xs font-semibold text-accent-primary uppercase tracking-widest mb-2 block">Architecture</span>
                  <div className="bg-bg-main border border-color rounded-lg p-3 text-sm font-mono text-text-secondary">
                    {project.architecture}
                  </div>
                </div>
                
                <div className="mb-6 flex-1 relative z-10">
                  <span className="text-xs font-semibold text-accent-primary uppercase tracking-widest mb-2 block">Deployment Strategy</span>
                  <p className="text-sm text-text-secondary leading-relaxed">{project.deployment}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-color relative z-10">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[11px] font-medium bg-bg-secondary text-text-secondary px-3 py-1 rounded-md border border-color hover:border-accent-primary/40 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <a href="https://github.com/lalitpunjabi" target="_blank" rel="noreferrer" className="btn btn-outline inline-flex items-center gap-2">
             View Complete GitHub Profile <Github size={16} />
           </a>
        </div>
      </div>
    </section>
  );
}
