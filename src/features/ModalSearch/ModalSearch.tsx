import React, { useCallback, useState } from 'react';
import styles from './modalsearch.module.css';
import classNames from 'classnames';
import { Modal } from 'shared/ui/Modal';
import { FilterDropdownSearch } from 'features/FilterDropdown/FilterDropdownSearch';
import { IFilterDropdownSearch } from 'features/FilterDropdown/FilterDropdownSearch/FilterDropdownSearch';

interface IModalSearch {
  title: string;
}
export function ModalSearch({
  title,
  type,
  placeholderText,
}: IModalSearch & IFilterDropdownSearch) {
  const [show, setShow] = useState(false);
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
        <span className={styles.select}>Выбранное</span>
      </button>
      {show && (
        <Modal>
          <button className={styles.closeButton} onClick={onClickClose}>
            <span
              className={classNames('icon-close_20__0', styles.closeButtonIcon)}
            />
          </button>
          <div className={styles.modalContainer}>
            <FilterDropdownSearch
              type={type}
              placeholderText={placeholderText}
              onSearch={onClickClose}
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
