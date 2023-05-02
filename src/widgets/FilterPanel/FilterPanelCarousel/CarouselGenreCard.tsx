import React, { useCallback } from 'react';
import styles from './filterpanelcarousel.module.css';
import { FilterGenreCard } from 'shared/ui/FilterGenreCard';
import {
  addGenresFilter,
  isGenreSelectedSelector,
  removeGenresFilter,
} from 'app/store/filterSlice';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { useTranslation } from 'i18n';
import classNames from 'classnames';

interface ICarouselGenreCard {
  genre: string;
}
export const CarouselGenreCard = ({ genre }: ICarouselGenreCard) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isGenreSelected = useAppSelector(isGenreSelectedSelector(genre));
  const onGenreCardClick = useCallback(
    (genre: string) => {
      const action = !isGenreSelected ? addGenresFilter : removeGenresFilter;
      dispatch(action(genre));
    },
    [isGenreSelected, dispatch],
  );
  return (
    <FilterGenreCard
      containerClassName={styles.genreCardContainer}
      className={classNames(styles.card, {
        [styles.active]: isGenreSelected,
      })}
      iconClassName={styles.iconCard}
      genre={genre}
      caption={t(`headerMoviesFilter.${genre}`)}
      onClick={onGenreCardClick}
    />
  );
};
