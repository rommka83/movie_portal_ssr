import React from 'react';
import styles from './grading.module.css';
import { t } from 'i18next';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface IProps {
  grading: number;
}

type props = HTMLAttributes<HTMLDivElement> & IProps;

export function Grading({ grading, className }: props) {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.ratings}>{grading}</div>
      <div className={styles.categoryList}>
        <p className={styles.categoryItem}>{t('Grading.Portal rating')}</p>
      </div>
      <button className={styles.btn}>{t('Grading.estimate')}</button>
    </div>
  );
}
