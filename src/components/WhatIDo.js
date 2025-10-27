// src/components/WhatIDo.js
import React from 'react';
import { FaMobileAlt, FaDatabase, FaBrain } from 'react-icons/fa';
import './WhatIDo.css';

// --- REVISED SERVICES ARRAY (CITATIONS REMOVED) ---
const services = [
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    items: [
      'Expertise in cross-platform development using Flutter & Dart for Android & iOS.',
      'Skilled in building UIs from scratch & implementing complex features like RPPG health monitoring.',
      'Proficient in advanced state management patterns (BLOC & GetX).',
      'Experience with multi-threading (Isolates) for performance optimization.',
      'Implementation of caching (Hive, SQLite) for offline-first functionality.',
      'Handling push/local notifications and background services effectively.',
      'Full app lifecycle management including deployment to Play Store & App Store.',
    ],
  },
  {
    icon: <FaDatabase />,
    title: 'Backend & DevOps',
    items: [
      'Backend development using Node.js, GoLang, and Java Spring Boot.',
      'Building and integrating RESTful APIs with robust error handling.',
      'Experience with real-time communication using Socket.IO.',
      'Database management skills across SQL (PostgreSQL, MySQL) and NoSQL (Firebase, MongoDB).',
      'Cloud deployment and management using AWS (EC2, S3).',
      'DevOps practices including Docker, Jenkins CI/CD, and Linux environments.',
      'Experience with VM setup, Logic Apps, and access management.',
    ],
  },
  {
    icon: <FaBrain />,
    title: 'Specialized Skills & POCs',
    items: [
      'Developing Proof-of-Concepts for innovative features like Pose Detection & Content Scraping.',
      'Leveraging AI and tools like SonarQube for issue resolution and code quality.',
      'Experience with React Native for specific use cases (e.g., surgeon collaboration tools).',
      'Knowledge of decentralized technologies like IPFS for enhanced data security.',
      'Full-stack development capabilities, bridging frontend and backend effectively.',
      'Prompt Engineering techniques for AI applications.',
      'Designing scalable and maintainable application architectures.',
    ],
  },
];
// --- END REVISED ARRAY ---

function WhatIDo() {
  return (
    <>
      <h2 className="section-title">Building Digital Experiences</h2>
      <p className="section-subtitle">
        I specialize in creating stunning user interfaces and developing
        high-quality applications that stand out.
      </p>
      <div className="whatido-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <ul className="service-list">
              {service.items.map((item, idx) => (
                // Render list items directly without dangerouslySetInnerHTML
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default WhatIDo;