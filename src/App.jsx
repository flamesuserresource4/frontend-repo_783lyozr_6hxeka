import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#06070a] text-white antialiased">
      <Hero />
      <Skills />
      <Experience />
      <Projects />

      <footer className="border-t border-white/10 bg-[#08090c] py-10 text-center text-sm text-white/60">
        <div className="mx-auto max-w-6xl px-6">
          Built with curiosity at the intersection of mechanics and software.
        </div>
      </footer>
    </div>
  );
}

export default App;
