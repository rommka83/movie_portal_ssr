import React from 'react';
import styles from './sortdropdown.module.css';
import classNames from 'classnames';
import { useTranslation } from 'i18n';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  addSortTypesSort,
  removeSortTypesSort,
  sortTypesSelectedSelector,
} from 'app/store/filterSlice';

interface ISortDropdownItem {
  sortType: string;
  onCloseSortDropdown: () => void;
}
export const SortDropdownItem = React.memo(
  ({ sortType, onCloseSortDropdown }: ISortDropdownItem) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const sortTypesSelected = useAppSelector(sortTypesSelectedSelector);
    const onClickSelect = () => {
      if (sortTypesSelected === sortType) {
        dispatch(removeSortTypesSort());
      } else {
        dispatch(addSortTypesSort(sortType));
        onCloseSortDropdown();
      }
    };
    return (
      <li
        className={classNames(styles.sortListItem, {
          [styles.active]: sortTypesSelected === sortType,
        })}
        onClick={onClickSelect}
      >
        {t(`CatalogPageHeader.${sortType}`)}
      </li>
    );
  },
);
