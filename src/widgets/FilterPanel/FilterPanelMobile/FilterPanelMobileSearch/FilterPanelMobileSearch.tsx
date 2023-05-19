import React, { useCallback, useState } from 'react';
import styles from './filterpanelmobilesearch.module.css';
import classNames from 'classnames';
import { ModalSearch } from 'features/ModalSearch';
import { IFilterDropdownSearch } from 'features/FilterDropdown/FilterDropdownSearch/FilterDropdownSearch';
import { personSelector } from 'app/store/filterSlice';
import { useAppSelector } from 'app/store/hooks';

interface IFilterPanelMobileSearch {
  title: string;
}
export const FilterPanelMobileSearch = ({
  title,
  type,
  placeholderText,
}: IFilterPanelMobileSearch & IFilterDropdownSearch) => {
  const [show, setShow] = useState(false);
  const selectedPerson = useAppSelector(personSelector(type));
  const onClickOpen = () => {
    setShow(true);
  };
  const onClickClose = useCallback(() => {
    setShow(false);
  }, []);
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClickOpen}>
        <p className={styles.buttonText}>
          {title}
          <span className={classNames('icon-search_20__0', styles.icon)} />
        </p>
        <span className={styles.select}>{selectedPerson}</span>
      </button>
      {show && <ModalSearch onClickClose={onClickClose} type={type} placeholderText={placeholderText} />}
    </div>
  );
};
