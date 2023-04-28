import React, { FC } from 'react';
import styles from './bannerhover.module.css';
import { BlockChart } from 'shared/bisnes/BlockChart';
import { ReitingMovie } from 'shared/bisnes/ReitingMovie';
import { ShortDescription } from 'shared/bisnes/ShortDescription';
import { TopChart } from 'shared/bisnes/TopChart';
import { IFilm } from 'shared/types/IFilm';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface IProps {
  film: IFilm;
}
type props = HTMLAttributes<HTMLDivElement> & IProps;

export const BannerHover: FC<props> = ({ film, className }) => {
  return (
    <div className={classNames(styles.bannerHover, className)}>
      <div className={styles.bannerHoverWrapper}>
        <ul className={styles.bannerHoverList}>
          <li className={classNames(styles.bannerHoverItem, 'icon-favoriteAdd_20__0')}></li>
          <li className={classNames(styles.bannerHoverItem, 'icon-similar_20__0')}></li>
          <li className={classNames(styles.bannerHoverItem, 'icon-rating_20__0')}></li>
          <li className={classNames(styles.bannerHoverItem, 'icon-dislike_20__0')}></li>
        </ul>
        <div className={styles.bannerHoverReiting}>
          <TopChart obj={film} />
          <ReitingMovie grade={film.rating.kp} />
          <BlockChart obj={film.rating} width={35} />
          <ShortDescription obj={film} />
        </div>
      </div>
    </div>
  );
};
