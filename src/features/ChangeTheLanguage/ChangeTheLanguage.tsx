import React, { useEffect, useState } from 'react';
import styles from './changethelanguage.module.css';
import { useTranslation } from 'react-i18next';

export function ChangeTheLanguage() {
  const [english, setEnglish] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    english ? i18n.changeLanguage('en') : i18n.changeLanguage('ru');
  }, [english, i18n]);

  return (
    <div className={styles.wrapper} onClick={() => setEnglish(!english)}>
      <button className={`${styles.btn} ${!english ? styles.active : styles.passive}`}>ru</button>
      <button className={`${styles.btn} ${english ? styles.active : styles.passive}`}>en</button>
    </div>
  );
}
