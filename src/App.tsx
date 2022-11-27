import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Terminal from './components/Terminal';

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 '>
      <Nav />
      <About />
      <Terminal />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
