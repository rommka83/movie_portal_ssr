import React from 'react';
import styles from './filterdropdownlist.module.css';
import classNames from 'classnames';
import { FilterDropdownListItem } from './FilterDropdownListItem';
import { IGenre } from 'shared/types/IGenre';

interface IFilterDropdownList {
  array: IGenre[];
  title: string;
  className?: string;
  type: FilterDropdownListType;
}

export type FilterDropdownListType = 'countries' | 'genres';
export const FilterDropdownList = React.memo(({ array, title, className, type }: IFilterDropdownList) => {
  return (
    <ul className={classNames(styles.filterDropList, className)}>
      {array.map((item) => (
        <FilterDropdownListItem key={item.id} title={title} item={item.name} type={type} />
      ))}
    </ul>
  );
});
