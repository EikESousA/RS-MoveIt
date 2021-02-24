import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './index.module.css';

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      { activeChallenge ? (
        <div className={styles.active}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Icone do desafio" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.failed}
              onClick={resetChallenge}
            >
              Falhei
              </button>
            <button
              type="button"
              className={styles.succeeded} 
            >
              Completei
              </button>
          </footer>
        </div>
      ) : (
        <div className={styles.notActive}>
          <strong> 
            Finalize um ciclo para receber um desafio
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Icone Level UP" />
            Avançe de level completando desafios
          </p>
        </div>
      ) }      
    </div>
  );
}