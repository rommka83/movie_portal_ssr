import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './reitingmovie.module.css';
import classNames from 'classnames';

interface IProps {
  grade: number;
}

export const ReitingMovie: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement> & IProps>> = ({
  grade,
  className,
}) => {
  const [integer, decimal] = grade.toString().split('.');

  return (
    <div className={classNames(styles.root, className)}>
      <span className={styles.left}>{integer},</span>
      <span className={styles.right}>{decimal}</span>
    </div>
  );
};
