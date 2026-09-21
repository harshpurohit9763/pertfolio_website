// src/data/experience.js
// Shared by the desktop and mobile Experience views.
export const experiences = [
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

export function calculateTotalExperience(experienceList) {
  let totalMonths = 0;
  const currentDate = new Date();
  const monthMap = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };

  experienceList.forEach((exp) => {
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
      endDate = new Date(endYear, endMonth + 1, 0);
    }

    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
                   (endDate.getMonth() - startDate.getMonth()) + 1;

    if (months > 0) {
      totalMonths += months;
    }
  });

  if (totalMonths === 0) return 'Less than a month';

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let result = '';
  if (years > 0) {
    result += `${years} year${years > 1 ? 's' : ''}`;
  }
  if (months > 0) {
    result += `${years > 0 ? ' ' : ''}${months} month${months > 1 ? 's' : ''}`;
  }

  return result.trim() || 'Calculating...';
}
