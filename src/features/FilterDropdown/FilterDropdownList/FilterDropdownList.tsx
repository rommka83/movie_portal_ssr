import React from 'react';
import styles from './filterdropdownlist.module.css';
import classNames from 'classnames';
import { useTranslation } from '../../../i18n';

interface IFilterDropdownList {
  array: string[];
  title: string;
  className?: string;
}
export const FilterDropdownList = React.memo(({ array, title, className }: IFilterDropdownList) => {
  const { t } = useTranslation();
  return (
    <ul className={classNames(styles.filterDropList, className)}>
      {array.map((item) => (
        <li key={item} className={styles.filterDropListItem}>
          <label className={styles.filterDropLabel}>
            <input className={styles.filterDropInput} type="checkbox" />
            <div className={styles.filterDropInputText}>{t(`${title}.${item}`)}</div>
            <div className={styles.filterDropCheckbox}>
              <div className={classNames(styles.checkmark, 'icon-selected_16__0')} />
            </div>
          </label>
        </li>
      ))}
    </ul>
  );
});
