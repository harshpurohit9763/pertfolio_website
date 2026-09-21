// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
// Use your local image from the /public folder
import profileImage from '../assets/profile.jpeg';
import './Profile.css';

const ROLES = ['Flutter Developer', 'Backend Engineer', 'Problem Solver', 'Full-Stack Builder'];
const TYPE_SPEED = 65;
const DELETE_SPEED = 35;
const HOLD_TIME = 1400;

function Profile() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [phase, setPhase] = useState('typing'); // 'typing' | 'holding' | 'deleting'

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeoutId;

    if (phase === 'typing') {
      if (typedText.length < current.length) {
        timeoutId = setTimeout(() => setTypedText(current.slice(0, typedText.length + 1)), TYPE_SPEED);
      } else {
        timeoutId = setTimeout(() => setPhase('holding'), HOLD_TIME);
      }
    } else if (phase === 'holding') {
      timeoutId = setTimeout(() => setPhase('deleting'), 400);
    } else if (phase === 'deleting') {
      if (typedText.length > 0) {
        timeoutId = setTimeout(() => setTypedText(current.slice(0, typedText.length - 1)), DELETE_SPEED);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, phase, roleIndex]);

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