import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './index.module.css';

export default function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      <img src="https://github.com/EikEUFS.png" alt="EikEUFS" />
      <div>
        <strong> EikE SousA </strong>
        <p>
          <img src="icons/level.svg" alt="Icone de level" />
          Level {level}
          </p>
      </div>
    </div>
  );
}