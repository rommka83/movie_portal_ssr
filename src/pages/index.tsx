import React, { useMemo } from 'react';
import styles from '../../styles/home.module.css';
import { PromoSlider } from 'widgets/PromoSlider';
import { IFilm } from 'shared/types/IFilm';
import { MoviesCarousel } from 'widgets/MoviesCarousel';
import { ButtonsWithPadarkas } from 'features/ButtonsWithPadarkas';
import { AboutUs } from 'widgets/AboutUs';
import { TopSection } from 'widgets/TopSection';
import { getMovies } from 'shared/apiService';

export const getStaticProps = async () => {
  try {
    const response = await getMovies({ limit: '40' });
    return {
      props: { movies: response.docs },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface Iprops {
  movies: IFilm[];
}
export default function Home({ movies }: Iprops) {
  let { adventures, fantasy, biography, top } = useMemo(() => {
    const adventures = movies.filter((el) => el.genres.find((e) => e.name === 'приключения'));
    const fantasy = movies.filter((el) => el.genres.find((e) => e.name === 'фэнтези'));
    const biography = movies.filter((el) => el.genres.find((e) => e.name === 'биография'));
    const top = movies.filter((el) => el.rating);
    return { adventures, fantasy, biography, top };
  }, [movies]);
  return (
    <>
      <PromoSlider />
      <div className='container'>
        <div className={styles.wrapper}>
          <ButtonsWithPadarkas />
          <AboutUs />
          <TopSection
            films={top
              .sort((a, b) => {
                if (!a.rating || !b.rating) return 1;
                return a.rating.kp > b.rating.kp ? -1 : 1;
              })
              .slice(0, 10)}
          />
          <MoviesCarousel genreLink='фэнтези' title={'Фэнтези'} movies={fantasy} />
          <MoviesCarousel genreLink='приключения' title={'Приключения'} movies={adventures} />
          <MoviesCarousel genreLink='биография' title={'Биография'} movies={biography} />
        </div>
      </div>
    </>
  );
}
