import React from 'react';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import BackToTop from './components/BackToTop/BackToTop';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Achievements from './components/Achievements/Achievements';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  // Activate scroll-reveal animation hooks across all components
  useScrollReveal();

  return (
    <>
      {/* Background Animated Glow Orbs */}
      <div className="background-glow">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
      </div>

      {/* Global Interactive Utilities */}
      <ScrollProgress />
      <BackToTop />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
