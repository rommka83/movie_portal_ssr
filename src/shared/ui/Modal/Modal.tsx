import classNames from 'classnames';
import React, { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';

export const Modal: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);
  return createPortal(
    <div className={classNames(styles.backDrop, className)}>{children}</div>,
    document.body,
  );
};
