import React, { useEffect, useRef, useState } from 'react';
import styles from './trailerPlayer.module.css';
import classNames from 'classnames';
import { getTrailerId } from 'shared/utils/getTrailerId';
import { TrailerPicture } from 'shared/ui/TrailerPicture';

interface ITrailerPlayer {
  src: string;
  onClose?: () => void;
  modal?: boolean;
  className?: string;
}

export function TrailerPlayer({ src, onClose, modal, className }: ITrailerPlayer) {
  const trailerID = getTrailerId(src);
  const [showTrailer, setShowTrailer] = useState(false);
  const prevSrcRef = useRef<string | null>(null);
  const onShowTrailer = () => {
    setShowTrailer(true);
  };

  useEffect(() => {
    const current = prevSrcRef.current;
    if (!current) {
      prevSrcRef.current = src;
    } else {
      if (current !== src) {
        setShowTrailer(false);
        prevSrcRef.current = src;
      }
    }
  }, [prevSrcRef, src]);

  return (
    <div className={className}>
      <div className={styles.wrapper}>
        {modal && <div className={classNames(styles.exit, 'icon-close_20__0')} onClick={onClose} />}
        <div className={styles.video} onClick={onShowTrailer}>
          {!showTrailer ? (
            <TrailerPicture trailerID={trailerID} />
          ) : (
            <iframe
              allow='autoplay'
              className={styles.player}
              src={src + '?rel=0&showinfo=0&autoplay=1'}
              width={document.documentElement.clientWidth * 0.7}
              allowFullScreen
              frameBorder='0'
            />
          )}
        </div>
      </div>
    </div>
  );
}
