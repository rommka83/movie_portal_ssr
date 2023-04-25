import React, { HTMLAttributes } from 'react';
import styles from './postercards.module.css';
import classNames from 'classnames';

interface IProps {
  src: string;
  name: string;
}
type props = HTMLAttributes<HTMLDivElement> & IProps;

export const PosterCards = React.memo<props>(({ src, name, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <img src={src} alt={name} className={styles.pic} />
    </div>
  );
});
