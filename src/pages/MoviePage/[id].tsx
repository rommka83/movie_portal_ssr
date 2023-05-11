/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react';
import styles from './moviepage.module.css';
import Desktop from '../../widgets/MoviePageWigets/desktop/Desktop';
import { UseMedia } from 'shared/hooks/useMedia';
import Tablet from '../../widgets/MoviePageWigets/tablet/Tablet';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { getComments } from 'app/store/commentsRequest';
import axios from 'axios';
import { IFilm } from 'shared/types/IFilm';
import { IReviev } from 'shared/types/IReviev';
import { addFilm } from 'app/store/oneFilmSliceDELETE';

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  const film = await axios.get(`https://api.kinopoisk.dev/v1.3/movie/${id}`, {
    headers: {
      Accept: 'application/json',
      // 'X-API-KEY': 'WK12G32-AS5MC31-G3YD6BS-R9FN48S',
      'X-API-KEY': 'PZQK66P-MP6MTV9-MMNQB95-S4P3NH9',
    },
  });

  if (!film) {
    return {
      notFound: true,
    };
  }

  return {
    props: { film: film.data, id: id },
  };
}

interface IProps {
  film: IFilm;
  id: string;
}

export default function MoviePage({ film, id }: IProps) {
  const tablet = UseMedia('(max-width: 1160px)');
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (film === undefined) return;
    localStorage.setItem('oneFilm', JSON.stringify(film));
    dispatch(getComments(id));
  }, [film, id]);

  if (tablet) {
    return <Tablet film={film} />;
  }

  return film === undefined ? null : <Desktop film={film} />;
}
