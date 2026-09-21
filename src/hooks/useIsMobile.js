import { useEffect, useState } from 'react';

const QUERY = '(max-width: 768px)';

function getMatch() {
  return typeof window !== 'undefined' && window.matchMedia(QUERY).matches;
}

// Drives which top-level view (desktop vs. mobile) each section renders.
// Components never resize themselves via CSS breakpoints — App.js picks
// the whole component based on this.
export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getMatch);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const handleChange = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  return isMobile;
}
