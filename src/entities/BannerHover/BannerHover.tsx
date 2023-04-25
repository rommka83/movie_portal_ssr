import React, { FC } from 'react';
import styles from './bannerhover.module.css';
import { BlockChart } from 'shared/bisnes/BlockChart';
import { ReitingMovie } from 'shared/bisnes/ReitingMovie';
import { ShortDescription } from 'shared/bisnes/ShortDescription';
import { TopChart } from 'shared/bisnes/TopChart';
import { SvgIcon } from 'shared/ui/SvgIcon';
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
          <li className={styles.bannerHoverItem}>
            <SvgIcon type='Bookmark' size={25} />
          </li>
          <li className={styles.bannerHoverItem}>
            <SvgIcon type='Magic' size={25} />
          </li>
          <li className={styles.bannerHoverItem}>
            <SvgIcon type='Star' size={25} />
          </li>
          <li className={styles.bannerHoverItem}>
            <SvgIcon type='DashCircle' size={25} />
          </li>
        </ul>
        <div className={styles.bannerHoverReiting}>
          {/* <div className={styles.bannerReiting}> */}
          {/* </div> */}

          <TopChart obj={film} />

          <ReitingMovie grade={film.rating.kp} />
          <BlockChart obj={film.rating} width={35} />

          <ShortDescription obj={film} />
        </div>
      </div>
    </div>
  );
};
