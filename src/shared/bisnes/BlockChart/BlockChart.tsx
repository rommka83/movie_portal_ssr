import React, { FC } from 'react';
import styles from './blockchart.module.css';

interface IProps {
  width: number;
  obj: {
    await: number;
    filmCritics: number;
    imdb: number;
    russianFilmCritics: number;
  };
}

export const BlockChart: FC<IProps> = ({ obj, width }) => {
  return (
    <div className={styles.root}>
      <input
        type="range"
        className={styles.inp}
        min="0"
        max="10"
        value={obj.await}
        step="0,1"
        style={{ width: width }}
        readOnly
      />
      <input
        type="range"
        className={styles.inp}
        min="0"
        max="10"
        value={obj.filmCritics}
        step="0,1"
        style={{ width: width }}
        readOnly
      />
      <input
        type="range"
        className={styles.inp}
        min="0"
        max="10"
        value={obj.imdb}
        step="0,1"
        style={{ width: width }}
        readOnly
      />
      <input
        type="range"
        className={styles.inp}
        min="0"
        max="10"
        value={obj.russianFilmCritics}
        step="0,1"
        style={{ width: width }}
        readOnly
      />
    </div>
  );
};
