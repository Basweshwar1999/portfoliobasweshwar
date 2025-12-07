import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-darker text-slate-300 font-sans">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;
