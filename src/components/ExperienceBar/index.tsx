import styles from './index.module.css';

export default function ExperienceBar() {
  return (
    <header className={styles.container}>
      <span>0 xp</span>
      <div>
        <div style={{width: '50%'}} />
        <span 
        className={styles.xp}
        style={{left: '50%'}}
        >
          300 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  )
}