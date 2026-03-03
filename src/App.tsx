import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ExperienceSection from './components/ExperienceSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="app-container relative">
      {/* Global Particle Background */}
      <ParticleBackground />
      
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <TechStackSection />
        <ProjectsSection />
        <CertificationsSection />
        <ExperienceSection />
        <StatsSection />
        <ContactSection />
      </main>
      <FooterSection />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
