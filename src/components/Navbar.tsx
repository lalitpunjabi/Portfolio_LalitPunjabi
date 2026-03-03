import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });
    
    sections.forEach(sec => observer.observe(sec));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(sec => observer.unobserve(sec));
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled py-2' : 'py-4'}`} style={{ transition: 'all 0.3s ease' }}>
      <div className="container nav-container">
        <a href="#" className="nav-logo hover:scale-105 transition-transform duration-300">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-purple-400 font-bold text-2xl tracking-tight drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]">&lt;LP /&gt;</span>
        </a>

        <nav className="desktop-nav">
          <ul className="nav-links">
            {['About', 'Education', 'Tech-Stack', 'Projects', 'Certifications'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className={`relative px-2 py-1 transition-colors duration-300 ${activeSection === item ? 'text-accent-primary font-semibold' : 'text-text-secondary hover:text-text-primary'}`}
                >
                  <span className="capitalize">{item.replace('-', ' ')}</span>
                  {activeSection === item && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-primary rounded-full shadow-[0_0_8px_rgba(0,229,255,0.8)] animate-pulse"></span>
                  )}
                </a>
              </li>
            ))}
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
