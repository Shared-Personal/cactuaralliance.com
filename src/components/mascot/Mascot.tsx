import type { CSSProperties } from 'react';
import mascotSrc from '../../assets/mascot.png';
import mascotSmallSrc from '../../assets/mascot-sm.png';
import styles from './Mascot.module.css';

export type MascotPose = 'wave' | 'sign' | 'think';

interface MascotProps {
  /** `sign` shows a speech plate under the mascot, `think` adds a "?" bubble. */
  pose?: MascotPose;
  signText?: string;
  size?: number | string;
  animated?: boolean;
  /** Pass "" to mark the mascot as decorative. */
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * The Cactuar Alliance mascot: a caped Cactuar wearing the <CA> crest.
 * Rendered from the official artwork; the poses add small overlays so the
 * existing call sites (404, empty states, heroes) still read differently.
 */
export function Mascot({
  pose = 'wave',
  signText = 'Welcome!',
  size = 220,
  animated = true,
  ariaLabel,
  className,
  style,
}: MascotProps) {
  const label = ariaLabel ?? defaultLabel(pose);
  const width = typeof size === 'number' ? `${size}px` : size;
  const small = typeof size === 'number' && size <= 96;

  const classes = [styles.mascot, animated ? styles.animated : null, className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} style={{ width, ...style }}>
      <img
        className={styles.art}
        src={small ? mascotSmallSrc : mascotSrc}
        alt={label}
        draggable={false}
        decoding="async"
      />
      {pose === 'think' && (
        <span className={styles.thought} aria-hidden="true">
          ?
        </span>
      )}
      {pose === 'sign' && (
        <span className={styles.sign} aria-hidden="true">
          {signText}
        </span>
      )}
    </span>
  );
}

function defaultLabel(pose: MascotPose): string {
  switch (pose) {
    case 'wave':
      return 'The Cactuar Alliance mascot, a caped Cactuar wearing the CA crest';
    case 'sign':
      return 'The Cactuar Alliance mascot holding up a sign';
    case 'think':
      return 'The Cactuar Alliance mascot thinking';
  }
}
