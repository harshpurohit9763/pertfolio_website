// src/components/LiveApps.js
import React from 'react';
import { FaGooglePlay, FaApple, FaGlobe } from 'react-icons/fa';
import './LiveApps.css';

// Helper function to get the correct icon
const getPlatformIcon = (platform) => {
  switch (platform) {
    case 'Play Store':
      return <FaGooglePlay />;
    case 'App Store':
      return <FaApple />;
    case 'Web':
      return <FaGlobe />;
    default:
      return <FaGlobe />;
  }
};

// Your updated app data, now merged
const liveAppsData = [
  {
    title: 'INSTAEVALUATE',
    links: [
      { platform: 'Web', url: 'https://instaevaluate.com/' },
    ],
  },
  {
    title: 'FIELD EXPRESS',
    links: [
      { platform: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.subsidex.fieldxpress&hl=en&pli=1' },
      { platform: 'App Store', url: 'https://apps.apple.com/in/app/fieldxpress/id6450364225' },
    ],
  },
  {
    title: 'SURGEONS FOR SURGEONS',
    links: [
      { platform: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.sfs_mobile_app&hl=en' },
      { platform: 'App Store', url: 'https://apps.apple.com/in/app/surgeons-for-surgeons/id1660956060' },
    ],
  },
  {
    title: 'SCHOOL MANAGEMENT',
    links: [
      { platform: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.natkhat.school_management_system&hl=en' },
    ],
  },
  {
    title: 'E LEARNING (CloudyML)',
    links: [
      { platform: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.cloudyml.cloudymlapp' },
      { platform: 'App Store', url: 'https://apps.apple.com/in/app/cloudyml-data-science-course/id6444130328' },
    ],
  },
  {
    title: 'Heyuva',
    links: [
      { platform: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.theyoungindians.android' },
    ],
  },
];

function LiveApps() {
  return (
    <>
      <h2 className="section-title">Live Applications</h2>
      <p className="section-subtitle">
        Applications I have contributed to that are live on the web and app stores.
      </p>

      <div className="live-apps-grid">
        {liveAppsData.map((app, index) => (
          <div key={index} className="app-card">
            <div className="app-card-content">
              <h3>{app.title}</h3>
            </div>
            <div className="app-card-links">
              {app.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-platform-link"
                  aria-label={`View ${app.title} on ${link.platform}`}
                >
                  {getPlatformIcon(link.platform)}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LiveApps;