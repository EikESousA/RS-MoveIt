import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './index.module.css';

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round((currentExperience * 100)/experienceToNextLevel);

  return (
    <header className={styles.container}>
      <span>0 xp</span>
      <div>
        <div style={{width: `${percentToNextLevel}%`}} />
        <span 
        className={styles.xp}
        style={{left: `${percentToNextLevel}%`}}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}