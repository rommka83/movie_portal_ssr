import React, { useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './tip.module.css';

export type TipIconType = 'success' | 'error' | 'info';

interface ITip {
  type: TipIconType;
  title: string;
  text: string;
  id: string;
  className?: string;
  onClose: (id: string) => void;
}

const TIMEOUT_DURATION = 5000;
export const Tip = React.memo(({ type, title, text, id, onClose, className }: ITip) => {
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  let iconClass;
  switch (type) {
    case 'success':
      iconClass = 'icon-success_32__0';
      break;
    case 'error':
      iconClass = 'icon-bugReport_20__0';
      break;
    case 'info':
      iconClass = 'icon-developer_32__1 icon-developer_32__0';
  }

  const onCloseHandler = useCallback(() => {
    timeoutIdRef.current && clearTimeout(timeoutIdRef.current);
    onClose(id);
  }, [id, onClose]);

  useEffect(() => {
    timeoutIdRef.current = setTimeout(() => {
      onCloseHandler();
    }, TIMEOUT_DURATION);
    return () => {
      timeoutIdRef.current && clearTimeout(timeoutIdRef.current);
    };
  }, [timeoutIdRef, onCloseHandler]);

  return (
    <div className={classNames(styles.tip, className)}>
      <div className={styles.textContainer}>
        <p
          className={classNames(styles.title, iconClass, {
            [styles.success]: type === 'success',
            [styles.error]: type === 'error',
            [styles.info]: type === 'info',
          })}
        >
          {title}
        </p>
        <p className={styles.tipText}>{text}</p>
      </div>

      <button className={classNames(styles.closeButton, 'icon-close_20__0')} onClick={onCloseHandler} />
    </div>
  );
});
