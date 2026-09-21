// src/components/Experience.js
import React from 'react';
import './Experience.css';

// Data extracted from your resume
const experiences = [
  {
    company: 'Dextra Labs PVT LTD',
    role: 'Associate Software Developer',
    duration: 'Jan 2025 - Apr 2026', 
  },
  {
    company: 'Cloudy ML PVT LTD',
    role: 'Flutter Developer',
    duration: 'Dec 2023 - Jan 2025',
  },
  {
    company: 'Mypcot Infotech PVT LTD',
    role: 'Flutter Developer Intern',
    duration: 'Aug 2023 - Oct 2023',
  },
  {
    company: 'Heyuva PVT LTD',
    role: 'Flutter Developer Intern',
    duration: 'Aug 2021 - Dec 2021',
  },
];

// --- NEW HELPER FUNCTION ---
const calculateTotalExperience = (experienceList) => {
  let totalMonths = 0;
  const currentDate = new Date(); // Use current date for "Present"
  const monthMap = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
  };

  experienceList.forEach(exp => {
    const [startStr, endStr] = exp.duration.split(' - ');

    const [startMonthStr, startYearStr] = startStr.split(' ');
    const startYear = parseInt(startYearStr);
    const startMonth = monthMap[startMonthStr];
    const startDate = new Date(startYear, startMonth);

    let endDate;
    if (endStr.toLowerCase() === 'present') {
      endDate = currentDate;
    } else {
      const [endMonthStr, endYearStr] = endStr.split(' ');
      const endYear = parseInt(endYearStr);
      const endMonth = monthMap[endMonthStr];
      // Set day to end of month to ensure full month is counted
      endDate = new Date(endYear, endMonth + 1, 0); 
    }

    // Calculate difference in months
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
                   (endDate.getMonth() - startDate.getMonth()) + 1; // Add 1 to include start month

    if (months > 0) {
        totalMonths += months;
    }
  });

  if (totalMonths === 0) return "Less than a month";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let result = '';
  if (years > 0) {
    result += `${years} year${years > 1 ? 's' : ''}`;
  }
  if (months > 0) {
    result += `${years > 0 ? ' ' : ''}${months} month${months > 1 ? 's' : ''}`;
  }

  return result.trim() || "Calculating..."; // Fallback
};
// --- END HELPER FUNCTION ---


function Experience() {
  // Calculate total experience when the component renders
  const totalExp = calculateTotalExperience(experiences);

  return (
    <>
      <span className="section-eyebrow">Career</span>
      {/* --- MODIFIED HEADER --- */}
      <div className="experience-header-container">
        <h2 className="section-title">Work Experience</h2>
        <span className="total-experience">{totalExp}</span>
      </div>
      {/* --- END MODIFIED HEADER --- */}

      <p className="section-subtitle">My professional journey and roles.</p>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-row">
            <span className="experience-marker" />
            <span className="experience-duration mono">{exp.duration}</span>
            <div className="experience-role-block">
              <h3>{exp.company}</h3>
              <p className="experience-role">{exp.role}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;