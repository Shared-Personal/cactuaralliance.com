import { Mascot } from '../components/mascot/Mascot';
import { MIMIC_BOX_URL } from '../data/links';
import gatheringSrc from '../assets/alliance-gathering.jpg';
import styles from './InfoPage.module.css';

interface Member {
  name: string;
  tag: string;
  role?: string;
}

const FOUNDER: Member = { name: 'Izzy Cadentia', tag: '.:C:.' };

const SABROTENDERS: ReadonlyArray<Member> = [
  {
    name: 'Kentaru Mupuru',
    tag: 'Valor',
    role: 'CEO (Cactuar Executive Officer), Records Keeper Officer',
  },
  { name: 'Amai Yasai', tag: 'ysyes', role: 'Sabro Support' },
  { name: 'Purple Popple', tag: 'SNUGL', role: 'Sabro Support' },
];

const ROSTER_UPDATED = '12/29/23';

function PersonCard({ person }: { person: Member }) {
  return (
    <li className={styles.person}>
      <p className={styles.personName}>
        {person.name} <span className="ca-tag">&lt;{person.tag}&gt;</span>
      </p>
      {person.role && <p className={styles.personRole}>{person.role}</p>}
    </li>
  );
}

export default function ContactPage() {
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
          <h1 className={styles.title}>Contact Information</h1>
          <a href={MIMIC_BOX_URL} target="_blank" rel="noreferrer" className={styles.boxButton}>
            Mimic Box 2.0
          </a>
        </header>

        <article className={styles.prose}>
          <div className={styles.roster}>
            <section>
              <h2 className={styles.roleLabel}>Founder</h2>
              <ul className={styles.people}>
                <PersonCard person={FOUNDER} />
              </ul>
            </section>

            <section>
              <h2 className={styles.roleLabel}>Sabrotenders</h2>
              <ul className={styles.people}>
                {SABROTENDERS.map((p) => (
                  <PersonCard key={p.name} person={p} />
                ))}
              </ul>
            </section>
          </div>

          <p className={styles.updated}>Updated {ROSTER_UPDATED}</p>

          <hr className={styles.divider} />

          <p>
            Sabrotenders have come and gone, and this is strictly a volunteer service for the gaming
            community of Cactuar Server for Final Fantasy XIV. These individuals are willing to
            dedicate time of themselves to help with whatever may come upon us. If you need help,
            please reach out to the Sabrotender that would best fit to help with what you are
            looking for. While treated &lsquo;colorless&rsquo; and in times of need they will do
            what they can as a whole to help and not their own FC, Faction or Guild.
          </p>

          <p className={styles.closing}>
            The Cactuar Alliance was created originally as a way for players to not feel separated
            by the existence of Free Companies, but to still know they have friends out there when
            they come to Eorzea. Regardless of the <span className="ca-tag">&lt;tag&gt;</span>{' '}
            above your head, everyone is still in the same world.
          </p>

          <a href={MIMIC_BOX_URL} target="_blank" rel="noreferrer" className={styles.mascotLink}>
            <Mascot size={180} ariaLabel="" />
            Wish to join? Have a question? Click the Sabrotender!
          </a>
        </article>
      </div>
    </>
  );
}
