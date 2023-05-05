import React from 'react';
import styles from './catalogpagecontent.module.css';
import { MovieBadge } from 'entities/MovieBadge';
import { IFilm } from 'shared/types/IFilm';
import { genres } from 'widgets/FilterPanel/constants';
import { FilterGenreCard } from 'shared/ui/FilterGenreCard';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { IPerson } from 'shared/types/IPerson';
import { PersonMiniCard } from 'shared/bisnes/PersonMiniCard';
import { Carousel } from 'shared/ui/Carousel';

interface ICatalogPageContent {
  movies: IFilm[];
  actors: IPerson[];
}
export const CatalogPageContent = ({ movies, actors }: ICatalogPageContent) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Carousel
        carouselContainerClassName={styles.carousel}
        title="Премьеры фильмов"
        iconStyle="icon-arrowRight_6x16__0"
        withButton
        scrollMultipleItems
      >
        {movies?.map((movie) => (
          <div className={styles.movieBadgeContainer}>
            <Link href={`/MoviePage/${movie.id}`}>
              <MovieBadge film={movie} />
            </Link>
          </div>
        ))}
      </Carousel>

      <Carousel
        carouselContainerClassName={styles.carousel}
        title="Жанры"
        withButton
        scrollMultipleItems
      >
        {genres.map((genre) => (
          // TODO: Обернуть FilterGenreCard Ведет на страницу с включенным фильтром
          // <Link href={}></Link>
          <FilterGenreCard
            className={styles.innerContainerGenreCard}
            containerClassName={styles.genreCardContainer}
            caption={t(`headerMoviesFilter.${genre}`)}
            genre={genre}
          />
        ))}
      </Carousel>

      <Carousel
        carouselContainerClassName={styles.carousel}
        title="Премьеры фильмов"
        iconStyle="icon-arrowRight_6x16__0"
        withButton
        scrollMultipleItems
      >
        {movies?.map((movie) => (
          <div className={styles.movieBadgeContainer}>
            <Link href={`/MoviePage/${movie.id}`}>
              <MovieBadge film={movie} />
            </Link>
          </div>
        ))}
      </Carousel>

      <Carousel
        carouselContainerClassName={styles.carousel}
        title="Премьеры фильмов"
        iconStyle="icon-arrowRight_6x16__0"
        withButton
        scrollMultipleItems
      >
        {movies?.map((movie) => (
          <div className={styles.movieBadgeContainer}>
            <Link href={`/MoviePage/${movie.id}`}>
              <MovieBadge film={movie} />
            </Link>
          </div>
        ))}
      </Carousel>
      <Carousel
        carouselContainerClassName={styles.carousel}
        title="Персоны"
        withButton
        scrollMultipleItems
      >
        {actors?.map((actor) => (
          <div className={styles.personCardContainer}>
            <PersonMiniCard person={actor} />
          </div>
        ))}
      </Carousel>

      <Carousel
        carouselContainerClassName={styles.carousel}
        title="Премьеры фильмов"
        iconStyle="icon-arrowRight_6x16__0"
        withButton
        scrollMultipleItems
      >
        {movies?.map((movie) => (
          <div className={styles.movieBadgeContainer}>
            <Link href={`/MoviePage/${movie.id}`}>
              <MovieBadge film={movie} />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
