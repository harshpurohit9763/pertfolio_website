// src/components/mobile/ExperienceMobile.js
import React from 'react';
import styles from './ExperienceMobile.module.css';
import { experiences, calculateTotalExperience } from '../../data/experience';

function ExperienceMobile() {
  const totalExp = calculateTotalExperience(experiences);

  return (
    <div>
      <span className={styles.eyebrow}>Career</span>
      <div className={styles.head}>
        <h2 className={styles.title}>Work Experience</h2>
        <span className={styles.total}>{totalExp}</span>
      </div>
      <p className={styles.subtitle}>My professional journey and roles.</p>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.row}>
            <span className={styles.marker} />
            <span className={styles.duration}>{exp.duration}</span>
            <h3 className={styles.company}>{exp.company}</h3>
            <p className={styles.role}>{exp.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceMobile;
