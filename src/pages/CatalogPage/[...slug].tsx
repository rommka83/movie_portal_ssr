import React, { useEffect, useRef } from 'react';
import styles from './catalogpage.module.css';
import { CatalogPageHeader } from 'widgets/CatalogPageHeader';
import { useTranslation } from 'i18n';
import classNames from 'classnames';
import { Accordion } from 'shared/ui/Accordion';
import { SortDropdown } from 'features/SortDropdown';
import { FilterPanelDesktop } from 'widgets/FilterPanel';
import { IFilm } from 'shared/types/IFilm';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { MovieBadge } from 'entities/MovieBadge';
import { Breadcrumbs } from 'shared/ui/Breadcrumbs';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  addAllFilters,
  addFilteredMovies,
  addSortTypesSort,
  filteredMoviesPendingSelector,
  filteredMoviesSelector,
  getFilteredMovies,
  getFilteredMoviesPage,
  getSelectedFilterSelector,
  resetFilters,
} from 'app/store/filterSlice';
import {
  clearParams,
  getFilters,
  getParams,
  getSortType,
  restoreParams,
} from 'shared/utils/generatesParamsString';
import { getMovies } from 'shared/apiService';
import { NotFound } from 'shared/ui/NotFound';
import { Loader } from 'shared/ui/Loader';
import useIntersectionObserver from 'shared/hooks/useIntersectionObserver';

export const getServerSideProps: GetServerSideProps<{ movies: IFilm[] }> = async (context) => {
  try {
    const responseMovies = await getMovies(getParams(context.query));

    return {
      props: { movies: responseMovies.docs },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
interface IGenrePage {
  movies: IFilm[];
}

const GenrePage = ({ movies }: IGenrePage) => {
  const { t } = useTranslation();
  const observedElementRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(observedElementRef, { rootMargin: '0px 0px 500px' });
  const pageRef = useRef(1);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const genres = useAppSelector(getSelectedFilterSelector('genres', t));
  const filteredMovies = useAppSelector(filteredMoviesSelector);
  const filteredMoviesPending = useAppSelector(filteredMoviesPendingSelector);

  useEffect(() => {
    restoreParams(router);
    dispatch(addAllFilters(getFilters(router)));
    dispatch(addSortTypesSort(getSortType(router)));

    const getFilteredMoviesHandler = () => {
      dispatch(getFilteredMovies());
      pageRef.current = 0;
    };

    router.events.on('routeChangeComplete', getFilteredMoviesHandler);
    const resetFiltersHandler = () => {
      dispatch(resetFilters());
      clearParams(router, false);
    };
    return () => {
      router.events.off('routeChangeComplete', getFilteredMoviesHandler);
      resetFiltersHandler();
    };
  }, [router, dispatch, pageRef]);

  useEffect(() => {
    dispatch(addFilteredMovies(movies));
  }, [movies, dispatch]);

  useEffect(() => {
    if (entry?.isIntersecting) {
      pageRef.current += 1;
      pageRef.current > 1 && dispatch(getFilteredMoviesPage(pageRef.current.toString()));
    }
  }, [entry, pageRef, dispatch]);

  return (
    <div className={styles.container}>
      <Breadcrumbs
        className='container'
        crumbs={[
          { title: t('CatalogPage.Movies'), link: 'CatalogPage' },
          { title: typeof genres === 'string' ? genres : t(`CatalogPageHeader.AllGenres`) },
        ]}
      />
      <CatalogPageHeader showSelectedFilters />

      <div className={classNames('container', styles.catalogContentContainer)}>
        <Accordion
          textButton={t('CatalogPageHeader.Sort')}
          buttonIconClass={classNames(styles.buttonIcon, 'icon-sort_16__0')}
        >
          <SortDropdown />
        </Accordion>
        <FilterPanelDesktop />

        <div className={styles.moviesContainer}>
          {!filteredMoviesPending && !filteredMovies.length ? (
            <NotFound className={styles.notFound} />
          ) : !filteredMoviesPending ? (
            filteredMovies.map((movie) => (
              <div key={movie.id} className={styles.movieBadgeContainer}>
                <Link href={`/MoviePage/${movie.id}`}>
                  <MovieBadge film={movie} />
                </Link>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>

        <div ref={observedElementRef} />
      </div>
    </div>
  );
};

export default GenrePage;
