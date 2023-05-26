import React, { useRef } from 'react';
import styles from './trailerPlayer.module.css';
import { useAppSelector, useAppDispatch } from 'app/store/hooks';
import classNames from 'classnames';

interface IProps {
  src: string;
  func?: () => void;
}

export function TrailerPlayer({ src, func }: IProps) {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={classNames(styles.exit, 'icon-close_20__0')} onClick={func}></div>
        <iframe
          className={styles.player}
          src={src}
          width={document.documentElement.clientWidth * 0.7}
          allowFullScreen
          frameBorder='0'
        />
      </div>
    </div>
  );
}
