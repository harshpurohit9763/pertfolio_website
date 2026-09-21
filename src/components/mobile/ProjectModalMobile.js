// src/components/mobile/ProjectModalMobile.js
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './ProjectModalMobile.module.css';

function ProjectModalMobile({ project, onClose }) {
  const closeBtn = useRef(null);

  useEffect(() => {
    closeBtn.current?.focus();

    const root = document.getElementById('root');
    root?.setAttribute('inert', '');
    root?.setAttribute('aria-hidden', 'true');

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
      root?.removeAttribute('inert');
      root?.removeAttribute('aria-hidden');
      if (document.body.style.overflow === 'hidden') document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.sheet}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.handle} />
        <button className={styles.closeBtn} onClick={onClose} ref={closeBtn} aria-label="Close">
          <FaTimes />
        </button>

        <div className={styles.scroll}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.tag}>{project.tag}</p>

          <p className={styles.technologies}>
            <strong>Technologies:</strong> {project.technologies.join(', ')}
          </p>

          <h4 className={styles.descHeading}>Description:</h4>
          <ul className={styles.descList}>
            {project.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {project.projectImagesLink && (
            <a
              href={project.projectImagesLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewImagesBtn}
            >
              View Project Images <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ProjectModalMobile;
