import React, { FC, HTMLAttributes } from 'react';
import styles from './contenttext.module.css';
import classNames from 'classnames';

export const ContentText: FC<HTMLAttributes<HTMLParagraphElement>> = ({ className, children }) => {
  return <p className={classNames(styles.text, className)}>{children}</p>;
};
