import { Link } from 'react-router-dom';
import { FC_INDEX_URL, LINKSHELL_URL, MIMIC_BOX_URL } from '../data/links';
import gatheringSrc from '../assets/alliance-gathering.jpg';
import styles from './InfoPage.module.css';

const CA = <span className="ca-tag">&lt;CA&gt;</span>;

export default function AboutPage() {
  return (
    <>
      <figure className={styles.photo}>
        <img
          className={styles.photoImg}
          src={gatheringSrc}
          width={1920}
          height={1080}
          alt="Dozens of Cactuar Alliance members from many Free Companies gathered on a staircase for a group photo"
        />
      </figure>

      <div className="ca-container">
        <header className={styles.head}>
          <p className={styles.eyebrow}>About the &lt; CA &gt;</p>
          <h1 className={styles.title}>What is the Cactuar Alliance?</h1>
          <a href={MIMIC_BOX_URL} target="_blank" rel="noreferrer" className={styles.boxButton}>
            Mimic Box 2.0
          </a>
        </header>

        <article className={styles.prose}>
          <p className={styles.lede}>
            The <strong>Cactuar Alliance</strong> is a collective of{' '}
            <strong>Final Fantasy XIV&apos;s Cactuar Server Free Companies</strong> that have
            banded together on a social &amp; positive platform to aid each other when in need
            in-game and to share helpful information while retaining your own Free Companies image
            and ideals.
          </p>
          <p>
            Abbreviated as {CA} to pun the FC Tag system, the Cactuar Alliance serves as strong
            information network of players in all walks of trade to help each other in whatever it
            is you may need! We add the {CA} to our Company Profile Slogans to help show each other
            that we have some line of camaraderie, a way to show our connection in this diverse
            gaming community of different Free Companies!
          </p>

          <hr className={styles.divider} />

          <section className={styles.section}>
            <h2>I&apos;m not a Leader or Co-leader though, can I join?</h2>
            <p>
              Right now the {CA} is aimed toward Free Companies based in Cactuar Server. Players
              that are members in FCs, Returners, New Sprouts or anything else are welcome to use
              the <a href={FC_INDEX_URL} target="_blank" rel="noreferrer">FC Index</a> to help
              find a fitting home based on the words of the Leaders and Founders of Free Companies
              in our server! You can contact any of the{' '}
              <Link to="/contact">Sabrotenders</Link> in-game or use the ticket system the same!
            </p>
          </section>

          <section className={styles.section}>
            <h2>What Duties do we typically help with?</h2>
            <p>
              Everything! No really, there isn&apos;t really anything any member wouldn&apos;t help
              with! From the various Duties in game including Dungeons, Raids, Company Workshops,
              Diadem, Palace of the Dead, Raid Content and more, there has been help with all of
              these all across the server. Whether its posted in our main Discord of {CA} or a
              simple shout-out in our Linkshell. Everyone here regardless of their FC is willing to
              help (if they can) with something.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Who Can Join?</h2>
            <p>
              Everyone! We encourage everyone on the Cactuar Server to join. While the Linkshell may
              not be that large, this is why we have always had our Discord Server and had a
              revolving door rule to joining to help. Regardless of the Size, Age, Type or meaning
              of your Free Company, as long as you show others with respect and do keep the drama
              out of this most helpful system growing here, we welcome you to come join! Newer Free
              Companies that have started or newer leaders may not have all the knowledge and
              know-how the long-running or ancient Free Companies have. Its here that this can
              benefit to learn from each other and still retain your ideals and image of your own
              FC.
            </p>
          </section>

          <section className={styles.section}>
            <h2>How Can I Sign Up?</h2>
            <p>
              Check out the <Link to="/contact">Contact</Link> page to seek out one of our
              Sabrotenders for help! If you&apos;re offline or wish not for an in-game face to face,
              our{' '}
              <a href={MIMIC_BOX_URL} target="_blank" rel="noreferrer">
                Mimic Box
              </a>{' '}
              is here. This is used for Questions, Concerns, Comments and even inquiries of joining
              the {CA} with your Free Company as well.
            </p>
          </section>

          <section className={styles.section}>
            <h2>What is a Sabrotender?</h2>
            <p>
              A Sabrotender is no mis-type, or perhaps&hellip;it was? Basically the Sabrotenders
              are chosen CA Members who volunteer to help keep the Cactuar Alliance alive from its
              original inception back in May of 2016. These members have come and gone and helped
              greatly into what the Alliance is today keeping its form and shape alive. Their duties
              range from assistants, to bouncers to Cactuars of the Peace and reside in the
              Linkshell, the Discord and are prominent all over representing the Free Companies of
              Cactuar. If you are interested in Volunteering as a Sabrotender, regardless if your FC
              is participating with the Alliance or not, please message us in-game on the{' '}
              <Link to="/contact">Contact</Link> page or simply use the Mimic Box above!
              Sabrotenders represent the server and their own Free Company, they are very neutral!
              and willing to help if they can!
            </p>
          </section>

          <hr className={styles.divider} />

          <section className={styles.section}>
            <h2>[ Discord ]</h2>
            <p>
              This is our main source of communication and information. Since players are
              cross-platform this is our best way to give out alerts, information, help you and to
              stay connected in and out of game faster than Social Media can blink. We ask the
              Leader and up to 4 Co-Leads/Officers of your Free Company may take place in here, and
              you may swap out these members at any time. When you join, please be sure you rename
              your nickname to your In-Game Name and FC Tag.
            </p>
            <p>
              <span className={styles.example}>for example: Yoshi P &lt;FFXIV&gt;</span>
            </p>
            <p>
              Interested in joining? Leave a message through the Mimic Box and we&apos;ll send you
              the invite! Your message is only sent to our volunteers, the Sabrotenders.
            </p>
          </section>

          <section className={styles.section}>
            <h2>[ Linkshell ]</h2>
            <p>
              Within the Cactuar Server we have a Linkshell set up for {CA} members. Since the
              limitation is 128 players, the Linkshell supports 2 Members from each Free Company. We
              highly encourage your most active and most vocal members to be within the Linkshell,
              so they can echo messages back to your own Free Company when others are in need for
              various Duties or Workshops or even just questions! Free Companies with Sabrotenders
              will not count against their 2. This Linkshell is 18+.
            </p>
          </section>

          <div className={styles.inlineLinks}>
            <a href={MIMIC_BOX_URL} target="_blank" rel="noreferrer" className={styles.ghostButton}>
              Mimic Box ↗
            </a>
            <a href={FC_INDEX_URL} target="_blank" rel="noreferrer" className={styles.ghostButton}>
              ★ Cactuar FC Index ↗
            </a>
            <a href={LINKSHELL_URL} target="_blank" rel="noreferrer" className={styles.ghostButton}>
              Linkshell Members ↗
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
