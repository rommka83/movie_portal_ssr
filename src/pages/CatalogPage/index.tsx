import React, { useMemo } from 'react';
import styles from './catalogpage.module.css';
import classNames from 'classnames';
import { CatalogPageHeader } from 'widgets/CatalogPageHeader';
import { FilterPanelDesktop } from 'widgets/FilterPanel';
import { useTranslation } from 'i18n';
import { CatalogPageContent } from 'widgets/CatalogPageContent';
import axios from 'axios';
import { IFilm } from 'shared/types/IFilm';
import { IPerson } from 'shared/types/IPerson';

export const getStaticProps = async () => {
  const [responseMovies, responseActors] = await Promise.all([
    axios.get('https://api.kinopoisk.dev/v1.3/movie?&page=1&limit=30', {
      headers: {
        Accept: 'application/json',
        'X-API-KEY': 'PZQK66P-MP6MTV9-MMNQB95-S4P3NH9',
      },
    }),
    axios.get('https://api.kinopoisk.dev/v1/person?page=1&limit=20&movies.enProfession=actor', {
      headers: {
        Accept: 'application/json',
        'X-API-KEY': 'PZQK66P-MP6MTV9-MMNQB95-S4P3NH9',
      },
    }),
  ]);
  if (!responseMovies) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movies: responseMovies.data.docs, actors: responseActors.data.docs },
  };
};

interface ICatalogPage {
  movies: IFilm[];
  actors: IPerson[];
}
function CatalogPage({ movies, actors }: ICatalogPage) {
  const { t } = useTranslation();
  const adventures = useMemo(
    () => movies?.filter((el) => el.genres.find((e) => e.name === 'приключения')),
    [movies],
  );

  return (
    <div className={styles.container}>
      <CatalogPageHeader titleText={t(`CatalogPageHeader.MoviesWatchOnline`)} />

      <div className={classNames('container', styles.catalogContentContainer)}>
        <FilterPanelDesktop />
        <CatalogPageContent movies={adventures} actors={actors} />
      </div>
    </div>
  );
}

export default CatalogPage;