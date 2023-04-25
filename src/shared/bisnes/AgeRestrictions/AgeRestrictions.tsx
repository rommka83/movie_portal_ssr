import React, { HTMLAttributes } from 'react';
import styles from './agerestrictions.module.css';
import classNames from 'classnames';

interface IProps {
  age: number | null;
}

type props = HTMLAttributes<HTMLDivElement> & IProps;

export const AgeRestrictions = React.memo<props>(({ age, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <span className={styles.text}>{age ? age : 0} +</span>
    </div>
  );
});
