import React, { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from 'react';
import styles from './genreChange.module.css';
import classNames from 'classnames';
import ButtonOrLink from 'shared/ui/ButtonOrLink';
import { useAppDispatch } from 'app/store/hooks';
import { getGenres } from 'app/store/allGenresRequest';
import { nanoid } from '@reduxjs/toolkit';
import { CastomSelect } from 'features/CastomSelect';

const genres = [
  { id: 1, name: 'аниме', en_name: 'anime' },
  { id: 2, name: 'биография', en_name: 'biography' },
  { id: 3, name: 'боевик', en_name: 'action movie' },
  { id: 4, name: 'вестерн', en_name: 'western' },
  { id: 5, name: 'военный', en_name: 'military' },
  { id: 6, name: 'детектив', en_name: 'detective' },
  { id: 7, name: 'детский', en_name: 'children' },
  { id: 9, name: 'документальный', en_name: 'documentary' },
  { id: 10, name: 'драма', en_name: 'drama' },
  { id: 11, name: 'игра', en_name: 'game' },
  { id: 12, name: 'история', en_name: 'history' },
  { id: 13, name: 'комедия', en_name: 'comedy' },
  { id: 15, name: 'короткометражка', en_name: 'short film' },
  { id: 16, name: 'криминал', en_name: 'crime' },
  { id: 17, name: 'мелодрама', en_name: 'melodrama' },
  { id: 18, name: 'музыка', en_name: 'music' },
  { id: 19, name: 'мультфильм', en_name: 'cartoon' },
  { id: 20, name: 'мюзикл', en_name: 'musical' },
  { id: 21, name: 'новости', en_name: 'news' },
  { id: 22, name: 'приключения', en_name: 'adventure' },
  { id: 23, name: 'реальное ТВ', en_name: 'real TV' },
  { id: 24, name: 'семейный', en_name: 'family' },
  { id: 25, name: 'спорт', en_name: 'sport' },
  { id: 26, name: 'ток-шоу', en_name: 'talk show' },
  { id: 27, name: 'триллер', en_name: 'thriller' },
  { id: 28, name: 'ужасы', en_name: 'horror' },
  { id: 29, name: 'фантастика', en_name: 'fantastyc' },
  { id: 30, name: 'фильм-нуар', en_name: 'film noir' },
  { id: 31, name: 'фэнтези', en_name: 'fantasy' },
];
export default function GenreChange() {
  // понадобиться при получении жанров с бэка
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getGenres());
  // }, []);

  const [idValue, setIdValue] = useState('');
  const [nameValue, setnameValue] = useState('');
  const [en_nameValue, seten_nameValue] = useState('');
  const [put, setPut] = useState('');

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setPut(`PUT /genres/TOKEN=TOKEN&id=${idValue}&name=${nameValue}&en_name=${en_nameValue}`);
    genreSelection('');
  };

  const genreSelection = function (name: string) {
    const oneGenre = genres.find((el) => el.name === name);
    setIdValue(oneGenre ? oneGenre.id.toString() : '');
    setnameValue(oneGenre ? oneGenre.name : '');
    seten_nameValue(oneGenre ? oneGenre.en_name : '');
  };

  return (
    <>
      <CastomSelect
        placeholder={'выберите название жанра'}
        list={genres.map((e) => e.name)}
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
                name='name'
                className={styles.inp}
                value={nameValue}
                onChange={(event) => setnameValue(event.target.value)}
              />
              <input
                required
                name='en_name'
                className={styles.inp}
                value={en_nameValue}
                onChange={(event) => seten_nameValue(event.target.value)}
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
