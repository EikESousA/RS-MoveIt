import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './index.module.css';

export default function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}