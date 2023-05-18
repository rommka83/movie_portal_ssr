import React from 'react';
import styles from './filterdropdownlist.module.css';
import classNames from 'classnames';
import { useTranslation } from 'i18n';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { ChangeEvent } from 'react';
import { FilterDropdownListType } from './FilterDropdownList';
import {
  addCountriesFilter,
  addGenresFilter,
  isCountrySelectedSelector,
  isGenreSelectedSelector,
  removeCountriesFilter,
  removeGenresFilter,
} from 'app/store/filterSlice';
import { useGenerateParamsString } from 'shared/utils/generatesParamsString';

export interface IFilterDropdownListItem {
  title: string;
  item: string;
  type: FilterDropdownListType;
}
export const FilterDropdownListItem = ({ title, item, type }: IFilterDropdownListItem) => {
  const { t } = useTranslation();
  const generatesParamsString = useGenerateParamsString();
  const isGenres = type === 'genres';
  const checkedSelector = isGenres ? isGenreSelectedSelector : isCountrySelectedSelector;
  const checked = useAppSelector(checkedSelector(item));
  const dispatch = useAppDispatch();
  const addAction = isGenres ? addGenresFilter : addCountriesFilter;
  const removeAction = isGenres ? removeGenresFilter : removeCountriesFilter;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentChecked = event.currentTarget.checked;
    if (currentChecked) {
      dispatch(addAction(item));
    } else {
      dispatch(removeAction(item));
    }
    generatesParamsString({
      isElementSelected: checked,
      selectedElement: item,
      type,
    });
  };
  return (
    <li className={styles.filterDropListItem}>
      <label className={styles.filterDropLabel}>
        <input
          className={classNames(styles.filterDropInput, 'visually-hidden')}
          type='checkbox'
          onChange={onChange}
          checked={checked}
        />
        <div className={styles.filterDropInputText}>{t(`${title}.${item}`)}</div>
        <div className={styles.filterDropCheckbox}>
          <span className={classNames(styles.checkmark, 'icon-selected_16__0')} />
        </div>
      </label>
    </li>
  );
};
