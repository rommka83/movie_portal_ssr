import React, { AnchorHTMLAttributes, FC } from 'react';
import styles from './back.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';

type IProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  f?: () => void;
};

export const Back: FC<IProps> = ({ className, children, f }) => {
  const router = useRouter();

  return (
    <button
      className={classNames(styles.btn, className, 'icon-arrowLeft_8x20__0')}
      onClick={() => f ?? router.back()}
    >
      <span>{children}</span>
    </button>
  );
};
