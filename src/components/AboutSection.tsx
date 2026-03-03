export default function AboutSection() {

  return (
    <section id="about" className="section relative pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-3xl pointer-events-none animate-float-delayed"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12 animate-slide-up-fade">
          <h2 className="section-title inline-block relative group">
            About Me
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-accent-primary via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 shadow-[0_0_20px_rgba(0,229,255,0.6)]"></div>
          </h2>
          <p className="text-text-secondary mt-4 text-lg">Passionate DevOps Engineer building scalable cloud infrastructure</p>
        </div>
        
        <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden mb-16 shadow-card border border-color hover:border-accent-primary/40 transition-all duration-500 animate-scale-in tech-border group">
          {/* Enhanced background effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full z-0 pointer-events-none blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none z-0"></div>
          <div className="relative z-10 text-text-secondary leading-relaxed space-y-5 text-base md:text-lg max-w-4xl mx-auto [&>p]:hover:text-text-primary [&>p]:transition-colors [&>p]:duration-300">
            {/* Add left border accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p>
              I am a B.Tech student specializing in Artificial Intelligence & Data Science (CGPA: 9.32) 
              with a strong passion for building scalable, automated, and resilient infrastructure. 
              Methodical in planning, dependable in execution, and structured in approach, I consistently 
              deliver well-engineered solutions across impact-driven real-world projects.
            </p>
            <p>
              My primary focus is DevOps, where I work extensively with CI/CD pipelines, Docker, Kubernetes, 
              AWS, and Infrastructure as Code tools such as Terraform and Ansible. As an RHCSA-certified 
              professional, I bring solid Linux system administration expertise and a deep understanding of 
              system reliability, automation, and deployment strategies.
            </p>
            <p>
              I enjoy solving complex infrastructure challenges, optimizing deployment workflows, and enhancing 
              system performance. Alongside DevOps, I actively strengthen my foundation in Data Structures & 
              Algorithms, Bash and Python scripting, and modern cloud-native ecosystems.
            </p>
            <p>
              I am always eager to collaborate with like-minded professionals on impactful technology initiatives 
              and innovative engineering solutions.
            </p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-purple-400 font-semibold pt-4 text-xl tracking-tight hover:scale-105 transition-transform duration-300 inline-block">
              Let's connect and build something meaningful.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}
