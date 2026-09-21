// src/App.js
import React, { useRef, useEffect } from 'react';
import './index.css'; // Your new global styles
import useIsMobile from './hooks/useIsMobile';
import mobileSection from './components/mobile/MobileSection.module.css';

// Desktop views
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import WhatIDo from './components/WhatIDo';
import Experience from './components/Experience';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveApps from './components/LiveApps';

// Mobile views — separate component tree, not CSS breakpoints, per section
import NavbarMobile from './components/mobile/NavbarMobile';
import ProfileMobile from './components/mobile/ProfileMobile';
import AboutMobile from './components/mobile/AboutMobile';
import ExperienceMobile from './components/mobile/ExperienceMobile';
import ProjectMobile from './components/mobile/ProjectMobile';
import LiveAppsMobile from './components/mobile/LiveAppsMobile';
import ContactMobile from './components/mobile/ContactMobile';
import FooterMobile from './components/mobile/FooterMobile';

// Picks the desktop or mobile component for one section and wraps it in the
// matching section shell (the mobile shell uses tighter, phone-sized padding).
function Section({ id, sectionRef, isMobile, Desktop, Mobile }) {
  return (
    <section
      ref={sectionRef}
      id={id}
      className={isMobile ? `${mobileSection.wrap} reveal` : 'section container reveal'}
    >
      {isMobile ? <Mobile /> : <Desktop />}
    </section>
  );
}

function App() {
  const isMobile = useIsMobile();

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
  }, [isMobile]);

  return (
    <div className="App">
      {isMobile ? (
        <NavbarMobile scrollToSection={scrollToSection} refs={refs} />
      ) : (
        <Navbar scrollToSection={scrollToSection} refs={refs} />
      )}
      <main>
        <section ref={profileRef} id="home">
          {isMobile ? <ProfileMobile /> : <Profile />}
        </section>

        <Section id="about" sectionRef={whatidoRef} isMobile={isMobile} Desktop={WhatIDo} Mobile={AboutMobile} />
        <Section id="experience" sectionRef={experienceRef} isMobile={isMobile} Desktop={Experience} Mobile={ExperienceMobile} />
        <Section id="projects" sectionRef={projectsRef} isMobile={isMobile} Desktop={Projects} Mobile={ProjectMobile} />
        <Section id="live-apps" sectionRef={liveAppsRef} isMobile={isMobile} Desktop={LiveApps} Mobile={LiveAppsMobile} />
        <Section id="contact" sectionRef={contactRef} isMobile={isMobile} Desktop={Contact} Mobile={ContactMobile} />
      </main>
      {isMobile ? <FooterMobile /> : <Footer />}
    </div>
  );
}

export default App;
