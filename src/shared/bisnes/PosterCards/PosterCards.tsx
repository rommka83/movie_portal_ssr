import React, { HTMLAttributes, useMemo } from 'react';
import styles from './postercards.module.css';
import classNames from 'classnames';
import { SvgIcon } from 'shared/ui/SvgIcon';
import Image from 'next/image';

interface IProps {
  src?: string;
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
      {src && <Image width={200} height={300} src={src} alt={name} className={styles.pic} />}
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
      {src && <Image src={src} width={200} height={300} alt={name} className={styles.pic} />}
    </div>
  );
};
