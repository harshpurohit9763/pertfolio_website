// src/components/ProjectModal.js
import React from 'react';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-tag">{project.tag}</p>

        {/* --- ADD THIS WRAPPER DIV AROUND THE SCROLLABLE CONTENT --- */}
        <div className="modal-scrollable-content"> 
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
    </div>
  );
}

export default ProjectModal;