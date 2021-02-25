import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import styles from './index.module.css';

export default function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    resetCountdown, 
    startCountdown 
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
 
  return (
    <div className={styles.container}>
      <div>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      { hasFinished ? (
        <button
          disabled
          className={styles.button}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button 
              type='button'
              onClick={resetCountdown}
              className={styles.active}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button 
              type="button" 
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}      
    </div>
  );
}