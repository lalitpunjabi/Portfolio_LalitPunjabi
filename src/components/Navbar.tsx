import { useState, useEffect } from 'react';
import { Menu, X, Search, Palette, Github, Linkedin } from 'lucide-react';

interface NavbarProps {
  onOpenPalette?: () => void;
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

export default function Navbar({ onOpenPalette, currentTheme, onThemeChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

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
    { id: 'experience', label: 'Experience' },
    { id: 'devops-lab', label: 'DevOps Lab' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
  ];

  const themes = [
    { id: 'cyan', label: 'Cyberpunk Cyan', color: '#00E5FF' },
    { id: 'matrix', label: 'Matrix Green', color: '#00FF66' },
    { id: 'nord', label: 'Nord Dark', color: '#88C0D0' },
    { id: 'tokyonight', label: 'Tokyo Night', color: '#7AA2F7' }
  ];

  return (
    <header className={`fixed top-0 inset-x-0 h-16 sm:h-20 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0b0f19]/95 backdrop-blur-md border-b border-white/10 shadow-2xl' : 'bg-[#0b0f19]/85 backdrop-blur-sm'
    }`}>
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-primary via-purple-500 to-pink-500 transition-all duration-150 z-50 shadow-[0_0_10px_rgba(0,229,255,0.8)]" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Name Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <span className="text-white font-bold tracking-wider text-base sm:text-lg lg:text-xl font-sans group-hover:text-accent-primary transition-colors">
            LALIT PUNJABI
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center justify-center gap-3 lg:gap-5 text-xs font-medium">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              style={{ display: 'inline-block', margin: '0 6px', padding: '6px 12px' }}
              className={`rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeSection === item.id 
                  ? 'text-accent-primary font-bold bg-accent-primary/10 border border-accent-primary/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Tools & Resume CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Command Palette Button */}
          {onOpenPalette && (
            <button
              onClick={onOpenPalette}
              className="px-3 py-1.5 rounded-full bg-[#161b22] hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              title="Open Command Palette (Ctrl + K)"
            >
              <Search size={14} className="text-accent-primary" />
              <span className="hidden sm:inline font-semibold">⌘K</span>
            </button>
          )}

          {/* Theme Selector */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2 rounded-full bg-[#161b22] hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer"
              title="Switch Color Theme"
            >
              <Palette size={15} />
            </button>

            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#0f141d] border border-white/10 shadow-2xl p-2 z-50 space-y-1 font-mono text-xs">
                <div className="text-[10px] text-gray-400 px-2 py-1 uppercase tracking-wider font-semibold">Select Theme</div>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onThemeChange(t.id);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-all text-left ${
                      currentTheme === t.id ? 'bg-accent-primary/15 text-accent-primary font-bold' : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: t.color }}></span>
                    <span className="text-[11px] truncate">{t.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="https://github.com/lalitpunjabi" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hidden sm:flex transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/lalit-punjabi-443911312/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hidden sm:flex transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>

          <a 
            href="#contact" 
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105"
          >
            Contact Me
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="p-2 text-gray-300 hover:text-white lg:hidden rounded-lg bg-[#161b22] border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-slide-down-fade backdrop-blur-2xl bg-[#0b0f19]/98 border-b border-white/10 shadow-2xl px-6 py-6 font-sans text-sm space-y-4">
          <div className="space-y-3">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={() => setMobileMenuOpen(false)} 
                className="block py-1.5 text-gray-300 hover:text-accent-primary font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenPalette) onOpenPalette();
              }}
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-2"
            >
              <Search size={14} /> Quick Palette (Ctrl+K)
            </button>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary text-xs px-4 py-2">Contact Me</a>
          </div>
        </div>
      )}
    </header>
  );
}
