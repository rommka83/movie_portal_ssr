import React, { useEffect, useMemo, useState } from 'react';
import styles from '../../styles/home.module.css';
import { CategoryFilms } from 'widgets/CategoryFilms';
import { PromoSlider } from 'widgets/PromoSlider';
import axios from 'axios';
import { IFilm } from 'shared/types/IFilm';
import { MoviesCarousel } from 'widgets/MoviesCarousel';
import { ButtonsWithPadarkas } from 'features/ButtonsWithPadarkas';
import { AboutUs } from 'widgets/AboutUs';

export const getStaticProps = async () => {
  try {
    const response = await axios.get('https://api.kinopoisk.dev/v1.3/movie?&page=1&limit=40', {
      headers: {
        Accept: 'application/json',
        // 'X-API-KEY': 'WK12G32-AS5MC31-G3YD6BS-R9FN48S',
        'X-API-KEY': 'PZQK66P-MP6MTV9-MMNQB95-S4P3NH9',
      },
    });

    if (!response) {
      return {
        notFound: true,
      };
    }

    return {
      props: { movies: response.data.docs },
    };
  } catch {
    return {
      props: { movies: null },
    };
  }
};

interface Iprops {
  movies: IFilm[];
}
export default function Home({ movies }: Iprops) {
  let { adventures, fantasy, biography } = useMemo(() => {
    const adventures = movies.filter((el) => el.genres.find((e) => e.name === 'приключения'));
    const fantasy = movies.filter((el) => el.genres.find((e) => e.name === 'фэнтези'));
    const biography = movies.filter((el) => el.genres.find((e) => e.name === 'биография'));

    return { adventures, fantasy, biography };
  }, [movies]);
  return (
    <>
      {/* <PromoSlider movies={testKinopoisk} /> */}
      <div className='container'>
        <div className={styles.wrapper}>
          <ButtonsWithPadarkas />
          <AboutUs />
          <MoviesCarousel title={'Фэнтези'} movies={fantasy} />
          <MoviesCarousel title={'Приключения'} movies={adventures} />
          <MoviesCarousel title={'Биография'} movies={biography} />
        </div>
      </div>
    </>
  );
}
