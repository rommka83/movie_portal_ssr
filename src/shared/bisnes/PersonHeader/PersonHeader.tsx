import React from 'react';
import styles from './personHeader.module.css';
import Image from 'next/image';

type PropsType = {
  photo: string | null;
  name: string | null;
  enName: string | null;
};

export const PersonHeader: React.FC<PropsType> = ({ photo, name, enName }) => {
  return (
    <div className={styles.personHeader}>
      <div className={styles.figure}>
        {photo && <Image width={50} height={50} src={photo} className={styles.photo} alt='' />}
      </div>
      <div className={styles.info}>
        {name && <h2 className={styles.name}>{name}</h2>}
        {enName && <span className={styles.alternate}>{enName}</span>}
      </div>
    </div>
  );
};
