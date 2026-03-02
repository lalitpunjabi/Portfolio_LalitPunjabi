import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-purple-400 font-bold text-2xl tracking-tight">&lt;LP /&gt;</span>
        </a>

        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#tech-stack">Tech Stack</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
          </ul>
          
          <div className="nav-socials">
            <a href="https://github.com/lalitpunjabi" target="_blank" rel="noreferrer" className="social-icon">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/lalit-punjabi-443911312/" target="_blank" rel="noreferrer" className="social-icon">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="btn btn-primary btn-sm">Contact Me</a>
          </div>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav>
            <ul className="mobile-nav-links">
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="#education" onClick={() => setMobileMenuOpen(false)}>Education</a></li>
              <li><a href="#tech-stack" onClick={() => setMobileMenuOpen(false)}>Tech Stack</a></li>
              <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
              <li><a href="#certifications" onClick={() => setMobileMenuOpen(false)}>Certifications</a></li>
            </ul>
            <div className="mobile-nav-socials">
              <a href="https://github.com/lalitpunjabi" target="_blank" rel="noreferrer"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/lalit-punjabi-443911312/" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
            </div>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary btn-block">Contact Me</a>
          </nav>
        </div>
      )}
    </header>
  );
}
