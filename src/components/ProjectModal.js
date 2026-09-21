// src/components/ProjectModal.js
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const closeBtn = useRef(null);

  useEffect(() => {
    closeBtn.current.focus();

    // Fully lock the rest of the page out — no background scroll, no
    // background focus/screen-reader access — until the modal is closed.
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

  const trapFocus = (e) => {
    if (e.key !== 'Tab') return;
    const focusables = modalRef.current?.querySelectorAll('button, a[href], [tabindex]');
    if (!focusables || focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  if (!project) return null;

  // Rendered via portal so `position: fixed` centers on the viewport even
  // though an ancestor section is animated with a CSS transform (which would
  // otherwise create its own containing block and make the modal drift with it).
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={trapFocus}
        ref={modalRef}
      >
        <button className="modal-close-btn" onClick={onClose} ref={closeBtn} aria-label="Close">
          <FaTimes />
        </button>

        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-tag">{project.tag}</p>

        {/* --- ADD THIS WRAPPER DIV AROUND THE SCROLLABLE CONTENT --- */}
        <div className="modal-scrollable-content">
            {project.screenshot && (
              <img src={project.screenshot} alt={project.title} className="modal-screenshot" />
            )}
            <div className="modal-details">
               
                <p className="modal-technologies">
                    <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>

                <h4 className="modal-description-heading">Description:</h4>
                <ul className="modal-description-list">
                    {project.description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {project.projectImagesLink && (
            <a
                href={project.projectImagesLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn modal-view-images-btn"
            >
                View Project Images <FaExternalLinkAlt />
            </a>
            )}
        </div>
        {/* --- END WRAPPER DIV --- */}
      </div>
    </div>,
    document.body
  );
}

export default ProjectModal;