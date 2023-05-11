import React, { FC, HTMLAttributes } from 'react';
import styles from './userphoto.module.css';
import classNames from 'classnames';
import Image from 'next/image';

interface IProps {
  src?: string;
}

export const UserPhoto: FC<HTMLAttributes<HTMLDivElement> & IProps> = ({ src }) => {
  return src ? (
    <Image width={50} height={50} src={src} alt='' className={classNames(styles.pic)} />
  ) : (
    <div className={classNames(styles.pic, styles.noUser, 'icon-avatar_20__0 ')}></div>
  );
};
