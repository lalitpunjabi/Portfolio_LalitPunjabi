export default function AboutSection() {

  return (
    <section id="about" className="section relative pb-20">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden mb-16 shadow-card border border-color">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary opacity-[0.03] rounded-bl-full z-0 pointer-events-none blur-3xl"></div>
          <div className="relative z-10 text-text-secondary leading-relaxed space-y-5 text-base md:text-lg max-w-4xl mx-auto">
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
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-purple-400 font-semibold pt-4 text-xl tracking-tight">
              Let’s connect and build something meaningful.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}
