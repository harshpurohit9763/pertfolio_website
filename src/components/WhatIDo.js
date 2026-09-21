// src/components/WhatIDo.js
import React from 'react';
import './WhatIDo.css';
import { BIO, TECH_CATEGORIES } from '../data/about';

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
