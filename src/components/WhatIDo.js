// src/components/WhatIDo.js
import React from 'react';
import './WhatIDo.css';

const BIO = [
  "Software Engineer with 3+ years shipping production apps across Android, iOS and Web — Flutter is my primary expertise. I've worked across healthcare, productivity, fintech/news and enterprise products, owning features end-to-end: real-time systems, offline-first workflows, auth, payments, push notifications, and production releases.",
  "Beyond Flutter and Dart, I work across the stack — Node.js, Python and Go on the backend, PostgreSQL/MySQL/MongoDB/Redis for data, deployed on AWS with Docker, Linux, NGINX and Jenkins CI/CD. Building real products pushed me to think in systems — event-driven architectures, scalability and reliable data sync — not just screens and APIs.",
  "AI is a core part of my workflow now, for implementation, refactoring and validation, while architecture and product decisions stay mine. I like solving practical engineering problems, and I'm looking to keep growing toward backend and distributed-systems engineering.",
];

const TECH_CATEGORIES = [
  {
    label: 'Mobile & Web',
    items: ['Flutter', 'Dart', 'Android', 'iOS', 'Flutter Web'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Go', 'Python', 'REST APIs', 'WebSockets', 'Socket.IO'],
  },
  {
    label: 'Databases & Infrastructure',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Linux', 'NGINX'],
  },
  {
    label: 'Engineering & Delivery',
    items: [
      'Git', 'Jenkins', 'CI/CD', 'SonarQube', 'Play Store', 'App Store',
      'Offline-first architecture', 'Real-time systems', 'API integration',
    ],
  },
  {
    label: 'Architecture & Systems',
    items: ['Clean Architecture', 'CQRS', 'Event Sourcing', 'Event-driven systems', 'Distributed-system fundamentals'],
  },
  {
    label: 'AI-Assisted Development',
    items: [
      'AI-powered development workflows', 'Code generation', 'Refactoring',
      'Validation', 'Automation', 'AI-agent development',
    ],
  },
];

function WhatIDo() {
  return (
    <>
      <span className="section-eyebrow">About</span>
      <h2 className="section-title">About Me</h2>

      <div className="about-row">
        <div className="about-bio">
          {BIO.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="about-tech">
          <div className="about-tech-head">
            <span className="about-tech-heading mono">Core Technologies</span>
            <span className="about-tech-count mono">{String(TECH_CATEGORIES.length).padStart(2, '0')} areas</span>
          </div>
          <div className="about-tech-grid">
            {TECH_CATEGORIES.map((category, index) => (
              <div
                className="about-tech-row"
                key={category.label}
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="about-tech-row-head">
                  <span className="about-tech-index mono">{String(index + 1).padStart(2, '0')}</span>
                  <span className="about-tech-label mono">{category.label}</span>
                </div>
                <div className="about-tech-chips">
                  {category.items.map((item) => (
                    <span className="about-tech-chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatIDo;
