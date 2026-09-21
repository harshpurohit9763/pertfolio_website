// src/components/mobile/NavbarMobile.js
// Mobile-only view — App.js renders the desktop Navbar instead above the
// mobile breakpoint. Six links + logo + resume button don't fit in one row
// on a phone, so this collapses everything behind a hamburger toggle.
import React, { useEffect, useRef, useState } from 'react';
import { FaFilePdf, FaBars, FaTimes } from 'react-icons/fa';
import styles from './NavbarMobile.module.css';
import { CONTACT_LINKS } from '../../data/contact';
import { NAV_ITEMS } from '../../data/navigation';

function NavbarMobile({ scrollToSection, refs }) {
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const observer = useRef(null);
  const navRef = useRef(null);

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
    if (!menuOpen && !contactOpen) return;

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setContactOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [menuOpen, contactOpen]);

  // Panel open locks page scroll, same idea as the project modal — a half-open
  // sheet behind a scrolling page reads as broken on a phone.
  useEffect(() => {
    document.body.style.overflow = menuOpen || contactOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, contactOpen]);

  const handleNavClick = (id, ref) => {
    if (id === 'contact') {
      setContactOpen((open) => !open);
      setMenuOpen(false);
      return;
    }
    setMenuOpen(false);
    setContactOpen(false);
    scrollToSection(ref);
  };

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.progress} style={{ width: `${progress}%` }} />
      <div className={styles.bar}>
        <a
          href="#home"
          className={styles.logo}
          onClick={() => {
            setMenuOpen(false);
            setContactOpen(false);
            scrollToSection(refs.profileRef);
          }}
        >
          <span className={styles.logoMark}>/</span>harsh.dev
        </a>

        <button
          className={styles.toggle}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen((open) => !open);
            setContactOpen(false);
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`${styles.menuSheet}${menuOpen ? ` ${styles.open}` : ''}`}>
        <ul className={styles.menuList}>
          {sections.map(({ id, label, ref }, index) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${styles.menuLink}${active === id ? ` ${styles.active}` : ''}${id === 'contact' && contactOpen ? ` ${styles.active}` : ''}`}
                onClick={(e) => {
                  if (id === 'contact') e.preventDefault();
                  handleNavClick(id, ref);
                }}
              >
                <span className={styles.menuIndex}>{String(index).padStart(2, '0')}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://drive.google.com/file/d/1dtLc8iAT_-V8_8rsA3TIQC0n_t5PovPS/view?usp=sharing"
          download="Harsh_Purohit_Resume.pdf"
          className={styles.resumeBtn}
        >
          <FaFilePdf />
          <span>Download Resume</span>
        </a>
      </div>

      <div className={`${styles.contactSheet}${contactOpen ? ` ${styles.open}` : ''}`}>
        <span className={styles.contactLabel}>Reach me at</span>
        <div className={styles.contactLinks}>
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.contactPill}
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
    </nav>
  );
}

export default NavbarMobile;
