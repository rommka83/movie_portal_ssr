/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './movieChange.module.css';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { getMovieTitleSearch, resetmovieTitleSearch } from 'app/store/movieTitleSearchSlice';
import { OutputWindow } from 'shared/ui/CastomInput';
import { nanoid } from '@reduxjs/toolkit';
import { IFilm } from 'shared/types/IFilm';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import { Loader } from 'shared/ui/Loader';

export const emptyFilm: IFilm = {
  id: 0,
  name: '',
  enName: null,
  year: 0,
  description: null,
  shortDescription: null,
  rating: null,
  movieLength: 0,
  ageRating: null,
  poster: {
    url: '',
    previewUrl: '',
  },
  videos: {
    trailers: [],
    teasers: [],
  },
  genres: [],
  countries: [],
  persons: [],
  similarMovies: null,
  facts: null,
  alternativeName: null,
};

export default function MovieChange() {
  const dispatch = useAppDispatch();
  const { films, filmSearchPending } = useAppSelector((store) => store.movieTitleSearch);
  const [oneFilm, setOneFilm] = useState(emptyFilm);
  const [isOpen, setIsOpen] = useState(false);
  const [ruName, setRuName] = useState('');
  const [enName, setEnName] = useState('');

  useEffect(() => {
    ruName.length >= 3 && films.length > 0 ? setIsOpen(true) : setIsOpen(false);
  }, [films.length, ruName.length]);

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setRuName(e.currentTarget.value);
  };

  const handleSearch = function () {
    ruName.length >= 3 ? dispatch(getMovieTitleSearch(ruName)) : dispatch(resetmovieTitleSearch());
  };

  return (
    <>
      <form className={styles.form}>
        <p className={styles.instruction}>Для начала поиска начните вводить русское название фильма</p>
        <div className={styles.label}>
          <span className={styles.labelText}>русское название:</span>
          <input
            type='text'
            className={styles.inp}
            value={ruName}
            onChange={(e) => handleChange(e)}
            onKeyUp={handleSearch}
          />
          {isOpen && (
            <ul className={styles.inpDropdawnList}>
              {films.length > 0 &&
                films.map((film) => {
                  return (
                    <li
                      className={styles.inpDropdawnItem}
                      key={film.id}
                      onClick={() => {
                        setOneFilm(film);
                        setRuName(film.name);
                        setEnName(film.enName ?? '');
                        setIsOpen(false);
                        dispatch(resetmovieTitleSearch());
                      }}
                    >
                      {film.name}
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
        <div className={styles.label}>
          <span className={styles.labelText}>английское название:</span>
          <input
            type='text'
            className={styles.inp}
            value={enName}
            onChange={(e) => setEnName(e.currentTarget.value)}
          />
        </div>
        <OutputWindow name='альтернативное название' value={oneFilm.alternativeName} />
        <OutputWindow name='идентификационный номер' value={oneFilm.id} />
        <OutputWindow name='год выпуска' value={oneFilm.year} />
        <OutputWindow name='описание' value={oneFilm.description} />
        <OutputWindow name='короткое описание' value={oneFilm.shortDescription} />
        <OutputWindow name='продолжительность (мин)' value={oneFilm.movieLength} />
        <OutputWindow name='ограничения по возрасту' value={oneFilm.ageRating} />
        <OutputWindow name='постер url' value={oneFilm.poster?.url} />
        <OutputWindow name='постер (предварительный просмотр) url' value={oneFilm.poster?.previewUrl} />
        {oneFilm.rating && (
          <div className={styles.blockInp}>
            <h3 className={styles.blockInpTitle}>Рейтинги</h3>
            <div className={styles.blockInBlock}>
              <OutputWindow name='наш' value={oneFilm.rating.kp} />
              <OutputWindow name='imdb' value={oneFilm.rating.imdb} />
              <OutputWindow name='tmdb' value={oneFilm.rating.tmdb} />
              <OutputWindow name='международных кинокритиков' value={oneFilm.rating.filmCritics} />
              <OutputWindow name='российских кинокритиков' value={oneFilm.rating.russianFilmCritics} />
              <OutputWindow name='ожидаемый' value={oneFilm.rating.await} />
            </div>
          </div>
        )}
        {/* {oneFilm.videos.trailers.length > 0 && (
        <div className={styles.blockInp}>
          <h3 className={styles.blockInpTitle}>Трейлеры</h3>
          {oneFilm.videos.trailers.map((el) => {
            return (
              <div className={styles.blockInBlock} key={nanoid()}>
                <OutputWindow name='название' value={el.name} />
                <OutputWindow name='url' value={el.url} />
                <OutputWindow name='сайт' value={el.site} />
                <OutputWindow name='тип' value={el.type} />
                <OutputWindow name='размер' value={el.size} />
              </div>
            );
          })}
        </div>
      )}
      {oneFilm.videos.teasers.length > 0 && (
        <div className={styles.blockInp}>
          <h3 className={styles.blockInpTitle}>Тизеры</h3>
          {oneFilm.videos.teasers.map((el) => {
            return (
              <div className={styles.blockInBlock} key={nanoid()}>
                <OutputWindow name='название' value={el.name} />
                <OutputWindow name='url' value={el.url} />
                <OutputWindow name='сайт' value={el.site} />
                <OutputWindow name='тип' value={el.type} />
                <OutputWindow name='размер' value={el.size} />
              </div>
            );
          })}
        </div>
      )} */}
        {oneFilm.genres.length > 0 && (
          <div className={styles.blockInp}>
            <h3 className={styles.blockInpTitle}>Жанры</h3>
            {oneFilm.genres.map((el) => {
              return <OutputWindow value={el.name} key={nanoid()} />;
            })}
          </div>
        )}
        {oneFilm.countries.length > 0 && (
          <div className={styles.blockInp}>
            <h3 className={styles.blockInpTitle}>Страны</h3>
            {oneFilm.countries.map((el) => {
              return <OutputWindow value={el.name} key={nanoid()} />;
            })}
          </div>
        )}
        {/* {oneFilm.persons.length > 0 && (
        <div className={styles.blockInp}>
          <h3 className={styles.blockInpTitle}>Рабочая команда</h3>
          {oneFilm.persons.map((el) => {
            return (
              <div className={styles.blockInBlock} key={nanoid()}>
                <OutputWindow name='идентификационный номер' value={el.id} />
                <OutputWindow name='имя (по русски)' value={el.name} />
                <OutputWindow name='имя (по английски)' value={el.enName} />
                <OutputWindow name='фото url' value={el.photo} />
                <OutputWindow name='описание' value={el.description} />
                <OutputWindow name='профессия (по русски)' value={el.profession} />
                <OutputWindow name='профессия (по английски)' value={el.enProfession} />
              </div>
            );
          })}
        </div>
      )}
      {oneFilm.similarMovies && (
        <div className={styles.blockInp}>
          <h3 className={styles.blockInpTitle}>Похожее видео</h3>
          {oneFilm.similarMovies.map((el) => {
            return (
              <div className={styles.blockInBlock} key={nanoid()}>
                <OutputWindow name='идентификационный номер' value={el.id} />
                <OutputWindow name='название (по русски)' value={el.name} />
                <OutputWindow name='название (по английски)' value={el.enName} />
                <OutputWindow name='альтернативное название' value={el.alternativeName} />
                <OutputWindow name='тип' value={el.type} />
                <OutputWindow name='постер url' value={el.poster.url} />
                <OutputWindow name='постер предпросмотра url' value={el.poster.previewUrl} />
              </div>
            );
          })}
        </div>
      )}
      {oneFilm.facts && (
        <div className={styles.blockInp}>
          <h3 className={styles.blockInpTitle}>Факты</h3>
          {oneFilm.facts.map((el) => {
            return (
              <div className={styles.blockInBlock} key={nanoid()}>
                <OutputWindow name='тип' value={el.type} />
                <OutputWindow name='значение' value={el.value} />
                <label className={classNames(styles.checkbox)}>
                  наличие спойлера:
                  <input readOnly type='checkbox' className={styles.inp} />
                </label>
              </div>
            );
          })}
        </div>
      )} */}
        <div className={styles.blockBtnSubmit}>
          <ButtonOrLink className={styles.submit}>
            <span>Изменить</span>
          </ButtonOrLink>
          <ButtonOrLink className={styles.submit}>
            <span>Удалить</span>
          </ButtonOrLink>
        </div>
      </form>
      {filmSearchPending && <Loader />}
    </>
  );
}
