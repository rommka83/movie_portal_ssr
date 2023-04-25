import React, { HTMLAttributes } from 'react';
import styles from './cardtitle.module.css';
import classNames from 'classnames';

export const CardTitle = React.memo<CardTitleProps>(
  ({ className, children, ...props }) => {
    return (
      <h3 {...props} className={classNames(styles.cardTitle, className)}>
        {children}
      </h3>
    );
  }
);

type CardTitleProps = HTMLAttributes<HTMLHeadingElement> & {
  className?: string;
};
