// src/components/Navbar.js
import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ scrollToSection, refs }) {
  const { profileRef, projectsRef, contactRef } = refs;

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <a href="#home" className="navbar-logo" onClick={() => scrollToSection(profileRef)}>
          Harsh.dev
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={() => scrollToSection(profileRef)}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={() => scrollToSection(projectsRef)}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={() => scrollToSection(contactRef)}>
              Contact
            </a>
          </li>
        </ul>
      {/* Updated link with the document icon */}
        <a 
          href="https://drive.google.com/file/d/1dtLc8iAT_-V8_8rsA3TIQC0n_t5PovPS/view?usp=sharing" // Path relative to the public folder
          download="Harsh_Purohit_Resume.pdf" // Suggested filename
          className="nav-download-btn"
          aria-label="Download Resume" // Added for accessibility
        >
          <FaFilePdf /> {/* Use the document icon */}
       
        </a>
      </div>
    </nav>
  );
}

export default Navbar;