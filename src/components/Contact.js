// src/components/Contact.js
import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css'; // Make sure this CSS file exists and is linked

function Contact() {
  return (
    <>
      {/* Keeping the class name, but the style will change */}
      <div className="contact-text-header floating-scroll-header"> {/* Renamed class */}
        <h2 className="section-title">
          Inherited Will, the Destiny of the Age,
          <br />
          <span className="gradient-text">and the Dreams of its People.</span>
        </h2>
        <p className="section-subtitle quote-subtitle">
          "As long as people continue to pursue the meaning of Freedom, these things will never cease to be!"
          <br />
          <span className="quote-attribution">— Gol D. Roger</span>
        </p>
      </div>

      {/* Contact links grid remains the same */}
      <div className="contact-links-grid">
         {/* ... contact cards ... */}
         <a href="mailto:Harshpurohit1706@gmail.com" className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>Harshpurohit1706@gmail.com</p>
          <span>Send a message</span>
        </a>

        <a href="tel:+919763745705" className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <p>+91 9763745705</p>
          <span>Call me</span>
        </a>

        <a href="https://www.linkedin.com/in/harshpurohit060402/" target="_blank" rel="noopener noreferrer" className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <p>harshpurohit060402</p>
          <span>View profile</span>
        </a>

        <a href="https://github.com/harshpurohit9763" target="_blank" rel="noopener noreferrer" className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p>harshpurohit9763</p>
          <span>View profile</span>
        </a>
      </div>
    </>
  );
}

export default Contact;