// src/components/LiveApps.js
import React, { useState } from 'react';
import { FaGooglePlay, FaApple, FaGlobe } from 'react-icons/fa';
import './LiveApps.css';
import { liveAppsData, LIVEAPPS_FILTERS } from '../data/liveApps';

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
        {LIVEAPPS_FILTERS.map((f) => (
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