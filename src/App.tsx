import React, { useState } from 'react';
import { useLenis } from 'lenis/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'];

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active section smoothly via Lenis scroll updates
  useLenis((lenis) => {
    const scrollPosition = lenis.scroll + 200;

    for (const sectionId of SECTIONS) {
      const element = document.getElementById(sectionId);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  });

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-300 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sticky Top Navbar with Active Section Highlighting */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
