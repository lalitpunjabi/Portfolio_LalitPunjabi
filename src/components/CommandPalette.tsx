import { useState, useEffect } from 'react';
import { Search, Terminal, FileText, Mail, Compass, Sparkles, Check, Palette } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenResume,
  currentTheme,
  onThemeChange
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const sections = [
    { id: 'about', name: 'About & Bio', icon: <Compass size={16} /> },
    { id: 'experience', name: 'Work Experience', icon: <Terminal size={16} /> },
    { id: 'education', name: 'Education & Degree', icon: <Compass size={16} /> },
    { id: 'devops-lab', name: 'CI/CD & Cloud Lab Visualizer', icon: <Terminal size={16} /> },
    { id: 'tech-stack', name: 'DevOps Tech Stack', icon: <Sparkles size={16} /> },
    { id: 'projects', name: 'Production Projects', icon: <FileText size={16} /> },
    { id: 'certifications', name: 'Red Hat & Cloud Certifications', icon: <Check size={16} /> },
    { id: 'contact', name: 'Contact & Hiring', icon: <Mail size={16} /> },
  ];

  const themeOptions = [
    { id: 'cyan', name: 'Cyberpunk Cyan', color: '#00E5FF' },
    { id: 'matrix', name: 'Matrix Green', color: '#00FF66' },
    { id: 'nord', name: 'Nord Dark', color: '#88C0D0' },
    { id: 'tokyonight', name: 'Tokyo Night', color: '#7AA2F7' }
  ];

  const filteredSections = sections.filter(s => s.name.toLowerCase().includes(query.toLowerCase()));

  const navigateTo = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('lalitpunjabi.pro@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if (isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        e.preventDefault();
        if (filteredSections.length === 0) return;
        if (e.key === 'ArrowDown') {
          setSelectedIndex(prev => (prev + 1) % filteredSections.length);
        } else {
          setSelectedIndex(prev => (prev - 1 + filteredSections.length) % filteredSections.length);
        }
      }
      if (isOpen && e.key === 'Enter') {
        e.preventDefault();
        if (filteredSections[selectedIndex]) {
          navigateTo(filteredSections[selectedIndex].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, filteredSections, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-20 px-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div 
        className="w-full max-w-2xl glass-panel rounded-2xl overflow-hidden border border-accent-primary/40 shadow-[0_0_50px_rgba(0,229,255,0.25)] bg-[#0f141d]/95 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#21262d] bg-[#161b22]">
          <Search size={18} className="text-accent-primary mr-3 shrink-0 animate-pulse" />
          <input
            type="text"
            placeholder="Search sections or commands... (e.g. projects, lab, resume, theme)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none outline-none text-text-primary placeholder:text-text-tertiary text-sm"
          />
          <kbd className="hidden sm:block text-[10px] bg-[#21262d] text-text-tertiary px-2 py-0.5 rounded border border-[#30363d] font-mono">ESC</kbd>
        </div>

        {/* Content Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          
          {/* Quick Actions */}
          <div>
            <div className="text-[11px] font-mono text-text-tertiary mb-2 font-semibold uppercase tracking-wider">Quick Actions</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => { onClose(); onOpenResume(); }}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#161b22] hover:bg-accent-primary/15 border border-border-color hover:border-accent-primary/40 text-left transition-all text-xs text-text-primary group"
              >
                <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary group-hover:scale-110 transition-transform">
                  <FileText size={16} />
                </div>
                <div>
                  <div className="font-semibold group-hover:text-accent-primary">Preview Resume PDF</div>
                  <div className="text-[10px] text-text-tertiary font-mono">Interactive PDF Viewer</div>
                </div>
              </button>

              <button
                onClick={copyEmail}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#161b22] hover:bg-accent-primary/15 border border-border-color hover:border-accent-primary/40 text-left transition-all text-xs text-text-primary group"
              >
                <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary group-hover:scale-110 transition-transform">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="font-semibold group-hover:text-accent-primary">
                    {copied ? '✓ Email Copied!' : 'Copy Email Address'}
                  </div>
                  <div className="text-[10px] text-text-tertiary font-mono">lalitpunjabi.pro@gmail.com</div>
                </div>
              </button>
            </div>
          </div>

          {/* Navigation Items */}
          {filteredSections.length > 0 && (
            <div>
              <div className="text-[11px] font-mono text-text-tertiary mb-2 font-semibold uppercase tracking-wider">Jump to Section</div>
              <div className="space-y-1">
                {filteredSections.map((sec, idx) => {
                  const isSelected = selectedIndex === idx;

                  return (
                    <button
                      key={sec.id}
                      onClick={() => navigateTo(sec.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs transition-all ${
                        isSelected
                          ? 'bg-accent-primary/15 border-accent-primary text-text-primary font-semibold'
                          : 'bg-[#161b22]/50 border-transparent text-text-secondary hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-accent-primary">{sec.icon}</span>
                        <span>{sec.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-text-tertiary">#{sec.id}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Theme Options */}
          <div>
            <div className="text-[11px] font-mono text-text-tertiary mb-2 font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Palette size={13} className="text-accent-primary" /> Active Palette Theme
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {themeOptions.map((t) => (
                <button
                  key={t.id}
                  onClick={() => onThemeChange(t.id)}
                  className={`flex items-center justify-between p-2.5 rounded-xl text-xs border transition-all ${
                    currentTheme === t.id 
                      ? 'bg-accent-primary/15 border-accent-primary text-accent-primary font-bold' 
                      : 'bg-[#161b22] border-border-color text-text-secondary hover:border-text-tertiary'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: t.color }}></span>
                    <span className="text-[11px]">{t.name}</span>
                  </div>
                  {currentTheme === t.id && <Check size={12} />}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#111827] border-t border-[#21262d] px-4 py-2.5 text-[10px] text-text-tertiary flex justify-between items-center font-mono">
          <span>DevSecOps Control Palette</span>
          <span>Use <kbd className="px-1 bg-[#21262d] rounded">↑↓</kbd> to navigate, <kbd className="px-1 bg-[#21262d] rounded">Enter</kbd> to jump</span>
        </div>
      </div>
    </div>
  );
}
