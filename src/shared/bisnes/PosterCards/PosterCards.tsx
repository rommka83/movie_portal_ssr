import React, { HTMLAttributes, useMemo } from 'react';
import styles from './postercards.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import { SvgIcon } from 'shared/ui/SvgIcon';

interface IProps {
  src: string;
  name: string;
  top?: boolean;
  num?: number;
}
type props = HTMLAttributes<HTMLDivElement> & IProps;

export const PosterCards = ({ src, name, className, top, num }: props) => {
  const number = useMemo(() => {
    switch (num) {
      case 0:
        return 1;
      case 1:
        return 2;
      case 2:
        return 3;
      case 3:
        return 4;
      case 4:
        return 5;
      case 5:
        return 6;
      case 6:
        return 7;
      case 7:
        return 8;
      case 8:
        return 9;
      case 9:
        return 10;
      default:
        return 0;
    }
  }, [num]);

  return top ? (
    <div className={classNames(styles.wrapper, className)}>
      <Image width={200} height={300} src={src} alt={name} className={styles.pic} />
      {number != 10 ? (
        <div className={styles.num}>
          <SvgIcon type={number} />
        </div>
      ) : (
        <div className={styles.num}>
          <SvgIcon type={1} />
          <SvgIcon type={0} />
        </div>
      )}
    </div>
  ) : (
    <div className={classNames(styles.wrapper, className)}>
      <Image width={200} height={300} src={src} alt={name} className={styles.pic} />
    </div>
  );
};
