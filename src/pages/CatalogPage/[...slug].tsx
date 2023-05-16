import React, { useEffect } from 'react';
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
import { Breadcrumbs } from 'shared/ui/Breadcrumbs';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { addAllFilters, genresSelectedSelector } from 'app/store/filterSlice';
import { getFilters, restoreParams } from 'shared/utils/generatesParamsString';

export const getServerSideProps: GetServerSideProps<{ movies: IFilm[] }> = async (context) => {
  const genre = context.params?.slug?.[0];
  const responseMovies = await axios.get(`https://api.kinopoisk.dev/v1.3/movie?&page=1&genres.name=${genre}&limit=30`, {
    headers: {
      Accept: 'application/json',
      'X-API-KEY': 'WK12G32-AS5MC31-G3YD6BS-R9FN48S',
      // 'X-API-KEY': 'PZQK66P-MP6MTV9-MMNQB95-S4P3NH9',
    },
  });
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
  const router = useRouter();
  const dispatch = useAppDispatch();
  const genres = useAppSelector(genresSelectedSelector(t));

  useEffect(() => {
    restoreParams(router);
    dispatch(addAllFilters(getFilters(router)));
  }, [router, dispatch]);

  return (
    <div className={styles.container}>
      <Breadcrumbs
        className='container'
        crumbs={[
          { title: t('CatalogPage.Movies'), link: '/CatalogPage' },
          { title: genres.length ? genres.join(', ') : t(`CatalogPageHeader.AllGenres`) },
        ]}
      />
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
        <ButtonOrLink className={styles.buttonShowMore} variant='secondary' transparent large>
          {t(`GenrePage.ShowMore`)}
        </ButtonOrLink>
      </div>
    </div>
  );
};

export default GenrePage;
