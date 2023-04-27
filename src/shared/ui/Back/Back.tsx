import React, { AnchorHTMLAttributes, FC } from 'react';
import styles from './back.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

type IProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  f?: () => void;
};

export const Back: FC<IProps> = ({ className, children, f, ...props }) => {
  const router = useRouter();

  return (
    <button
      className={classNames(styles.btn, className, 'icon-arrowLeft_8x20__0')}
      onClick={() => router.back()}
    >
      <span>{children}</span>
    </button>
  );
};
