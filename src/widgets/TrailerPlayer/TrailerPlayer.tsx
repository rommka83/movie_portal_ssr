import React, { useRef } from 'react';
import styles from './trailerPlayer.module.css';
import { useAppSelector, useAppDispatch } from 'app/store/hooks';
import classNames from 'classnames';

interface IProps {
  src: string;
  func?: () => void;
}

export function TrailerPlayer({ src, func }: IProps) {
  const video = useRef<HTMLVideoElement>(null);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper} onClick={(ev) => {}}>
        <div className={classNames(styles.exit, 'icon-close_20__0')} onClick={func}></div>
        <video
          className={styles.player}
          src={src}
          width={document.documentElement.clientWidth * 0.7}
          autoPlay
          controls
          ref={video}
        ></video>
      </div>
    </div>
  );
}
