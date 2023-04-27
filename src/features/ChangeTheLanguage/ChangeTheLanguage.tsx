import React, { useEffect, useState } from 'react';
import styles from './changethelanguage.module.css';
import { useTranslation } from 'react-i18next';

export function ChangeTheLanguage() {
  const [active, setActive] = useState('');
  const { i18n } = useTranslation();
  const lng = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    lng === 'ru' ? setActive('ru') : setActive('en');
  }, [lng]);

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.btn} ${active === 'ru' && styles.active}`}
        onClick={() => {
          changeLanguage('ru');
          setActive('ru');
        }}
      >
        ru
      </button>
      <button
        className={`${styles.btn} ${active === 'en' && styles.active}`}
        onClick={() => {
          changeLanguage('en');
          setActive('en');
        }}
      >
        en
      </button>
    </div>
  );
}
