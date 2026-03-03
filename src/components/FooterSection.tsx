import { Github, Linkedin, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-main border-t border-color py-12 md:py-16 relative overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[1px] bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-8 md:mb-10">
          
          {/* Left Section - Enhanced */}
          <div className="text-center md:text-left group w-full md:w-auto">
            <a
              href="#"
              className="font-bold text-xl sm:text-2xl text-text-primary inline-block mb-2 md:mb-3 bg-gradient-to-r from-pink-500 via-purple-400 to-accent-primary bg-clip-text text-transparent tracking-wide hover:scale-105 transition-transform duration-300"
            >
              Lalit Punjabi
            </a>
            <p className="text-text-secondary text-xs sm:text-sm font-medium flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span>
              DevOps Engineer • RedHat Certified
            </p>
          </div>

          {/* Icons Section - Enhanced with glow effects */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 w-full md:w-auto">
            <a
              href="https://github.com/lalitpunjabi"
              target="_blank"
              rel="noreferrer"
              className="p-3 sm:p-3 border border-color rounded-full text-text-secondary 
                         hover:text-accent-primary hover:border-accent-primary/50 
                         hover:bg-accent-primary/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]
                         hover:scale-110 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github size={18} className="sm:size-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/lalit-punjabi-443911312/"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-color rounded-full text-text-secondary 
                         hover:text-blue-400 hover:border-blue-400/50 
                         hover:bg-blue-400/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                         hover:scale-110 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="sm:size-5" />
            </a>

            <a
              href="mailto:lalitpunjabi.pro@gmail.com"
              className="p-3 border border-color rounded-full text-text-secondary 
                         hover:text-green-400 hover:border-green-400/50 
                         hover:bg-green-400/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]
                         hover:scale-110 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail size={18} className="sm:size-5" />
            </a>
          </div>
        </div>

        {/* Bottom Section - Enhanced spacing and styling */}
        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-color flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-secondary gap-3 md:gap-4 w-full">
          <p className="hover:text-text-primary transition-colors duration-300 text-center md:text-left">
            &copy; {new Date().getFullYear()} Lalit Punjabi. All rights reserved.
          </p>
          <div className="flex items-center gap-2 md:gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse"></span>
            <p className="font-mono text-[10px] sm:text-xs bg-gradient-to-r from-accent-primary/50 to-purple-400/50 bg-clip-text text-transparent text-center">
              Automated. Optimized. Deployed.
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}