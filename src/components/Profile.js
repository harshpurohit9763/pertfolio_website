// src/components/Profile.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// Use your local image from the /public folder
import profileImage from '../assets/profile.jpeg'; 
import './Profile.css';

function Profile() {
  return (
    <div className="profile-section container">
      <img 
        src={profileImage}
        alt="Nadhir" 
        className="profile-image" 
      />
      <h1 className="profile-headline">
        Hey, I'm Harsh✨
        <br />
        A <span className="gradient-text">Software Developer</span>
      </h1>
     <p className="profile-bio">
        Associate Software Developer with experience in Flutter, Node.js, and GoLang,
        specializing in building and deploying full-stack mobile and web solutions.
      </p>
      <div className="profile-links">
        <a href="#contact" className="btn btn-primary">Contact Me</a>
        <a href="#projects" className="btn btn-secondary">View Projects</a>
        <a href="https://github.com/harshpurohit9763" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/harshpurohit060402" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Profile;