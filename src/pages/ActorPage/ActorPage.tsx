/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import styles from './actorpage.module.css';

import { useAppDispatch, useAppSelector } from 'app/store/hooks';

import { IActorFilms } from 'shared/types/IActorFilms';

import { ActorTabs } from 'features/ActorTabs/ActorTabs';
import { PersonHeader } from 'shared/bisnes/PersonHeader';
import { FilmographyItem } from 'entities/FilmographyItem';
import Back from 'shared/ui/Back';

import { declension } from './lib/helpers/declension ';

import { fetchActor } from 'app/store/ActorReducers/ActionCreators';
import { useTranslation } from 'react-i18next';

interface IProps {
  id: string;
}

export function ActorPage({ id }: IProps) {
  const [movies, setMovies] = useState<IActorFilms[]>([]);
  const [moreMovies, setMoreMovies] = useState<IActorFilms[]>();
  const [showMoreMovies, setShowMoreMovies] = useState<boolean>(false);

  const { actor, isLoading, error } = useAppSelector(
    (state) => state.actorReduser
  );

  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    if (id) dispatch(fetchActor(id));
  }, [id]);

  useEffect(() => {
    if (actor.movies) {
      let movies = actor.movies.filter((item) => item.name !== null);
      if (movies.length > 9) {
        let moviesWithTitle = movies.slice(0, 8);
        let moreMoviesWithTitle = movies.slice(8);
        setMovies(moviesWithTitle);
        setMoreMovies(moreMoviesWithTitle);
      } else {
        setMovies(actor.movies);
      }
    }
  }, [actor]);

  if (error) {
    return <div className={styles.error}>Не удалось получить пользователя</div>;
  }

  return (
    <section className={styles.actorPage}>
      <div className='container'>
        <Back f={() => {}} className={styles.back}>
          {t('Back')}
        </Back>
        <div className={styles.container}>
          {!isLoading ? (
            <>
              <PersonHeader
                name={actor.name}
                photo={actor.photo}
                enName={actor.enName}
              />
              <div className={styles.filmography}>
                <div className={styles.content}>
                  <div className={styles.title}>
                    Полная фильмография
                    <span className={styles.lable}>
                      {declension(
                        actor?.movies &&
                          actor?.movies.filter((item) => item.name !== null)
                            .length,
                        'фильм'
                      )}
                    </span>
                  </div>
                  <ActorTabs tabs={['Всё']} />
                </div>
                <div className={styles.filmographyList}>
                  <div className={styles.filmographyContent}>
                    {movies.map(
                      (movie) =>
                        movie.name && (
                          <FilmographyItem key={movie.id} movie={movie} />
                        )
                    )}
                    {!showMoreMovies && moreMovies && (
                      <button
                        className={styles.btn}
                        onClick={() => setShowMoreMovies(true)}
                      >
                        Еще {declension(moreMovies.length, 'фильм')}
                      </button>
                    )}
                    {showMoreMovies &&
                      moreMovies?.map(
                        (movie) =>
                          movie.name && (
                            <FilmographyItem key={movie.id} movie={movie} />
                          )
                      )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div>Загрузка</div>
          )}
        </div>
      </div>
    </section>
  );
}
