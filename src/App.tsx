import { useCallback, useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CvModal } from './components/CvModal';
import { EducationSection } from './components/EducationSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { MarqueeDivider } from './components/MarqueeDivider';
import { Navbar } from './components/Navbar';
import { Preloader } from './components/Preloader';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'education', 'services', 'contact'];

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof document === 'undefined') return 'dark';
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      if (next === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      try {
        localStorage.setItem('mithu-portfolio-theme', next);
      } catch {
        // Ignore storage restrictions
      }
      return next;
    });
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setShowPreloader(false);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 dark:bg-[#050508] dark:text-slate-100 transition-colors duration-300">
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onOpenCv={() => setIsCvOpen(true)}
        />
        <MarqueeDivider />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />

      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}
