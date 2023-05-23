/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Desktop from '../../../widgets/MoviePageWigets/desktop/Desktop';
import { useMedia } from 'shared/hooks/useMedia';
import Tablet from '../../../widgets/MoviePageWigets/tablet/Tablet';
import { useAppDispatch } from 'app/store/hooks';
import { getCommentsThunk } from 'app/store/commentsRequest';
import { IFilm } from 'shared/types/IFilm';
import { getMovie } from 'shared/apiService';

export async function getServerSideProps(context: any) {
  try {
    const { id } = context.params;
    const film = await getMovie(id);
    return {
      props: { film: film, id: id },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

interface IProps {
  film: IFilm;
  id: string;
}

export default function MoviePage({ film, id }: IProps) {
  const tablet = useMedia('(max-width: 1160px)');
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (film === undefined) return;
    dispatch(getCommentsThunk(id));
  }, [film, id]);

  if (tablet) {
    return <Tablet film={film} />;
  }

  return <Desktop film={film} />;
}