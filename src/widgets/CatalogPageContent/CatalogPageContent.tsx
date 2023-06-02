import React, { useMemo } from 'react';
import styles from './catalogpagecontent.module.css';
import { IFilm } from 'shared/types/IFilm';
import { genresId } from 'widgets/FilterPanel/constants';
import { FilterGenreCard } from 'shared/ui/FilterGenreCard';
import { useTranslation } from 'react-i18next';
import { IPerson } from 'shared/types/IPerson';
import { PersonMiniCard } from 'shared/bisnes/PersonMiniCard';
import { Carousel } from 'shared/ui/Carousel';
import { MoviesCarousel } from 'widgets/MoviesCarousel';
import Link from 'next/link';

const catalogPageGenres = {
  firstCarousel: {
    enName: 'detectives',
    ruName: 'детектив',
  },
  secondCarousel: {
    enName: 'actions',
    ruName: 'боевик',
  },
  thirdCarousel: {
    enName: 'comedy',
    ruName: 'комедия',
  },
  fourthCarousel: {
    enName: 'drama',
    ruName: 'драма',
  },
};
interface ICatalogPageContent {
  movies: IFilm[];
  actors: IPerson[];
}
export const CatalogPageContent = ({ movies, actors }: ICatalogPageContent) => {
  const { t } = useTranslation();
  const moviesForCarousel = useMemo(
    () =>
      movies?.reduce((acc: Record<string, IFilm[]>, movie) => {
        Object.values(catalogPageGenres).forEach((value) => {
          if (movie.genres.find(({ name }) => name === value.ruName)) {
            acc[value.ruName] ? acc[value.ruName].push(movie) : (acc[value.ruName] = [movie]);
          }
        });
        return acc;
      }, {}),
    [movies],
  );

  return (
    <div className={styles.container}>
      <MoviesCarousel
        genreLink={catalogPageGenres.firstCarousel.ruName}
        title={t(`headerDropdownNavigation.${catalogPageGenres.firstCarousel.enName}`)}
        movies={moviesForCarousel[catalogPageGenres.firstCarousel.ruName]}
      />

      <Carousel
        carouselContainerClassName={styles.carousel}
        carouselChildrenClassName={styles.genreCardCarouselContent}
        title={t('CatalogPageContent.Genres')}
        withButton
        scrollMultipleItems
      >
        {genresId.map((genre) => (
          <Link
            href={`/CatalogPage/${t(`headerDropdownNavigation.${genre.name}`).toLowerCase()}`}
            key={genre.id}
          >
            <FilterGenreCard
              className={styles.innerContainerGenreCard}
              containerClassName={styles.genreCardContainer}
              caption={t(`headerDropdownNavigation.${genre.name}`)}
              genre={genre.name}
            />
          </Link>
        ))}
      </Carousel>

      <MoviesCarousel
        genreLink={catalogPageGenres.secondCarousel.ruName}
        title={t(`headerDropdownNavigation.${catalogPageGenres.secondCarousel.enName}`)}
        movies={moviesForCarousel[catalogPageGenres.secondCarousel.ruName]}
      />

      <MoviesCarousel
        genreLink={catalogPageGenres.thirdCarousel.ruName}
        title={t(`headerDropdownNavigation.${catalogPageGenres.thirdCarousel.enName}`)}
        movies={moviesForCarousel[catalogPageGenres.thirdCarousel.ruName]}
      />

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

      <MoviesCarousel
        genreLink={catalogPageGenres.fourthCarousel.ruName}
        title={t(`headerDropdownNavigation.${catalogPageGenres.fourthCarousel.enName}`)}
        movies={moviesForCarousel[catalogPageGenres.fourthCarousel.ruName]}
      />
    </div>
  );
};
