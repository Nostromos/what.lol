import styles from './TagPill.module.css'

export default function TagPill({ icon, text }) {

  return (
    <div className={styles.tagPill}>
      <div className={styles.tagPillContainer}>
        <img className={styles.tagPillIcon} src={icon} />
        <p className={styles.tagPillText}>{text}</p>
      </div>
    </div>
  );
}