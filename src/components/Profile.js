// src/components/Profile.js
// Desktop-only view — App.js renders ProfileMobile below the mobile breakpoint instead.
import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import profileImage from '../assets/profile.png';
import './Profile.css';
import { ROLES } from '../data/profile';
import useTypewriter from '../hooks/useTypewriter';

function Profile() {
  const typedText = useTypewriter(ROLES);

  return (
    <div className="profile-section container">
      <div className="profile-copy">
        <span className="profile-status">
          <span className="profile-status-dot" />
          Open to new roles
        </span>

        <h1 className="profile-headline">
          Hey, I'm Harsh.
          <br />
          I build <span className="gradient-text">{typedText}</span>
          <span className="profile-cursor" aria-hidden="true">_</span>
        </h1>

        <p className="profile-bio">
          Associate Software Developer with experience in Flutter, Node.js, and GoLang,
          specializing in building and deploying full-stack mobile and web solutions.
        </p>
      </div>

      <div className="profile-portrait">
        <div className="profile-portrait-frame">
          <img src={profileImage} alt="Harsh Purohit" className="profile-image" />
        </div>
      </div>

      <a href="#about" className="profile-scroll-cue" aria-label="Scroll to about section">
        <span>Scroll</span>
        <FaArrowDown />
      </a>
    </div>
  );
}

export default Profile;