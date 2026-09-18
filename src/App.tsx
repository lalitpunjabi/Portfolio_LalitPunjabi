import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import DevOpsLabSection from './components/DevOpsLabSection';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ExperienceSection from './components/ExperienceSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import CommandPalette from './components/CommandPalette';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    return localStorage.getItem('portfolio_theme') || 'cyan';
  });

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem('portfolio_theme', theme);
  };

  useEffect(() => {
    document.body.className = '';
    if (currentTheme !== 'cyan') {
      document.body.classList.add(`theme-${currentTheme}`);
    }
  }, [currentTheme]);

  return (
    <div className="app-container relative">
      {/* Global Particle Background */}
      <ParticleBackground />
      
      <Navbar 
        onOpenPalette={() => setIsPaletteOpen(true)}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
      />

      <main>
        <HeroSection 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenPalette={() => setIsPaletteOpen(true)}
        />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <DevOpsLabSection />
        <TechStackSection />
        <ProjectsSection />
        <CertificationsSection />
        <StatsSection />
        <ContactSection />
      </main>

      <FooterSection />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Global Modals & Command Palette */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
