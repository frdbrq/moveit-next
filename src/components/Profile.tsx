import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/frdbrq.png" alt="Fred Buarque" />
      <div>
        <strong>Fred Buarque</strong>
        <div className={styles.level}>
          <p className={styles.image}>
            <img src="icons/Up.svg" alt="Level" />
          </p>
          <p>
            Level {level}
          </p>
        </div>

      </div>
    </div>
  );
}