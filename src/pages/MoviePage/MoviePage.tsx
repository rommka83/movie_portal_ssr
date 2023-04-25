import React, { useEffect, useMemo } from 'react';
import styles from './moviepage.module.css';
import { Desktop } from './desktop/Desktop';
import { UseMedia } from 'shared/hooks/useMedia';
import { Tablet } from './tablet/Tablet';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { getComments } from 'app/store/commentsRequest';
import { useParams } from 'react-router';
import test from '../../temp/DB/testKinopoisk.json';

export function MoviePage() {
  const { id } = useParams();

  const film = useMemo(() => {
    if (id === undefined) return;
    return test.find((el) => el.id === +id);
  }, [id]);

  const tablet = UseMedia('(max-width: 1160px)');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (film === undefined) return;
  }, [film]);

  if (tablet) {
    return <Tablet />;
  }

  return film === undefined ? null : <Desktop film={film} />;
}
