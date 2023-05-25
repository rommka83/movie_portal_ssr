import React from 'react';
import styles from './catalogpagecontent.module.css';
import { IFilm } from 'shared/types/IFilm';
import { genres } from 'widgets/FilterPanel/constants';
import { FilterGenreCard } from 'shared/ui/FilterGenreCard';
import { useTranslation } from 'react-i18next';
import { IPerson } from 'shared/types/IPerson';
import { PersonMiniCard } from 'shared/bisnes/PersonMiniCard';
import { Carousel } from 'shared/ui/Carousel';
import { MoviesCarousel } from 'widgets/MoviesCarousel';

interface ICatalogPageContent {
  movies: IFilm[];
  actors: IPerson[];
}
export const CatalogPageContent = ({ movies, actors }: ICatalogPageContent) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <MoviesCarousel title={t('CatalogPageContent.MoviePremieres')} movies={movies} />

      <Carousel
        carouselContainerClassName={styles.carousel}
        carouselChildrenClassName={styles.genreCardCarouselContent}
        title={t('CatalogPageContent.Genres')}
        withButton
        scrollMultipleItems
      >
        {genres.map((genre) => (
          // TODO: Обернуть FilterGenreCard Ведет на страницу с включенным фильтром
          // <Link href={}></Link>
          <FilterGenreCard
            key={genre}
            className={styles.innerContainerGenreCard}
            containerClassName={styles.genreCardContainer}
            caption={t(`headerDropdownNavigation.${genre}`)}
            genre={genre}
          />
        ))}
      </Carousel>

      <MoviesCarousel title={t('CatalogPageContent.MoviePremieres')} movies={movies} />

      <MoviesCarousel title={t('CatalogPageContent.MoviePremieres')} movies={movies} />

      <Carousel
        carouselContainerClassName={styles.carousel}
        carouselChildrenClassName={styles.personCardCarouselContent}
        title={t('CatalogPageContent.Persons')}
        withButton
        scrollMultipleItems
      >
        {actors?.map((actor) => (
          <div key={actor.id} className={styles.personCardContainer}>
            <PersonMiniCard person={actor} />
          </div>
        ))}
      </Carousel>

      <MoviesCarousel title={t('CatalogPageContent.MoviePremieres')} movies={movies} />
    </div>
  );
};
