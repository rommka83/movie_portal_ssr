import React, { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from 'react';
import styles from './genreChange.module.css';
import classNames from 'classnames';
import ButtonOrLink from 'shared/ui/ButtonOrLink';
import { useAppDispatch } from 'app/store/hooks';
import { getGenres } from 'app/store/allGenresRequest';
import { nanoid } from '@reduxjs/toolkit';

const genres = [
  { name: 'биография', enName: 'biography' },
  { name: 'экшен', enName: 'actions' },
  { name: 'вестерн', enName: 'western' },
  { name: 'военный', enName: 'military' },
  { name: 'детективы', enName: 'detectives' },
  { name: 'детский', enName: 'kids' },
  { name: 'документальные фильмы', enName: 'documentaries' },
  { name: 'драма', enName: 'drama' },
  { name: 'исторический', enName: 'historical' },
  { name: 'комедия', enName: 'comedy' },
  { name: 'преступления', enName: 'criminal' },
  { name: 'мелодрама', enName: 'melodrama' },
  { name: 'музыкальный', enName: 'musical' },
  { name: 'мультики', enName: 'cartoons' },
  { name: 'приключения', enName: 'adventures' },
  { name: 'семейный', enName: 'family' },
  { name: 'спорт', enName: 'sport' },
  { name: 'триллеры', enName: 'thrillers' },
  { name: 'ужастик', enName: 'horror' },
  { name: 'фантастика', enName: 'fantastic' },
  { name: 'фэнтези', enName: 'fantasy' },
];

export function GenreChange() {
  // понадобиться при получении жанров с бэка
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getGenres());
  // }, []);

  const [inputFields, setInputFields] = useState<{ [key: string]: string }[]>(genres);

  const handleFormChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    inputFields[index][e.target.name] = e.target.value;
    setInputFields(inputFields);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    console.log(inputFields);
  };

  return (
    <>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        {genres.map((genre, index) => {
          return (
            <div className={styles.blockInp} key={index}>
              <div className={styles.label}>
                <span className={styles.labelText}>название русское/английское:</span>
                <div className={styles.inputs}>
                  <input
                    required
                    name='ruName'
                    className={styles.inp}
                    defaultValue={genre.name}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                  <input
                    required
                    name='enName'
                    className={styles.inp}
                    defaultValue={genre.enName}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                </div>
              </div>
            </div>
          );
        })}
        <input type='submit' onClick={(e) => handleSubmit(e)} className={styles.submit} />
      </form>
    </>
  );
}
