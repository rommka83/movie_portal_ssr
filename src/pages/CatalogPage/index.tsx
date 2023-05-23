import React, { useEffect, useMemo } from 'react';
import styles from './catalogpage.module.css';
import classNames from 'classnames';
import { CatalogPageHeader } from 'widgets/CatalogPageHeader';
import { FilterPanelDesktop } from 'widgets/FilterPanel';
import { useTranslation } from 'i18n';
import { CatalogPageContent } from 'widgets/CatalogPageContent';
import { IFilm } from 'shared/types/IFilm';
import { IPerson } from 'shared/types/IPerson';
import { Breadcrumbs } from 'shared/ui/Breadcrumbs';
import { useAppDispatch } from 'app/store/hooks';
import { resetFilters } from 'app/store/filterSlice';
import { clearParams } from 'shared/utils/generatesParamsString';
import { useRouter } from 'next/router';
import { getMovies, getPersons } from 'shared/apiService';
import { NotFound } from 'shared/ui/NotFound';

export const getStaticProps = async () => {
  try {
    const [responseMovies, responseActors] = await Promise.all([
      getMovies(),
      getPersons({ limit: '20', ['movies.enProfession']: 'actor' }),
    ]);
    return {
      props: { movies: responseMovies.docs, actors: responseActors.docs },
    };
  } catch (err) {
    return {
      props: { movies: [], actors: [] },
    };
    return {
      notFound: true,
    };
  }
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
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetFilters());
    clearParams(router, false);
  }, [router, dispatch]);

  return (
    <div className={styles.container}>
      <Breadcrumbs className='container' crumbs={[{ title: t('CatalogPage.Movies') }]} />

      <CatalogPageHeader titleText={t(`CatalogPageHeader.MoviesWatchOnline`)} />

      <div className={classNames('container', styles.catalogContentContainer)}>
        <FilterPanelDesktop />
        {!movies.length ? (
          <NotFound className={styles.catalogNotFound} />
        ) : (
          <CatalogPageContent movies={adventures} actors={actors} />
        )}
      </div>
    </div>
  );
}

export default CatalogPage;
