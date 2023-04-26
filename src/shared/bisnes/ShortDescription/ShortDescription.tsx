import React, { FC } from 'react';
import styles from './shortdescription.module.css';
import { IFilm } from 'shared/types/IFilm';

interface IProps {
  obj: IFilm;
}

export const ShortDescription: FC<IProps> = ({ obj }) => {
  const [genre] = obj.genres.slice(0, 1);
  let countries = '';
  obj.countries.map((el) => {
    return (countries += el.name);
  });
  const hours = Math.floor(obj.movieLength / 60);
  const min = obj.movieLength - hours * 60;
  return (
    <div className={styles.root}>
      <p className={styles.yearСountry}>
        {new Date(obj.year).getFullYear()}, {countries}
      </p>
      <p className={styles.genre}>{genre.name}</p>
      <p className={styles.duration}>
        {hours < 0 ? obj.movieLength + ' мин' : hours + ' ч ' + min + ' мин'}
      </p>
    </div>
  );
};
