// src/App.js
import React, { useRef, useEffect } from 'react';
import './index.css'; // Your new global styles

// Import your components
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import WhatIDo from './components/WhatIDo';
import Experience from './components/Experience';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveApps from './components/LiveApps';

function App() {
  // Create refs for each section
  const profileRef = useRef(null);
  const whatidoRef = useRef(null);
  const experienceRef = useRef(null);
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
    experienceRef,
    projectsRef,
    liveAppsRef,
    contactRef,
  };

  // Fade sections in as they enter the viewport instead of dumping everything on screen at once.
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} refs={refs} />
      <main>
        {/* We wrap each component in a <section> tag for styling and scrolling */}
        <section ref={profileRef} id="home">
          <Profile />
        </section>

        <section ref={whatidoRef} id="about" className="section container reveal">
          <WhatIDo />
        </section>
        <section ref={experienceRef} id="experience" className="section container reveal">
          <Experience />
        </section>
        <section ref={projectsRef} id="projects" className="section container reveal">
          <Projects />
        </section>
        <section ref={liveAppsRef} id="live-apps" className="section container reveal">
          <LiveApps />
        </section>
        <section ref={contactRef} id="contact" className="section container reveal">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
// 