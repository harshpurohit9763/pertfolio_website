// src/data/navigation.js
// Shared by the desktop and mobile Navbar. refKey looks up the actual
// section ref from the `refs` object App.js builds and passes down.
export const NAV_ITEMS = [
  { id: 'home', label: 'Home', refKey: 'profileRef' },
  { id: 'about', label: 'About', refKey: 'whatidoRef' },
  { id: 'experience', label: 'Experience', refKey: 'experienceRef' },
  { id: 'projects', label: 'Projects', refKey: 'projectsRef' },
  { id: 'live-apps', label: 'Live Apps', refKey: 'liveAppsRef' },
  { id: 'contact', label: 'Contact', refKey: 'contactRef' },
];
