import classNames from 'classnames';
import React from 'react';
import styles from './trailerpicture.module.css';

export const TrailerPicture = ({ trailerID }: { trailerID?: string }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.trailerImg}
        src={`https://i.ytimg.com/vi/${trailerID}/maxresdefault.jpg`}
        alt='трейлер'
      />
      <button className={classNames(styles.trailerButton, 'icon-play_20__0')} aria-label='play' />
    </div>
  );
};
