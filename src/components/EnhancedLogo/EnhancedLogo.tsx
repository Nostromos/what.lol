import styles from './EnhancedLogoStyles.module.css';

export default function EnhancedLogo({ source, imgAlt, logoText, url }) {

  return (
    <span className={styles.container}>
      <img src={source} alt={imgAlt} className={styles.image} />
      <a href={url} target="_blank" className={styles.logoText}>{logoText}</a>
    </span>
  );
}