import React from 'react';
import { Layout } from './components/Layout';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import ThreeBackground from './components/ThreeBackground';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Three.js Background */}
      <div className="fixed inset-0 -z-10">
        <ThreeBackground />
      </div>

      {/* Content */}
      <Layout>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;