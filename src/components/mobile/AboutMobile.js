// src/components/mobile/AboutMobile.js
import React, { useState } from 'react';
import styles from './AboutMobile.module.css';
import { BIO, TECH_CATEGORIES } from '../../data/about';

function AboutMobile() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <span className={styles.eyebrow}>About</span>
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.bio}>
        {BIO.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.techHead}>
        <span className={styles.techHeading}>Core Technologies</span>
        <span className={styles.techCount}>{String(TECH_CATEGORIES.length).padStart(2, '0')} areas</span>
      </div>

      {/* Accordion instead of the desktop's always-open chip grid — keeps six
          categories from turning into one long scroll on a phone. */}
      <div className={styles.techList}>
        {TECH_CATEGORIES.map((category, index) => {
          const isOpen = openIndex === index;
          return (
            <div className={styles.techItem} key={category.label}>
              <button
                className={styles.techButton}
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className={styles.techIndex}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.techLabel}>{category.label}</span>
                <span className={`${styles.techCaret}${isOpen ? ` ${styles.open}` : ''}`}>+</span>
              </button>
              <div className={`${styles.techPanel}${isOpen ? ` ${styles.open}` : ''}`}>
                <div className={styles.techChips}>
                  {category.items.map((item) => (
                    <span className={styles.techChip} key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutMobile;
