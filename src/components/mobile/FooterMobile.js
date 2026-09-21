// src/components/mobile/FooterMobile.js
import React from 'react';
import styles from './FooterMobile.module.css';

function FooterMobile() {
  return (
    <footer className={styles.footer}>
      <h4 className={styles.name}>Harsh Purohit</h4>
      <p className={styles.based}>Based in India</p>
      <p className={styles.quip}>Still debugging... just kidding (mostly). 😉</p>
      <p className={styles.copyright}>© {new Date().getFullYear()} Harsh. All rights are reserved.</p>
    </footer>
  );
}

export default FooterMobile;
