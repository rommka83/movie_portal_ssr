import React, { FC, HTMLAttributes } from 'react';
import styles from './userphoto.module.css';
import classNames from 'classnames';

interface IProps {
  src?: string;
}

export const UserPhoto: FC<HTMLAttributes<HTMLDivElement> & IProps> = ({ src }) => {
  return src ? (
    <img src={src} alt="" className={classNames(styles.pic)} />
  ) : (
    <div className={classNames(styles.pic, styles.noUser, 'icon-avatar_20__0 ')}></div>
  );
};
