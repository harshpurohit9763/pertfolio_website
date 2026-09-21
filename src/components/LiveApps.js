// src/components/LiveApps.js
import React, { useState } from 'react';
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
  {
    title: 'Taskforce HRM',
    links: [
      { platform: 'Play Store', url: 'https://play.google.com/store/apps/details?id=ca.conceptdash.taskforce&pcampaignid=web_share' },
    ],
  },
  {
    title: 'Taskforce Construction',
    links: [
      { platform: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.tf_construction.mobile&pcampaignid=web_share' },
    ],
  },
  {
    title: 'Taskforce One',
    links: [
      { platform: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.taskforce.one&pcampaignid=web_share' },
    ],
  },
];

const FILTERS = ['All', 'Web', 'Play Store', 'App Store'];

function LiveApps() {
  const [filter, setFilter] = useState('All');

  const visibleApps = liveAppsData.filter(
    (app) => filter === 'All' || app.links.some((link) => link.platform === filter)
  );

  // Once a single platform is selected, showing every platform icon per row is redundant —
  // only surface the link for the platform actually being filtered on.
  const getRowLinks = (app) =>
    filter === 'All' ? app.links : app.links.filter((link) => link.platform === filter);

  return (
    <>
      <span className="section-eyebrow">Shipped</span>
      <div className="liveapps-header">
        <h2 className="section-title">Live Applications</h2>
        <span className="liveapps-count mono">{liveAppsData.length} in production</span>
      </div>
      <p className="section-subtitle">
        Applications I have contributed to that are live on the web and app stores — pick a platform to filter.
      </p>

      <div className="liveapps-filters" role="tablist">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`liveapps-filter${filter === f ? ' active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="liveapps-board">
        <div className="liveapps-board-head mono">
          <span>Service</span>
          <span>Status</span>
          <span className="liveapps-board-head-links">{filter === 'All' ? 'Platforms' : 'Open'}</span>
        </div>
        {visibleApps.map((app, index) => (
          <div
            key={app.title}
            className="app-row"
            style={{ animationDelay: `${index * 0.04}s` }}
          >
            <span className="app-row-title">{app.title}</span>
            <span className="app-row-status">
              <span className="app-status-dot" />
              <span className="mono">live</span>
            </span>
            <div className="app-row-links">
              {getRowLinks(app).map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-platform-link"
                  aria-label={`View ${app.title} on ${link.platform}`}
                  title={link.platform}
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