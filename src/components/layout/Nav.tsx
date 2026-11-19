import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Mascot } from '../mascot/Mascot';
import { MIMIC_BOX_URL } from '../../data/links';
import styles from './Nav.module.css';

const LINKS: ReadonlyArray<{ to: string; label: string }> = [
  { to: '/about', label: 'About the <CA>' },
  { to: '/find-your-fc', label: 'Find your FC' },
  { to: '/fcs', label: 'FC Directory' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} ca-container`}>
        <NavLink to="/" className={styles.brand} onClick={close} aria-label="Cactuar Alliance home">
          <Mascot size={44} animated={false} ariaLabel="" />
          <span className={styles.brandText}>
            <span className={styles.brandPrimary}>.:Cactuar Alliance:.</span>
            <span className={styles.brandSecondary}>
              <span className="ca-tag">&lt;CA&gt;</span> FFXIV · Cactuar
            </span>
          </span>
        </NavLink>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="ca-primary-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>

        <nav
          id="ca-primary-nav"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Primary"
        >
          <ul className={styles.list}>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={close}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.linkActive : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href={MIMIC_BOX_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.cta}
                onClick={close}
              >
                Mimic Box
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
