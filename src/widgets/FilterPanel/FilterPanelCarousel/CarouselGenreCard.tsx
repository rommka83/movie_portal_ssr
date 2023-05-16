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
import { useRouter } from 'next/router';
import { generatesParamsString } from 'shared/utils/generatesParamsString';

interface ICarouselGenreCard {
  genre: string;
}
export const CarouselGenreCard = ({ genre }: ICarouselGenreCard) => {
  const router = useRouter();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isGenreSelected = useAppSelector(isGenreSelectedSelector(genre));

  const onGenreCardClick = useCallback(
    (genre: string) => {
      const action = !isGenreSelected ? addGenresFilter : removeGenresFilter;
      dispatch(action(genre));
      generatesParamsString({
        router,
        isElementSelected: isGenreSelected,
        selectedElement: genre,
        type: 'genre',
      });
    },
    [isGenreSelected, dispatch, router, genre],
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
