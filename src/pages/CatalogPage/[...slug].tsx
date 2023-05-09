import React from 'react';
import styles from './catalogpage.module.css';
import { CatalogPageHeader } from 'widgets/CatalogPageHeader';
import { useTranslation } from 'i18n';
import classNames from 'classnames';
import { Accordion } from 'shared/ui/Accordion';
import { SortDropdown } from 'features/SortDropdown';
import { FilterPanelDesktop } from 'widgets/FilterPanel';
import axios from 'axios';
import { IFilm } from 'shared/types/IFilm';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { MovieBadge } from 'entities/MovieBadge';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';

export const getServerSideProps: GetServerSideProps<{ movies: IFilm[] }> = async (context) => {
  const genre = context.params?.slug?.[0];
  const responseMovies = await axios.get(
    `https://api.kinopoisk.dev/v1.3/movie?&page=1&genres.name=${genre}&limit=30`,
    {
      headers: {
        Accept: 'application/json',
        'X-API-KEY': 'PZQK66P-MP6MTV9-MMNQB95-S4P3NH9',
      },
    },
  );
  if (!responseMovies) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movies: responseMovies.data.docs },
  };
};
interface IGenrePage {
  movies: IFilm[];
}

const GenrePage = ({ movies }: IGenrePage) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <CatalogPageHeader titleText={t(`CatalogPageHeader.MoviesWatchOnline`)} showSelectedFilters />

      <div className={classNames('container', styles.catalogContentContainer)}>
        <Accordion
          textButton={t('CatalogPageHeader.Sort')}
          buttonIconClass={classNames(styles.buttonIcon, 'icon-sort_16__0')}
        >
          <SortDropdown />
        </Accordion>
        <FilterPanelDesktop />
        <div className={styles.moviesContainer}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.movieBadgeContainer}>
              <Link href={`/MoviePage/${movie.id}`}>
                <MovieBadge film={movie} />
              </Link>
            </div>
          ))}
        </div>
        <ButtonOrLink className={styles.buttonShowMore} variant="secondary" transparent large>
          {t(`GenrePage.ShowMore`)}
        </ButtonOrLink>
      </div>
    </div>
  );
};

export default GenrePage;
