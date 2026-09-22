// src/components/mobile/ProfileMobile.js
import React from 'react';
import profileImage from '../../assets/profile.png';
import styles from './ProfileMobile.module.css';
import { BUILD_ITEMS } from '../../data/profile';
import useTypewriter from '../../hooks/useTypewriter';

function ProfileMobile() {
  const typedText = useTypewriter(BUILD_ITEMS);

  return (
    <div className={styles.hero}>
      <div className={styles.portraitFrame}>
        <img src={profileImage} alt="Harsh Purohit" className={styles.portrait} />
      </div>

      <span className={styles.status}>
        <span className={styles.statusDot} />
        Open to new roles
      </span>

      <h1 className={styles.headline}>
        Hey, I'm Harsh.
        <br />
        I build <span className={styles.accent}>{typedText}</span>
        <span className={styles.cursor} aria-hidden="true">_</span>
      </h1>

      <p className={styles.bio}>
        Associate Software Developer with experience in Flutter, Node.js, and GoLang,
        specializing in building and deploying full-stack mobile and web solutions.
      </p>
    </div>
  );
}

export default ProfileMobile;
