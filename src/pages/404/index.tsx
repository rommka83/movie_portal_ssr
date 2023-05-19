import React, { useMemo } from 'react';
import styles from './404.module.css';
import { MoviesCarousel } from 'widgets/MoviesCarousel';
import { useTranslation } from 'i18n';
import { IFilm } from 'shared/types/IFilm';
import { GetStaticProps } from 'next';
import classNames from 'classnames';
import { getMovies } from 'shared/apiService';

export const getStaticProps: GetStaticProps<{ movies: IFilm[] }> = async () => {
  const responseMovies = await getMovies({ params: { page: '1', limit: '30' } });

  if (!responseMovies) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movies: responseMovies.docs },
  };
};
interface ICustom404 {
  movies: IFilm[];
}
const Custom404 = ({ movies }: ICustom404) => {
  const { t } = useTranslation();
  const adventures = useMemo(
    () => movies?.filter((el) => el.genres.find((e) => e.name === 'приключения')) ?? [],
    [movies],
  );
  return (
    <div className={classNames(styles.notFoundRoot, 'container')}>
      <div className={styles.topInfo}>
        <div className={styles.topInfoInner}>
          <div className={styles.topInfoText}>
            <p className={styles.title}>{t('404.Error')}</p>
            <p className={styles.textError}>{t('404.TheRequestedPageDoesNotExist')}</p>
          </div>
        </div>
      </div>
      <section className={styles.notFoundSection}>
        <MoviesCarousel title='Фильмы' movies={adventures} />
        <MoviesCarousel title='Фильмы' movies={adventures} />
        <MoviesCarousel title='Фильмы' movies={adventures} />
        <MoviesCarousel title='Фильмы' movies={adventures} />
        <MoviesCarousel title='Фильмы' movies={adventures} />
      </section>
    </div>
  );
};

export default Custom404;
