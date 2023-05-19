import React, { useCallback } from 'react';
import styles from './filterpanelbutton.module.css';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  addCountriesFilter,
  addInputRangeFilter,
  isCountrySelectedSelector,
  isInputRangeSelectedSelector,
  removeCountriesFilter,
  removeInputRangeFilter,
} from 'app/store/filterSlice';
import classNames from 'classnames';
import { useGenerateParamsString } from 'shared/utils/generatesParamsString';

export type FilterPanelButtonType = 'countries' | 'rating' | 'votes';
interface IFilterButton {
  item: string;
  type: FilterPanelButtonType;
}
export const FilterPanelButton = React.memo(({ item, type }: IFilterButton) => {
  const { t } = useTranslation();
  const generatesParamsString = useGenerateParamsString();
  const dispatch = useAppDispatch();
  const isFilterSelectedSelector =
    type === 'countries' ? isCountrySelectedSelector(item) : isInputRangeSelectedSelector(type, +item);

  const isFilterSelected = useAppSelector(isFilterSelectedSelector);
  const action = useCallback(() => {
    switch (type) {
      case 'countries':
        return isFilterSelected ? removeCountriesFilter(item) : addCountriesFilter(item);
      case 'rating':
      case 'votes':
        return isFilterSelected ? removeInputRangeFilter(type) : addInputRangeFilter({ type, value: +item });
    }
  }, [type, item, isFilterSelected]);

  const onClick = useCallback(() => {
    dispatch(action());
    generatesParamsString({
      isElementSelected: isFilterSelected,
      selectedElement: item,
      type: type,
    });
  }, [dispatch, action, generatesParamsString, isFilterSelected, item, type]);

  const getFilterTitle = useCallback((item: string) => (type === 'countries' ? item : type + item), [type]);

  return (
    <div className={styles.filterButtonContainer}>
      <ButtonOrLink
        className={classNames(styles.filterButton, {
          [styles.active]: isFilterSelected,
        })}
        variant='third'
        large
        onClick={onClick}
      >
        {t(`FilterPanel.${getFilterTitle(item)}`)}
      </ButtonOrLink>
    </div>
  );
});
