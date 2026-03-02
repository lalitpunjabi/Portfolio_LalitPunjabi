import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <TechStackSection />
        <ProjectsSection />
        <CertificationsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
