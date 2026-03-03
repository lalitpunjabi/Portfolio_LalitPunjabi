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

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled py-2' : 'py-4'}`} style={{ transition: 'all 0.3s ease' }}>
      <div className="container nav-container relative z-50">
        <a href="#" className="nav-logo hover:scale-105 transition-transform duration-300 group">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-accent-primary font-bold text-2xl tracking-tight drop-shadow-[0_0_10px_rgba(236,72,153,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all duration-300 inline-block">&lt;LP /&gt;</span>
        </a>

        <nav className="desktop-nav">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`relative px-2 py-1 transition-all duration-300 group ${activeSection === item.id ? 'text-accent-primary font-semibold' : 'text-text-secondary hover:text-text-primary'}`}
                >
                  <span className="capitalize">{item.label}</span>
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-primary rounded-full shadow-[0_0_8px_rgba(0,229,255,0.8)] animate-pulse"></span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-primary to-purple-400 group-hover:w-full transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="nav-socials gap-3">
            <a href="https://github.com/lalitpunjabi" target="_blank" rel="noreferrer" className="social-icon hover:scale-110 hover:rotate-12 transition-all duration-300">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/lalit-punjabi-443911312/" target="_blank" rel="noreferrer" className="social-icon hover:scale-110 hover:-rotate-12 transition-all duration-300">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="btn btn-primary btn-sm hover-lift hover-glow">Contact Me</a>
          </div>
        </nav>

        <button 
          className="mobile-menu-btn hover:scale-110 transition-transform duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu animate-slide-down-fade backdrop-blur-xl bg-bg-main/95">
          <nav>
            <ul className="mobile-nav-links">
              {['About', 'Education', 'Tech Stack', 'Projects', 'Certifications'].map((item, idx) => (
                <li key={idx} className="group">
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 group-hover:translate-x-2 transition-all duration-300">
                    <span className="w-0 h-[2px] bg-gradient-to-r from-accent-primary to-purple-400 group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-nav-socials flex justify-center gap-4 mb-6">
              <a href="https://github.com/lalitpunjabi" target="_blank" rel="noreferrer" className="hover:scale-125 hover:text-accent-primary transition-all duration-300"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/lalit-punjabi-443911312/" target="_blank" rel="noreferrer" className="hover:scale-125 hover:text-accent-primary transition-all duration-300"><Linkedin size={24} /></a>
            </div>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary btn-block hover-lift hover-glow">Contact Me</a>
          </nav>
        </div>
      )}
    </header>
  );
}
