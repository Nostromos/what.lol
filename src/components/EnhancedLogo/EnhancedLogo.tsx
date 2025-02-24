import styles from './EnhancedLogoStyles.module.css';

export default function EnhancedLogo({ source, imgAlt, logoText, url }) {

  return (
    <span className={styles.container}>
      <img src={source} alt={imgAlt} className={styles.image} />
      <a href={url} className={styles.logoText}>{logoText}</a>
    </span>
  );
}