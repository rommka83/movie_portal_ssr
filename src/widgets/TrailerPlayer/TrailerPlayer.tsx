import React, { useRef } from 'react';
import styles from './trailerPlayer.module.css';
import { useAppSelector, useAppDispatch } from 'app/store/hooks';
import { changeTrailerPlayer } from 'app/store/trailerPlayerSlice';
import classNames from 'classnames';

export function TrailerPlayer() {
  const trailerPlayer = useAppSelector(
    (state) => state.changeTrailerPlayer.data
  );
  const dispatch = useAppDispatch();
  const video = useRef<HTMLVideoElement>(null);

  return trailerPlayer.isOpen ? (
    <div className={styles.root}>
      <div
        className={styles.wrapper}
        onClick={(ev) => {
          if (ev.target !== video.current)
            dispatch(
              changeTrailerPlayer({ isOpen: false, age: 0, trailer: '' })
            );
        }}
      >
        <div className={classNames(styles.exit, 'icon-close_20__0')}></div>
        <video
          className={styles.player}
          src={trailerPlayer.trailer}
          width={document.documentElement.clientWidth * 0.5}
          autoPlay
          controls
          ref={video}
        ></video>
      </div>
    </div>
  ) : null;
}
