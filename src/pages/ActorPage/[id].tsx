/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styles from './actorpage.module.css';
import { IActorFilms } from 'shared/types/IActorFilms';
import { ActorTabs } from 'features/ActorTabs/ActorTabs';
import { PersonHeader } from 'shared/bisnes/PersonHeader';
import { FilmographyItem } from 'entities/FilmographyItem';
import Back from 'shared/ui/Back';
import { declension } from './lib/helpers/declension ';
import { useTranslation } from '../../i18n';
import axios from 'axios';
import { IPersonBackend } from 'shared/types/IPersonBackend';

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  const actor = await axios.get(`https://api.kinopoisk.dev/v1/person/${id}`, {
    headers: {
      Accept: 'application/json',
      // 'X-API-KEY': 'WK12G32-AS5MC31-G3YD6BS-R9FN48S',
      'X-API-KEY': 'PZQK66P-MP6MTV9-MMNQB95-S4P3NH9',
    },
  });

  if (!actor) {
    return {
      notFound: true,
    };
  }

  return {
    props: { actor: actor.data },
  };
}

interface IProps {
  actor: IPersonBackend;
}

function ActorPage({ actor }: IProps) {
  const [movies, setMovies] = useState<IActorFilms[]>([]);
  const [moreMovies, setMoreMovies] = useState<IActorFilms[]>();
  const [showMoreMovies, setShowMoreMovies] = useState<boolean>(false);

  const { t } = useTranslation();

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

  return (
    <section className={styles.actorPage}>
      <div className="container">
        <Back f={() => {}} className={styles.back}>
          {t('Back')}
        </Back>
        <div className={styles.container}>
          <PersonHeader name={actor.name} photo={actor.photo} enName={actor.enName} />
          <div className={styles.filmography}>
            <div className={styles.content}>
              <div className={styles.title}>
                Полная фильмография
                <span className={styles.lable}>
                  {declension(
                    actor?.movies && actor?.movies.filter((item) => item.name !== null).length,
                    'фильм',
                  )}
                </span>
              </div>
              <ActorTabs tabs={['Всё']} />
            </div>
            <div className={styles.filmographyList}>
              <div className={styles.filmographyContent}>
                {movies.map(
                  (movie) => movie.name && <FilmographyItem key={movie.id} movie={movie} />,
                )}
                {!showMoreMovies && moreMovies && (
                  <button className={styles.btn} onClick={() => setShowMoreMovies(true)}>
                    Еще {declension(moreMovies.length, 'фильм')}
                  </button>
                )}
                {showMoreMovies &&
                  moreMovies?.map(
                    (movie) => movie.name && <FilmographyItem key={movie.id} movie={movie} />,
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ActorPage;
