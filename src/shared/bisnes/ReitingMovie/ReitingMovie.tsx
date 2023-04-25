import React, { FC } from 'react';
import styles from './reitingmovie.module.css';

interface IProps {
  grade: number;
}

export const ReitingMovie: FC<IProps> = ({ grade }) => {
  const [integer, decimal] = grade.toString().split('.');

  return (
    <div className={styles.root}>
      <span className={styles.left}>{integer},</span>
      <span className={styles.right}>{decimal}</span>
    </div>
  );
};
