import React, { AnchorHTMLAttributes } from 'react';
import styles from './link.module.css';
import classNames from 'classnames';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export const Link = React.memo<LinkProps>(({ className, to, children, ...props }) => {
  return (
    <NextLink {...props} className={classNames(styles.link, className)} href={to}>
      {children}
    </NextLink>
  );
});

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<NextLinkProps, 'href'> & {
    to: string;
  };
