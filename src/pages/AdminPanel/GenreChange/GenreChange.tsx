import React, { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from 'react';
import styles from './genreChange.module.css';
import classNames from 'classnames';
import ButtonOrLink from 'shared/ui/ButtonOrLink';
import { useAppDispatch } from 'app/store/hooks';
import { getGenres } from 'app/store/allGenresRequest';
import { nanoid } from '@reduxjs/toolkit';
import { CastomSelect } from 'features/CastomSelect';

const genres = [
  { id: 1, ruName: 'аниме', enName: 'anime' },
  { id: 2, ruName: 'биография', enName: 'biography' },
  { id: 3, ruName: 'боевик', enName: 'action movie' },
  { id: 4, ruName: 'вестерн', enName: 'western' },
  { id: 5, ruName: 'военный', enName: 'military' },
  { id: 6, ruName: 'детектив', enName: 'detective' },
  { id: 7, ruName: 'детский', enName: 'children' },
  { id: 9, ruName: 'документальный', enName: 'documentary' },
  { id: 10, ruName: 'драма', enName: 'drama' },
  { id: 11, ruName: 'игра', enName: 'game' },
  { id: 12, ruName: 'история', enName: 'history' },
  { id: 13, ruName: 'комедия', enName: 'comedy' },
  { id: 15, ruName: 'короткометражка', enName: 'short film' },
  { id: 16, ruName: 'криминал', enName: 'crime' },
  { id: 17, ruName: 'мелодрама', enName: 'melodrama' },
  { id: 18, ruName: 'музыка', enName: 'music' },
  { id: 19, ruName: 'мультфильм', enName: 'cartoon' },
  { id: 20, ruName: 'мюзикл', enName: 'musical' },
  { id: 21, ruName: 'новости', enName: 'news' },
  { id: 22, ruName: 'приключения', enName: 'adventure' },
  { id: 23, ruName: 'реальное ТВ', enName: 'real TV' },
  { id: 24, ruName: 'семейный', enName: 'family' },
  { id: 25, ruName: 'спорт', enName: 'sport' },
  { id: 26, ruName: 'ток-шоу', enName: 'talk show' },
  { id: 27, ruName: 'триллер', enName: 'thriller' },
  { id: 28, ruName: 'ужасы', enName: 'horror' },
  { id: 29, ruName: 'фантастика', enName: 'fantastyc' },
  { id: 30, ruName: 'фильм-нуар', enName: 'film noir' },
  { id: 31, ruName: 'фэнтези', enName: 'fantasy' },
];
export default function GenreChange() {
  // понадобиться при получении жанров с бэка
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getGenres());
  // }, []);

  const [idValue, setIdValue] = useState('');
  const [ruNameValue, setRuNameValue] = useState('');
  const [enNameValue, setEnNameValue] = useState('');
  const [put, setPut] = useState('');

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setPut(`PUT /genres/TOKEN/id=${idValue}&ruName=${ruNameValue}&enName=${enNameValue}`);
    setIdValue('');
    setRuNameValue('');
    setEnNameValue('');
  };

  const genreSelection = function (name: string) {
    const oneGenre = genres.find((el) => el.ruName === name);
    setIdValue(oneGenre ? oneGenre.id.toString() : '');
    setRuNameValue(oneGenre ? oneGenre.ruName : '');
    setEnNameValue(oneGenre ? oneGenre.enName : '');
  };

  return (
    <>
      <CastomSelect
        placeholder={'выберите название жанра'}
        list={genres.map((e) => e.ruName)}
        func={genreSelection}
      ></CastomSelect>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.blockInp}>
          <div className={styles.label}>
            <span className={styles.labelText}>id/ название русское/ название английское:</span>
            <div className={styles.inputs}>
              <input readOnly name='id' className={styles.inp} value={idValue} />
              <input
                required
                name='ruName'
                className={styles.inp}
                value={ruNameValue}
                onChange={(event) => setRuNameValue(event.target.value)}
              />
              <input
                required
                name='enName'
                className={styles.inp}
                value={enNameValue}
                onChange={(event) => setEnNameValue(event.target.value)}
              />
            </div>
          </div>
        </div>
        <input type='submit' onClick={(e) => handleSubmit(e)} className={styles.submit} />
      </form>
      <p className={styles.put}>{put}</p>
    </>
  );
}
