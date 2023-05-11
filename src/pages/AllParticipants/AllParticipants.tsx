import React, { FC, HTMLAttributes, useEffect, useMemo, useState } from 'react';
import styles from './allparticipants.module.css';
import { Back } from 'shared/ui/Back/Back';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { IFilm } from 'shared/types/IFilm';
import { useAppSelector } from 'app/store/hooks';
import classNames from 'classnames';
import { IPerson } from 'shared/types/IPerson';
import { PersonMiniCard } from 'shared/bisnes/PersonMiniCard';
import { PersonsList } from 'widgets/PersonsList';
import { nanoid } from '@reduxjs/toolkit';
import { PosterCards } from 'shared/bisnes/PosterCards/PosterCards';
import { ShortDescription } from 'shared/bisnes/ShortDescription';
import { ReitingMovie } from 'shared/bisnes/ReitingMovie';
import { TopChart } from 'shared/bisnes/TopChart';
import { BlockChart } from 'shared/bisnes/BlockChart';
import { useRouter } from 'next/router';

const emptyFilm: IFilm = {
  id: 0,
  name: '',
  enName: null,
  year: 0,
  description: null,
  shortDescription: null,
  rating: {
    kp: 0,
    imdb: 0,
    tmdb: 0,
    filmCritics: 0,
    russianFilmCritics: 0,
    await: 0,
  },
  movieLength: 0,
  ageRating: null,
  poster: {
    url: '',
    previewUrl: '',
  },
  videos: {
    trailers: [
      {
        url: '',
        name: '',
        site: '',
        type: '',
        size: 0,
      },
    ],
    teasers: [
      {
        url: '',
        name: '',
        site: '',
        type: '',
        size: 0,
      },
    ],
  },
  genres: [],
  countries: [],
  persons: [],
  similarMovies: null,
  facts: null,
  alternativeName: null,
};

interface IProps {}

const AllParticipants: FC<HTMLAttributes<HTMLDivElement> & IProps> = ({ className }) => {
  const [film, setFilm] = useState<IFilm>(emptyFilm);
  const router = useRouter();

  const workArr = useMemo(() => {
    let workArr: IPerson[][] = [];
    let directors: IPerson[] = [];
    let actors: IPerson[] = [];
    let producers: IPerson[] = [];
    let operators: IPerson[] = [];
    let screenwriters: IPerson[] = [];
    let composers: IPerson[] = [];
    let artists: IPerson[] = [];
    let installatior: IPerson[] = [];
    let dubbingActors: IPerson[] = [];
    let editors: IPerson[] = [];

    film.persons.map((person) => {
      switch (person.profession) {
        case 'режиссеры':
          directors.push(person);
          break;
        case 'актеры':
          actors.push(person);
          break;
        case 'продюсеры':
          producers.push(person);
          break;
        case 'операторы':
          operators.push(person);
          break;
        case 'сценаристы':
          screenwriters.push(person);
          break;
        case 'композиторы':
          composers.push(person);
          break;
        case 'художники':
          artists.push(person);
          break;
        case 'монтажеры':
          installatior.push(person);
          break;
        case 'актеры дубляжа':
          dubbingActors.push(person);
          break;
        case 'редакторы':
          editors.push(person);
          break;
        default:
          break;
      }
    });

    directors.length > 0 && workArr.push(directors);
    actors.length > 0 && workArr.push(actors);
    producers.length > 0 && workArr.push(producers);
    operators.length > 0 && workArr.push(operators);
    screenwriters.length > 0 && workArr.push(screenwriters);
    composers.length > 0 && workArr.push(composers);
    artists.length > 0 && workArr.push(artists);
    installatior.length > 0 && workArr.push(installatior);
    dubbingActors.length > 0 && workArr.push(dubbingActors);
    editors.length > 0 && workArr.push(editors);

    return workArr;
  }, [film.persons]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      let _film = localStorage.getItem('oneFilm');
      _film && setFilm(JSON.parse(_film));
    }
  }, []);

  return (
    <div className={styles.root}>
      <div className={classNames(styles.wrapper, 'container')}>
        <Back className={styles.back}>Назад</Back>
        <SectionTitle className={styles.title}>
          <span>{film.name}</span>
        </SectionTitle>

        <div className={styles.content}>
          {workArr.length > 0 &&
            workArr.map((arr) => {
              return <PersonsList list={arr} className={styles.section} key={nanoid()} />;
            })}
        </div>
        <div className={styles.poster} onClick={() => router.back()}>
          <PosterCards src={film.poster.url} name={film.name} />
          <div className={styles.rating}>
            <ReitingMovie grade={film.rating ? film.rating.kp : 0} className={styles.ratingValue} />
            <BlockChart
              width={50}
              obj={
                film.rating ?? {
                  await: 0,
                  filmCritics: 0,
                  imdb: 0,
                  russianFilmCritics: 0,
                }
              }
            />
          </div>
          <ShortDescription obj={film} className={styles.shortDescription} allGenres />
        </div>
      </div>
    </div>
  );
};

export default AllParticipants;
