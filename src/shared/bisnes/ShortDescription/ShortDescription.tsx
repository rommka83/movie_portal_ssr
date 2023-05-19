import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './shortdescription.module.css';
import { IFilm } from 'shared/types/IFilm';
import classNames from 'classnames';
import { GenreBookmarks } from '../GenreBookmarks';

interface IProps {
  obj: IFilm;
  allGenres?: boolean;
}

export const ShortDescription: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement> & IProps>> = ({
  obj,
  allGenres = false,
  className,
}) => {
  const [genre] = obj.genres.slice(0, 1);
  let countries = '';
  obj.countries.map((el) => {
    return (countries += el.name);
  });
  const hours = Math.floor(obj.movieLength / 60);
  const min = obj.movieLength - hours * 60;
  return (
    <div className={classNames(styles.root, className)}>
      <p className={styles.yearСountry}>
        {new Date(obj.year).getFullYear()}, {countries}
      </p>
      <p className={styles.genre}>{allGenres ? <GenreBookmarks ganre={obj.genres} /> : obj.genres[0].name}</p>
      <p className={styles.duration}>{hours < 0 ? obj.movieLength + ' мин' : hours + ' ч ' + min + ' мин'}</p>
    </div>
  );
};
