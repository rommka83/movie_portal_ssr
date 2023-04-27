import React, { AnchorHTMLAttributes, FC } from 'react';
import styles from './back.module.css';
import classNames from 'classnames';

type IProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  f?: () => void;
};

export const Back: FC<IProps> = ({ className, children, f, ...props }) => {
  return (
    <button className={classNames(styles.btn, className, 'icon-arrowLeft_8x20__0')} onClick={f}>
      <span>{children}</span>
    </button>
  );
};
