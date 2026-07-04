import { useEffect, useCallback } from 'react';
import LogoNav from './components/LogoNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import StackSection from './components/StackSection';
import SocialsSection from './components/SocialsSection';
import ContactSection from './components/ContactSection';
import './App.css';

export default function App() {
  useEffect(() => {
    // Initialise both variables
    document.documentElement.style.setProperty('--progress', '0');
    document.documentElement.style.setProperty('--outro',    '0');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const transitionPx = window.innerHeight; // 1 full screen of scroll
      
      let progress: number;

      if (scrollY <= transitionPx) {
        // ── INTRO: logo expands, scrolling pushes cards up naturally ─────────────
        progress = scrollY / transitionPx;
      } else if (scrollY >= maxScroll - transitionPx) {
        // ── OUTRO: logo collapses back as user reaches the very bottom ─────────
        progress = (maxScroll - scrollY) / transitionPx;
      } else {
        // ── MIDDLE: nav bar stays at top, content scrolls normally ────
        progress = 1;
      }

      progress = Math.max(0, Math.min(1, progress));
      document.documentElement.style.setProperty('--progress', progress.toFixed(4));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="app">

      {/* ── Fixed |(.o.)| → nav bar ────────────────────── */}
      <LogoNav onNavClick={scrollTo} />

      {/* ── Scrollable portfolio content ─────────────────── */}
      <main className="page-content">
        
        {/* Intro spacer: forces you to scroll 1 full screen to see the first card.
            As you scroll down, the cards NATURALLY slide up from below! */}
        <div style={{ height: '100vh' }} />

        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <StackSection />
        <SocialsSection />
        <ContactSection />

        {/* Outro spacer: gives you 1 extra screen of scroll at the bottom, 
            so the logo can safely collapse back to the center of the black screen */}
        <div style={{ height: '100vh' }} />
      </main>
    </div>
  );
}
