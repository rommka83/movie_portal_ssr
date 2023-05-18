import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import styles from './buttonorlink.module.css';
import classNames from 'classnames';
import Link from 'next/link';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'third';
  large?: boolean;
  transparent?: boolean;
  small?: boolean;
  round?: boolean;
  to?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

export const ButtonOrLink = React.memo<ButtonProps>(
  ({ className, variant = 'primary', round, large, transparent, small, children, to, onClick, ...props }) => {
    const classes = classNames(styles.button, className, {
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary',
      [styles.third]: variant === 'third',
      [styles.round]: round,
      [styles.large]: large,
      [styles.transparent]: transparent,
      [styles.small]: small,
      [styles.disabled]: props.disabled,
    });

    if (to != null) {
      return (
        <Link className={classes} href={to} onClick={onClick}>
          {children}
        </Link>
      );
    }
    return (
      <button {...props} className={classes} onClick={onClick}>
        {children}
      </button>
    );
  },
);
