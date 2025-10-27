// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-left">
          <h4>Harsh Purohit</h4>
          <p>Based in India</p>
        </div>
        <div className="footer-right">
          <p>Still debugging... just kidding (mostly). 😉</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Harsh. All rights are reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;