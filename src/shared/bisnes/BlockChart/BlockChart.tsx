import React, { FC, useState } from 'react';
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
        type='range'
        className={styles.inp}
        min='0'
        max='10'
        value={obj.await ?? 0}
        step='0,1'
        style={{ width: width }}
        readOnly
      />
      <input
        type='range'
        className={styles.inp}
        min='0'
        max='10'
        value={obj.filmCritics ?? 0}
        step='0,1'
        style={{ width: width }}
        readOnly
      />
      <input
        type='range'
        className={styles.inp}
        min='0'
        max='10'
        value={obj.imdb ?? 0}
        step='0,1'
        style={{ width: width }}
        readOnly
      />
      <input
        type='range'
        className={styles.inp}
        min='0'
        max='10'
        value={obj.russianFilmCritics ?? 0}
        step='0,1'
        style={{ width: width }}
        readOnly
      />
    </div>
  );
};
