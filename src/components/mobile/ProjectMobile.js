// src/components/mobile/ProjectMobile.js
import React, { useState } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import styles from './ProjectMobile.module.css';
import projects from '../../data/projects';
import ProjectModalMobile from './ProjectModalMobile';

function ProjectMobile() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div>
      <span className={styles.eyebrow}>Selected Work</span>
      <h2 className={styles.title}>My Projects</h2>
      <p className={styles.subtitle}>
        A collection of my work, showcasing my skills in development and design.
      </p>

      <div className={styles.list}>
        {projects.map((project, index) => (
          <button
            key={index}
            className={styles.card}
            onClick={() => openModal(project)}
          >
            <span className={styles.cardAccent} style={{ background: project.gradient }} />
            <div className={styles.cardHead}>
              <span className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.cardTag}>{project.tag}</span>
            </div>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardTech}>{project.technologies.join(' • ')}</p>
            <span className={styles.cardCta}>
              View project <FaArrowUpRightFromSquare />
            </span>
          </button>
        ))}
      </div>

      {selectedProject && (
        <ProjectModalMobile project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

export default ProjectMobile;
