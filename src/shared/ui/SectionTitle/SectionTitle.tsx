import React, { HTMLAttributes } from 'react';
import styles from './sectiontitle.module.css';
import classNames from 'classnames';

export const SectionTitle = ({ className, children, ...props }: SectionTitleProps) => {
  return (
    <h3 {...props} className={classNames(styles.sectionTitle, className)}>
      {children}
    </h3>
  );
};

type SectionTitleProps = HTMLAttributes<HTMLHeadingElement> & {
  className?: string;
};
