import { Link } from 'react-router-dom';
import { Mascot } from '../mascot/Mascot';
import {
  FC_INDEX_URL,
  FC_STANDINGS_URL,
  LINKSHELL_URL,
  MIMIC_BOX_URL,
  MOONLIGHTERS_GUILD_URL,
} from '../../data/links';
import styles from './Footer.module.css';

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} ca-container`}>
        <div className={styles.colBrand}>
          <Mascot size={72} animated={false} ariaLabel="" />
          <p className={styles.tagline}>
            Regardless of the <span className="ca-tag">&lt;tag&gt;</span> above your head,
            everyone is still in the same world.
          </p>
          <p className={styles.note}>
            A player-run collective of Cactuar Server Free Companies, since May 2016.
            <br />
            FINAL FANTASY XIV © SQUARE ENIX CO., LTD.
          </p>
        </div>

        <div className={styles.colLinks}>
          <h2 className={styles.colHeading}>About the &lt;CA&gt;</h2>
          <ul>
            <li>
              <Link to="/about">What is the Cactuar Alliance?</Link>
            </li>
            <li>
              <Link to="/contact">Contact Information</Link>
            </li>
            <li>
              <Link to="/find-your-fc">Find your FC</Link>
            </li>
            <li>
              <Link to="/fcs">FC Directory</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </div>

        <div className={styles.colLinks}>
          <h2 className={styles.colHeading}>Cactuar FC Links</h2>
          <ul>
            <li>
              <a href={MIMIC_BOX_URL} target="_blank" rel="noreferrer">
                Mimic Box 2.0 ↗
              </a>
            </li>
            <li>
              <a href={FC_INDEX_URL} target="_blank" rel="noreferrer">
                ★ Cactuar FC Index ↗
              </a>
            </li>
            <li>
              <a href={LINKSHELL_URL} target="_blank" rel="noreferrer">
                Linkshell Members ↗
              </a>
            </li>
            <li>
              <a href={FC_STANDINGS_URL} target="_blank" rel="noreferrer">
                FC Standings ↗
              </a>
            </li>
            <li>
              <a href={MOONLIGHTERS_GUILD_URL} target="_blank" rel="noreferrer">
                .:C:. The Moonlighters Guild ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.bottom} ca-container`}>
        <p>© {YEAR} .:Cactuar Alliance:.</p>
      </div>
    </footer>
  );
}
