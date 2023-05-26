import classNames from 'classnames';
import { useTranslation } from 'i18n';
import React from 'react';
import { GenreBookmarks } from 'shared/bisnes/GenreBookmarks';
import { IFilm } from 'shared/types/IFilm';
import styles from '../videodescription.module.css';

interface IVideoDescriptionHeader {
  film: IFilm;
  containerClassName?: string;
}
export const VideoDescriptionHeader = ({ film, containerClassName }: IVideoDescriptionHeader) => {
  const { i18n } = useTranslation();
  const lng = i18n.language;
  const hours = Math.floor(film.movieLength / 60);
  const min = film.movieLength - hours * 60;

  return (
    <div className={classNames(styles.containerInner, containerClassName)}>
      <h2 className={styles.title}>{lng === 'ru' ? film.name : film.enName ?? film.name}</h2>
      <ul className={styles.atributes}>
        <li className={styles.atributesItem}>
          <a href='https://www.ivi.ru/series' className={styles.atributesLink}>
            {film.year}
          </a>
        </li>
        <li className={styles.atributesItem}>
          <a href='https://www.ivi.ru/series' className={styles.atributesLink}>
            {hours < 0 ? film.movieLength + ' мин' : hours + ' ч ' + min + ' мин'}
          </a>
        </li>
        <li className={styles.atributesItem}>
          <a href='https://www.ivi.ru/series' className={styles.atributesLink}>
            {film.ageRating ? film.ageRating : 0} +
          </a>
        </li>
      </ul>
      <div className={styles.ganre}>
        <GenreBookmarks ganre={film.genres} />
      </div>
      <ul className={styles.quality}>
        <li className={styles.qualityVideo}>FullHD</li>
        <li className={classNames(styles.qualityAudio, 'icon-player_volumeMidRegular_16__0')}>Рус</li>
      </ul>
    </div>
  );
};
