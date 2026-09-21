// src/components/mobile/LiveAppsMobile.js
import React, { useState } from 'react';
import { FaGooglePlay, FaApple, FaGlobe } from 'react-icons/fa';
import styles from './LiveAppsMobile.module.css';
import { liveAppsData, LIVEAPPS_FILTERS } from '../../data/liveApps';

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

function LiveAppsMobile() {
  const [filter, setFilter] = useState('All');

  const visibleApps = liveAppsData.filter(
    (app) => filter === 'All' || app.links.some((link) => link.platform === filter)
  );

  const getRowLinks = (app) =>
    filter === 'All' ? app.links : app.links.filter((link) => link.platform === filter);

  return (
    <div>
      <span className={styles.eyebrow}>Shipped</span>
      <h2 className={styles.title}>Live Applications</h2>
      <span className={styles.count}>{liveAppsData.length} in production</span>
      <p className={styles.subtitle}>
        Applications I have contributed to that are live on the web and app stores.
      </p>

      <div className={styles.filters}>
        {LIVEAPPS_FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles.filter}${filter === f ? ` ${styles.active}` : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {visibleApps.map((app) => (
          <div key={app.title} className={styles.row}>
            <div className={styles.rowInfo}>
              <span className={styles.statusDot} />
              <span className={styles.rowTitle}>{app.title}</span>
            </div>
            <div className={styles.rowLinks}>
              {getRowLinks(app).map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.platformLink}
                  aria-label={`View ${app.title} on ${link.platform}`}
                >
                  {getPlatformIcon(link.platform)}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveAppsMobile;
