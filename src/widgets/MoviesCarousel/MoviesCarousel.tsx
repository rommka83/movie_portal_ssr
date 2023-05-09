import React from 'react';
import styles from './moviescarousel.module.css';
import { Carousel } from 'shared/ui/Carousel';
import { IFilm } from 'shared/types/IFilm';
import Link from 'next/link';
import { MovieBadge } from 'entities/MovieBadge';

interface IMoviesCarousel {
  title: string;
  movies: IFilm[];
}
export const MoviesCarousel = React.memo(({ title, movies }: IMoviesCarousel) => {
  return (
    <Carousel
      carouselContainerClassName={styles.carousel}
      className={styles.movieBadgeCarouselContent}
      title={title}
      withArrow
      withButton
      scrollMultipleItems
    >
      {movies?.map((movie) => (
        <div key={movie.id} className={styles.movieBadgeContainer}>
          <Link href={`/MoviePage/${movie.id}`}>
            <MovieBadge film={movie} />
          </Link>
        </div>
      ))}
    </Carousel>
  );
});
