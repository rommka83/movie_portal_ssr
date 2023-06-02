/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import styles from './moviescarousel.module.css';
import { Carousel } from 'shared/ui/Carousel';
import { IFilm } from 'shared/types/IFilm';
import Link from 'next/link';
import { MovieBadge } from 'entities/MovieBadge';
import useIntersectionObserver from 'shared/hooks/useIntersectionObserver';

interface IMoviesCarousel {
  title: string;
  movies: IFilm[];
  getFilms?: () => void;
  genreLink: string;
}

export const MoviesCarousel = React.memo(({ title, movies, getFilms, genreLink }: IMoviesCarousel) => {
  const contentCarouselRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(contentCarouselRef, {
    root: carouselRef.current,
    rootMargin: '0px 200% 0px -200%',
  });

  useEffect(() => {
    entry?.isIntersecting && getFilms && getFilms();
  }, [entry]);

  if (movies.length === 0) {
    return null;
  }
  return (
    <Carousel
      carouselContainerClassName={styles.carousel}
      carouselChildrenClassName={styles.movieBadgeCarouselContent}
      href={`/CatalogPage/${genreLink}`}
      title={title}
      withArrow
      withButton
      scrollMultipleItems
      ref={carouselRef}
    >
      {movies?.map((movie) => (
        <div key={movie.id} className={styles.movieBadgeContainer}>
          <Link href={`/MoviePage/${movie.id}`}>
            <MovieBadge film={movie} />
          </Link>
        </div>
      ))}
      <div className={styles.observer} ref={contentCarouselRef}>
        {!getFilms && (
          <Link className={styles.showMoreCard} href={`/CatalogPage/${genreLink}`}>
            Показать еще
          </Link>
        )}
      </div>
    </Carousel>
  );
});
