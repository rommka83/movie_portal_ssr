import React from 'react';
import styles from './moviebadge.module.css';
import { PosterCards } from 'shared/bisnes/PosterCards/PosterCards';
import { CardTitle } from 'shared/ui/CardTitle/CardTitle';
import { BannerHover } from 'entities/BannerHover';
import { PriceBadge } from 'shared/ui/PriceBadge/PriceBadge';
import { useTranslation } from 'react-i18next';
import AgeRestrictions from 'shared/bisnes/AgeRestrictions';
import { IFilm } from 'shared/types/IFilm';

interface IProps {
  film: IFilm;
}

export function MovieBadge({ film }: IProps) {
  const { i18n } = useTranslation();
  const lng = i18n.language;
  return (
    <article className={styles.wrapper}>
      <div className={styles.banner}>
        <div className={styles.bannerMain}>
          <PosterCards
            src={film.poster.url ? film.poster.url : ''}
            name={
              lng === 'ru' ? film.name : film.enName ? film.enName : film.name
            }
            className={styles.pic}
          />
          <AgeRestrictions age={film.ageRating} className={styles.age} />
        </div>
        <BannerHover film={film} className={styles.bannerHover} />
      </div>
      <CardTitle
        children={
          lng === 'ru'
            ? film.name
            : film.enName === ''
            ? film.name
            : film.enName
        }
        className={styles.title}
      />
      <PriceBadge
        price={film.rating.kp > 7 ? true : false}
        className={styles.statusPrice}
      />
    </article>
  );
}
