import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EngineeringSnapshot from './components/EngineeringSnapshot';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import DevOpsLabSection from './components/DevOpsLabSection';
import PortfolioInfrastructureSection from './components/PortfolioInfrastructureSection';
import CurrentlyBuildingSection from './components/CurrentlyBuildingSection';
import TechStackSection from './components/TechStackSection';
import CertificationsSection from './components/CertificationsSection';
import EducationSection from './components/EducationSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import CommandPalette from './components/CommandPalette';
import ResumeModal from './components/ResumeModal';
import ProjectCaseStudyModal from './components/ProjectCaseStudyModal';
import { ProjectItem } from './data/projects';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isRecruiterMode, setIsRecruiterMode] = useState<boolean>(() => {
    return localStorage.getItem('portfolio_recruiter_mode') === 'true';
  });
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    return localStorage.getItem('portfolio_theme') || 'cyan';
  });

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem('portfolio_theme', theme);
  };

  const handleToggleRecruiterMode = () => {
    setIsRecruiterMode(prev => {
      const next = !prev;
      localStorage.setItem('portfolio_recruiter_mode', String(next));
      return next;
    });
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
        isRecruiterMode={isRecruiterMode}
        onToggleRecruiterMode={handleToggleRecruiterMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="pt-16 sm:pt-20">
        <HeroSection 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenPalette={() => setIsPaletteOpen(true)}
          isRecruiterMode={isRecruiterMode}
          onToggleRecruiterMode={handleToggleRecruiterMode}
        />
        
        <EngineeringSnapshot />
        
        <AboutSection isRecruiterMode={isRecruiterMode} />
        
        <ExperienceSection />
        
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        
        {!isRecruiterMode && (
          <>
            <DevOpsLabSection />
            <PortfolioInfrastructureSection />
            <CurrentlyBuildingSection />
          </>
        )}
        
        <TechStackSection />
        
        <CertificationsSection />
        
        <EducationSection />
        
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
        isRecruiterMode={isRecruiterMode}
        onToggleRecruiterMode={handleToggleRecruiterMode}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;

