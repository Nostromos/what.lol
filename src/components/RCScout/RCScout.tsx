import { useEffect } from "react";
import styles from './RCScout.module.css';

export default function RCScout() {
  useEffect(() => {
    // Avoid injecting the loader twice
    if (document.getElementById('recurse-scout-loader')) return;

    const script = document.createElement('script');
    script.id = 'recurse-scout-loader';
    script.src =
      'https://www.recurse-scout.com/loader.js?t=c205b1900901fd3c5d2f15b8fda80527';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  // Leave an empty container for the widget to hydrate
  return <div className={`rc-scout ${styles.rcScoutContainer}`} />;
}