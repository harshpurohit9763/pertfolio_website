// src/components/Project.js
import React, { useRef, useState } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import './Project.css';
import ProjectModal from './ProjectModal';
import projects from '../data/projects';


function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const previewRef = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  // Move the floating preview chip by writing straight to the DOM instead of
  // re-rendering on every mousemove — keeps it feeling snappy, not laggy.
  const handleMouseMove = (e) => {
    if (!previewRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    previewRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -115%)`;
  };

  return (
    <>
      <span className="section-eyebrow">Selected Work</span>
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">
        A collection of my work, showcasing my skills in development and design.
      </p>

      <div
        className="projects-list"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-row"
            onClick={() => openModal(project)}
            onMouseEnter={() => setHoveredProject(project)}
          >
            <span className="project-row-index mono">{String(index + 1).padStart(2, '0')}</span>
            <div className="project-row-body">
              <h3>{project.title}</h3>
              <p className="project-technologies-brief">
                {project.technologies.join(' • ')}
              </p>
            </div>
            <span className="project-tag">{project.tag}</span>
            <button
              className="view-project-btn"
              aria-label={`View ${project.title}`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal from opening twice
                openModal(project);
              }}
            >
              <FaArrowUpRightFromSquare />
            </button>
            <span className="project-row-accent" style={{ background: project.gradient }} />
          </div>
        ))}

        <div
          ref={previewRef}
          className={`project-preview-float${hoveredProject ? ' visible' : ''}`}
          style={{ background: hoveredProject?.gradient }}
          aria-hidden="true"
        >
          <span className="project-preview-tag mono">{hoveredProject?.tag}</span>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
}

export default Projects;