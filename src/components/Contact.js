// src/components/Contact.js
import React from 'react';
import ContactForm from './ContactForm';
import './Contact.css';

function Contact() {
  return (
    <>
      <span className="section-eyebrow">Get In Touch</span>
      <div className="contact-text-header">
        <h2 className="section-title">
          Inherited Will, the Destiny of the Age,
          <br />
          <span className="gradient-text">and the Dreams of its People.</span>
        </h2>
        <p className="quote-subtitle">
          "As long as people continue to pursue the meaning of Freedom, these things will never cease to be!"
        </p>
        <span className="quote-attribution mono">— Gol D. Roger</span>
      </div>

      <ContactForm />
    </>
  );
}

export default Contact;