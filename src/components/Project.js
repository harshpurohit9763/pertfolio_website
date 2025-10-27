// src/components/Project.js
import React, { useState } from 'react';
import { FaArrowUpRightFromSquare, FaTimes } from 'react-icons/fa6'; // Using Fa6 for better icon options
import './Project.css';
import ProjectModal from './ProjectModal'; // We'll create this next

// Your projects data (keeping it here for context, ensure your actual data is complete)
const projects = [
  {
    title: 'No Bunk',
    tag: 'SCHOOL APP', // Added a tag for the card design
    gradient: 'linear-gradient(135deg, #1abc9c, #2ecc71)', // Example gradient
    technologies: ['Flutter', 'Node.js', 'Firebase', 'MongoDB', 'AWS EC2'],
    description: [
      'Developed an application with 5 distinct roles: Student, Parent, Teacher, Admin, and Driver.',
      'Implemented features such as result assigning and viewing, attendance tracking, and bus tracking.',
      'Added functionalities for awards management, report card generation, and dispute resolution.',
      'Provided event and notice management with real-time notifications for all users.',
      'Enabled direct chat between students and their mentors for better communication.',
      'Designed modules for creating and managing exam and school timetables.',
      'Built robust user management, allowing admins to add or remove users and manage permissions.',
      'Parents could view their child’s live bus status, assignments, results, and other updates.',
      'Used Node.js for the backend to ensure a scalable and efficient system.',
      'Created a responsive and user-friendly portal for managing school operations seamlessly.',
    ],
    projectImagesLink: 'https://drive.google.com/drive/folders/1OpOa7zzI1R-BQ8mxUTI1I-AVzTJpdWU1?usp=sharing',
  },
  {
    title: 'Admin Dashboard',
    tag: 'SCHOOL ADMIN', // Added a tag
    gradient: 'linear-gradient(135deg, #3498db, #00aaff)', // Example gradient
    technologies: ['Flutter', 'Node.js', 'Firebase', 'MongoDB', 'AWS EC2'],
    description: [
      'Designed and developed a web-based admin dashboard with features to streamline school operations.',
      'Implemented user management, including adding, updating, and removing users.',
      'Added functionality to create certificates and ID cards for students and staff.',
      'Developed features to manage student-related data, such as fees, certificates, late fee payments, and notifications.',
      'Digitized financial management, eliminating the need for paperwork and enabling inventory management through the portal.',
      'Integrated teacher salary management, allowing admin to track salary statuses directly from the portal.',
      'Provided features to track vendor transactions, including sales and purchases, within the system.',
      'Included bus tracking and bus assignment features for effective transportation management.',
      'Supported bulk user uploads via Excel sheets for efficient data management.',
      'Added a module to manage user query form statuses and streamline query resolutions.',
      'Equipped the portal with additional tools to further simplify school administrative tasks.',
    ],
    projectImagesLink: 'https://drive.google.com/drive/folders/1pWJriciP_M6_txESigJYqqLY7kLKr9r1?usp=sharing',
  },
  {
    title: 'E Learning Platform',
    tag: 'EDUCATION', // Added a tag
    gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)', // Example gradient
    technologies: ['Flutter', 'Node.js', 'Firebase', 'MongoDB', 'AWS EC2'],
    description: [
      'Implemented features to start trial courses and provide a seamless onboarding experience.',
      'Added functionality for students to take assignments and quizzes within the portal.',
      'Enabled chat support for connecting with mentors, the support team, or the sales team.',
      'Integrated live doubt support to assist students in real time.',
      'Developed a store screen for purchasing new courses easily.',
      'Introduced a daily quiz feature, rewarding users with points upon completion.',
      'Created a rewards points screen for users to track and redeem their earned points.',
      'Added a certificate screen for students to view and download their course certificates.',
      'Implemented profile editing functionality for users to update their information.',
      'Provided dark and light mode options for better user accessibility and preferences.',
      'Integrated video course streaming with support for both vdoCipher videos and YouTube.',
    ],
    projectImagesLink: 'https://drive.google.com/drive/folders/1B-vT13BvGl2MCyLcQUD7_PDe0OPQnBT_?usp=sharing',
  },
  {
    title: 'School Management App',
    tag: 'SELF PROJECT', // Added a tag
    gradient: 'linear-gradient(135deg, #f1c40f, #f39c12)', // Example gradient
    technologies: ['Flutter', 'GoLang', 'MongoDB', 'AWS S3', 'EC2'],
    description: [
      'Developed a comprehensive school management system with dedicated user interfaces for Admin, Teachers, Students, and Parents.',
      'Implemented GetX for efficient state management across the frontend.',
      'Used GoLang for backend API services, ensuring fast and scalable performance.',
      'Utilized AWS S3 for image storage and AWS EC2 for hosting, improving reliability.',
      'Admin functionalities included user management, fee tracking, notice creation, and timetable management.',
      'Teachers could take attendance, assign homework, and manage notices for students.',
      'Students had access to view attendance, assignments, timetables, and notices, while parents could monitor student progress and view important updates.',
    ],
    projectImagesLink: "https://drive.google.com/drive/folders/1YPNg7iJzhKXuH4ZtgLtmGf6i6AVu9VPF?usp=sharing",
  },
  {
    title: 'Data Card Application',
    tag: 'SECURITY', // Added a tag
    gradient: 'linear-gradient(135deg, #9b59b6, #8e44ad)', // Example gradient
    technologies: ['Flutter', 'Node.js', 'Firebase', 'AWS', 'IPFS'],
    description: [
      'Developed a secure document management system for sharing documents with view-only access through Data Cards.',
      'Implemented two-factor authentication (2FA) to ensure secure sharing and access control.',
      'Grouped documents into Data Cards for better organization and tracking.',
      'Designed a two-level security system using IPFS to store documents securely and ensure immutability.',
      'Integrated Firebase authentication for user access management and AWS EC2 for backend hosting.',
      'The system provided seamless upload, storage, and retrieval of documents while enforcing strict access policies.',
    ],
    projectImagesLink: "https://drive.google.com/drive/folders/1YiaUEgSga-NBLXpkaYKTfO5ndLYpCF0l?usp=sharing",
  },
];


function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  return (
    <>
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">
        A collection of my work, showcasing my skills in development and design.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card" 
            style={{ backgroundImage: project.gradient }} // Apply gradient here
            onClick={() => openModal(project)} // Open modal on card click
          >
            <div className="card-header">
              <span className="project-tag">{project.tag}</span>
              <button 
                className="view-project-btn" 
                onClick={(e) => { 
                  e.stopPropagation(); // Prevent modal from opening when clicking button
                  openModal(project);
                }}
              >
                <FaArrowUpRightFromSquare />
              </button>
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p className="project-technologies-brief">
                {project.technologies.join(' • ')}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
}

export default Projects;