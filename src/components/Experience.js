// src/components/Experience.js
import React from 'react';
import './Experience.css';
import { experiences, calculateTotalExperience } from '../data/experience';

function Experience() {
  // Calculate total experience when the component renders
  const totalExp = calculateTotalExperience(experiences);

  return (
    <>
      <span className="section-eyebrow">Career</span>
      {/* --- MODIFIED HEADER --- */}
      <div className="experience-header-container">
        <h2 className="section-title">Work Experience</h2>
        <span className="total-experience">{totalExp}</span>
      </div>
      {/* --- END MODIFIED HEADER --- */}

      <p className="section-subtitle">My professional journey and roles.</p>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-row">
            <span className="experience-marker" />
            <span className="experience-duration mono">{exp.duration}</span>
            <div className="experience-role-block">
              <h3>{exp.company}</h3>
              <p className="experience-role">{exp.role}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;