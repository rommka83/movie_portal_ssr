import React from 'react';
import styles from './personHeader.module.css';

type PropsType = {
  photo: string;
  name: string;
  enName: string;
};

export const PersonHeader: React.FC<PropsType> = ({ photo, name, enName }) => {
  return (
    <div className={styles.personHeader}>
      <div className={styles.figure}>
        <img src={photo} className={styles.photo} alt="" />
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <span className={styles.alternate}>{enName}</span>
      </div>
    </div>
  );
};
