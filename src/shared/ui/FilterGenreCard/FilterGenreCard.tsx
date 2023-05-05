import React from 'react';
import styles from './filtergenrecard.module.css';
import classNames from 'classnames';
interface IFilterGenreCard {
  caption: string;
  genre: string;
  className?: string;
  iconClassName?: string;
  containerClassName?: string;
  onClick?: (genre: string) => void;
}
export const FilterGenreCard = React.memo(
  ({ caption, genre, className, iconClassName, containerClassName, onClick }: IFilterGenreCard) => {
    const onClickHandler = () => {
      onClick && onClick(genre);
    };
    return (
      <div className={classNames(styles.container, containerClassName)} onClick={onClickHandler}>
        <div className={classNames(styles.containerInner, className)}>
          <div className={classNames(styles.icon, `icon-genre_${genre}_24__0`, iconClassName)} />
          <span className={styles.caption}>{caption}</span>
        </div>
      </div>
    );
  },
);
