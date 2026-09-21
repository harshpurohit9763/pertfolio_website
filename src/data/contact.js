// src/data/contact.js
// Shared by the desktop Navbar dropdown and the mobile Navbar/Contact sheet.
import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export const CONTACT_LINKS = [
  { icon: <FaEnvelope />, label: 'Harshpurohit1706@gmail.com', href: 'mailto:Harshpurohit1706@gmail.com' },
  { icon: <FaPhone />, label: '+91 9763745705', href: 'tel:+919763745705' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshpurohit250119/', external: true },
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/harshpurohit9763', external: true },
];
