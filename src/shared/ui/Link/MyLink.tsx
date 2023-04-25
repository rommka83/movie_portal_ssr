import React, { AnchorHTMLAttributes } from 'react';
import styles from './link.module.css';
import classNames from 'classnames';
import Link from 'next/link';

// eslint-disable-next-line react/display-name
export const MyLink = React.memo<LinkProps>(
  ({ className, to, children, ...props }) => {
    return (
      <Link {...props} className={classNames(styles.link, className)} href={to}>
        {children}
      </Link>
    );
  }
);

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
};
