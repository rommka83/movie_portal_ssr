import React, { FC, HTMLAttributes } from 'react';
import styles from './loader.module.css';
import classNames from 'classnames';

export const Loader: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={classNames(styles.ldsSpinner, className)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
