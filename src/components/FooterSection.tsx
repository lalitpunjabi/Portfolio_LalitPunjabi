import { Github, Linkedin, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-main border-t border-color py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Section */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="font-bold text-xl text-text-primary inline-block mb-2 text-gradient-accent tracking-wide"
            >
              Lalit Punjabi
            </a>
            <p className="text-text-secondary text-sm font-medium">
              DevOps Engineer • RedHat Certified
            </p>
          </div>

          {/* Icons Section (Fixed) */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/lalitpunjabi"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 border border-color rounded-full text-text-secondary 
                         hover:text-text-primary hover:border-text-primary 
                         hover:bg-bg-tertiary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/lalit-punjabi-443911312/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 border border-color rounded-full text-text-secondary 
                         hover:text-text-primary hover:border-text-primary 
                         hover:bg-bg-tertiary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:lalitpunjabi.pro@gmail.com"
              className="p-2.5 border border-color rounded-full text-text-secondary 
                         hover:text-text-primary hover:border-text-primary 
                         hover:bg-bg-tertiary transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-color flex flex-col md:flex-row justify-between items-center text-sm text-secondary">
          <p>
            &copy; {new Date().getFullYear()} Lalit Punjabi. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Automated. Optimized. Deployed.
          </p>
        </div>
      </div>
    </footer>
  );
}