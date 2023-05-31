/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import styles from './moviescarousel.module.css';
import { Carousel } from 'shared/ui/Carousel';
import { IFilm } from 'shared/types/IFilm';
import Link from 'next/link';
import { MovieBadge } from 'entities/MovieBadge';
import { nanoid } from '@reduxjs/toolkit';

interface IMoviesCarousel {
  title: string;
  movies: IFilm[];
  getFilms?: () => void;
}
export const MoviesCarousel = React.memo(({ title, movies, getFilms }: IMoviesCarousel) => {
  const contentCaruselRef = useRef<HTMLDivElement>(null);
  const caruselRef = useRef<HTMLDivElement>(null);
  const [fetch, setFetch] = useState(false);

  const handleScroll = function () {
    const caruselWidth = caruselRef.current?.getBoundingClientRect().width;
    const observerWidth = contentCaruselRef.current?.getBoundingClientRect().width;
    const observerX = contentCaruselRef.current?.getBoundingClientRect().x;

    if (!caruselWidth || !observerWidth || !observerX) return;
    if (caruselWidth + observerWidth > observerX) {
      setFetch(true);
      setTimeout(() => {
        setFetch(false);
      }, 4000);
    }
  };

  useEffect(() => {
    fetch && getFilms && getFilms();
  }, [fetch]);

  if (movies.length === 0) {
    return null;
  }
  return (
    <Carousel
      carouselContainerClassName={styles.carousel}
      carouselChildrenClassName={styles.movieBadgeCarouselContent}
      title={title}
      withArrow
      withButton
      scrollMultipleItems
      scrollObserver={handleScroll}
      reff={caruselRef}
    >
      {movies?.map((movie) => (
        <div key={movie.id} className={styles.movieBadgeContainer}>
          <Link href={`/MoviePage/${movie.id}`}>
            <MovieBadge film={movie} />
          </Link>
        </div>
      ))}
      <div key={nanoid()} className={styles.observer} ref={contentCaruselRef}></div>
    </Carousel>
  );
});
