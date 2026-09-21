// src/components/Navbar.js
// Desktop-only view — App.js renders NavbarMobile below the mobile breakpoint instead.
import React, { useEffect, useState, useRef } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import './Navbar.css';
import { CONTACT_LINKS } from '../data/contact';
import { NAV_ITEMS } from '../data/navigation';

function Navbar({ scrollToSection, refs }) {
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);
  const observer = useRef(null);
  const dropdownRef = useRef(null);

  const sections = NAV_ITEMS.map((item) => ({ ...item, ref: refs[item.refKey] }));

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.1, 0.5] }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.current.observe(ref.current);
    });

    return () => observer.current.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!contactOpen) return;

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setContactOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setContactOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [contactOpen]);

  const handleNavClick = (id, ref) => {
    if (id === 'contact') {
      setContactOpen((open) => !open);
      return;
    }
    setContactOpen(false);
    scrollToSection(ref);
  };

  return (
    <nav className="navbar" ref={dropdownRef}>
      <div className="navbar-progress" style={{ width: `${progress}%` }} />
      <div className="navbar-container container">
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => {
            setContactOpen(false);
            scrollToSection(refs.profileRef);
          }}
        >
          <span className="navbar-logo-mark">/</span>harsh.dev
        </a>
        <ul className="nav-menu">
          {sections.map(({ id, label, ref }, index) => (
            <li className="nav-item" key={id}>
              <a
                href={`#${id}`}
                className={`nav-link${active === id ? ' active' : ''}${id === 'contact' && contactOpen ? ' open' : ''}`}
                aria-expanded={id === 'contact' ? contactOpen : undefined}
                onClick={(e) => {
                  if (id === 'contact') e.preventDefault();
                  handleNavClick(id, ref);
                }}
              >
                <span className="nav-link-index">{String(index).padStart(2, '0')}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://drive.google.com/file/d/1dtLc8iAT_-V8_8rsA3TIQC0n_t5PovPS/view?usp=sharing"
          download="Harsh_Purohit_Resume.pdf"
          className="nav-download-btn"
          aria-label="Download Resume"
        >
          <FaFilePdf />
          <span>Resume</span>
        </a>
      </div>

      <div className={`contact-dropdown${contactOpen ? ' open' : ''}`}>
        <div className="contact-dropdown-inner container">
          <span className="contact-dropdown-label mono">Reach me at</span>
          <div className="contact-dropdown-links">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="contact-pill"
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setContactOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;