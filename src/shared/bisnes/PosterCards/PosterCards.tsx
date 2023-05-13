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
    const _num = num ? num + 1 : 1;
    return 'number' + _num;
  }, [num]);

  return top ? (
    <div className={classNames(styles.wrapper, className)}>
      <Image width={200} height={300} src={src} alt={name} className={styles.pic} />
      {number != 'number10' ? (
        <div className={styles.num}>
          <SvgIcon type={number} />
        </div>
      ) : (
        <div className={styles.num}>
          <SvgIcon type={'number1'} />
          <SvgIcon type={'number0'} />
        </div>
      )}
    </div>
  ) : (
    <div className={classNames(styles.wrapper, className)}>
      <Image width={200} height={300} src={src} alt={name} className={styles.pic} />
    </div>
  );
};
