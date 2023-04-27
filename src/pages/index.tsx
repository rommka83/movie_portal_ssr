import React, { useEffect, useMemo, useState } from 'react';
import styles from '../../styles/home.module.css';
import { CategoryFilms } from 'widgets/CategoryFilms';
import { PromoSlider } from 'widgets/PromoSlider';
import axios from 'axios';
import { IFilm } from 'shared/types/IFilm';

export const getStaticProps = async () => {
  const response = await axios.get('https://api.kinopoisk.dev/v1.3/movie?&page=1&limit=50', {
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
};

interface Iprops {
  movies: IFilm[];
}
export default function Home({ movies }: Iprops) {
  let { adventures, fantasy } = useMemo(() => {
    const adventures = movies.filter((el) => el.genres.find((e) => e.name === 'приключения'));
    const fantasy = movies.filter((el) => el.genres.find((e) => e.name === 'фэнтези'));
    return { adventures, fantasy };
  }, [movies]);

  return (
    <>
      {/* <PromoSlider movies={testKinopoisk} /> */}
      <div className="container">
        <CategoryFilms title={'Приключения'} movies={adventures} />
        <CategoryFilms title={'Фэнтези'} movies={fantasy} />
      </div>
    </>
  );
}
