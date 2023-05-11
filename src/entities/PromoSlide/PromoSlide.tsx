import React from 'react';
import { UseMedia } from 'shared/hooks/useMedia';

import styles from './promoSlide.module.css';

import ButtonOrLink from 'shared/ui/ButtonOrLink';
import { IFilm } from 'shared/types/IFilm';
import Image from 'next/image';

type PropsType = {
  movie: IFilm;
};

export const PromoSlide: React.FC<PropsType> = ({ movie }) => {
  return (
    <div className={styles.block}>
      <Image alt='' className={styles.background} src={movie.poster.url} />
      {/* <NavLink to='/watch' className={styles.body}> */}
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <h2 className={styles.logo}>{movie.name}</h2>
          {/* <img src={movie.poster.url} className={styles.logo} alt='' /> */}
        </div>
        <div className={styles.description}>{movie.shortDescription}</div>
        <div className={styles.btnContainer}>
          <ButtonOrLink className={styles.btn} variant='primary'>
            {movie.rating && movie.rating.kp > 5 ? 'Смотреть по подписке' : 'Смотреть'}
          </ButtonOrLink>
        </div>
      </div>
      {/* </NavLink> */}
    </div>
  );
};
