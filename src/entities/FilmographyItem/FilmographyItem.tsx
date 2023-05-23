import React from 'react';
import styles from './filmographyItem.module.css';
import ButtonOrLink from 'shared/ui/ButtonOrLink';
import { IActorFilms } from 'shared/types/IActorFilms';
import Link from 'next/link';

type PropsType = {
  movie: IActorFilms;
};

export const FilmographyItem: React.FC<PropsType> = ({ movie }) => {
  return (
    <div className={styles.container}>
      <Link href={`/MoviePage/${movie.id}`} className={styles.filmographyItem} />
      <div className={styles.filmographyPhoto}>
        <div className={styles.filmographyImg}></div>
      </div>

      <div className={styles.filmographyBody}>
        <div className={styles.filmographyInfo}>
          <div className={styles.filmographyTitle}>{movie.name}</div>
          {movie.rating && (
            <div className={styles.filmographyRating}>
              Рейтинг Иви:
              <span className={styles.filmographyRatingSpan}>{movie.rating}</span>
            </div>
          )}
        </div>
        <ButtonOrLink to={`/MoviePage/${movie.id}`} className={styles.btn} variant={'secondary'}>
          Смотреть
        </ButtonOrLink>
      </div>
    </div>
  );
};
