// src/App.js
import React, { useRef } from 'react';
import './index.css'; // Your new global styles

// Import your components
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import WhatIDo from './components/WhatIDo'; // Replaces Experience/Skills
import Projects from './components/Project';
import Contact from './components/Contact'; // New component
import Footer from './components/Footer';   // New component
import LiveApps from './components/LiveApps';

function App() {
  // Create refs for each section
  const profileRef = useRef(null);
  const whatidoRef = useRef(null);
  const projectsRef = useRef(null);
  const liveAppsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to a specific section smoothly
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // This object will be passed to the Navbar
  const refs = {
    profileRef,
    whatidoRef,
    projectsRef,
    liveAppsRef,
    contactRef,
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} refs={refs} />
      <main>
        {/* We wrap each component in a <section> tag for styling and scrolling */}
        <section ref={profileRef} id="home">
          <Profile />
        </section>

        <section ref={whatidoRef} id="about" className="section container">
          <WhatIDo />
        </section>

        <section ref={projectsRef} id="projects" className="section container">
          <Projects />
        </section>
        <section ref={liveAppsRef} id="live-apps" className="section container">
          <LiveApps />
        </section>
        <section ref={contactRef} id="contact" className="section container">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
// 