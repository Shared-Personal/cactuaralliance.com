import { Link } from 'react-router-dom';
import { Mascot } from '../mascot/Mascot';
import { MIMIC_BOX_URL } from '../../data/links';
import gatheringSrc from '../../assets/alliance-gathering.jpg';
import styles from './HomeIntro.module.css';

export function HomeIntro() {
  return (
    <section className={styles.hero}>
      <div className={styles.banner}>
        <img
          className={styles.bannerImg}
          src={gatheringSrc}
          alt="Dozens of Cactuar Alliance members from many Free Companies gathered on a staircase for a group photo"
        />
        <div className={styles.bannerShade} aria-hidden="true" />

        <div className={`${styles.bannerInner} ca-container`}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Final Fantasy XIV · Cactuar Server · Since 2016</p>
            <h1 className={styles.title}>
              <span className={styles.titleSmall}>.: The :.</span>
              Cactuar Alliance
            </h1>
            <p className={styles.quote}>
              Regardless of the <span className="ca-tag">&lt;tag&gt;</span> above your head,
              everyone is still in the same world.
            </p>
          </div>

          <div className={styles.mascotWrap}>
            <Mascot size="100%" ariaLabel="" />
          </div>
        </div>
      </div>

      <div className={`${styles.intro} ca-container`}>
        <a href={MIMIC_BOX_URL} target="_blank" rel="noreferrer" className={styles.boxButton}>
          Mimic Box 2.0
        </a>

        <p className={styles.lede}>
          The <strong>Cactuar Alliance</strong> is a collective of{' '}
          <strong>Final Fantasy XIV&apos;s Cactuar Server Free Companies</strong> that have banded
          together on a social &amp; positive platform to aid each other when in need in-game and to
          share helpful information while retaining your own Free Companies image and ideals.
        </p>

        <p className={styles.body}>
          Abbreviated as <span className="ca-tag">&lt;CA&gt;</span> to pun the FC Tag system, the
          Cactuar Alliance serves as strong information network of players in all walks of trade to
          help each other in whatever it is you may need!
        </p>

        <div className={styles.ctaRow}>
          <Link to="/about" className={styles.primary}>
            What is the &lt;CA&gt;?
          </Link>
          <Link to="/find-your-fc" className={styles.secondary}>
            Find your FC
          </Link>
          <Link to="/contact" className={styles.secondary}>
            Meet the Sabrotenders
          </Link>
        </div>
      </div>
    </section>
  );
}
