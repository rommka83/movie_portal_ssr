import React, { HTMLAttributes } from 'react';
import styles from './postercards.module.css';
import classNames from 'classnames';
import Image from 'next/image';

interface IProps {
  src: string;
  name: string;
}
type props = HTMLAttributes<HTMLDivElement> & IProps;

export const PosterCards = ({ src, name, className }: props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Image width={200} height={300} src={src} alt={name} className={styles.pic} />
    </div>
  );
};
