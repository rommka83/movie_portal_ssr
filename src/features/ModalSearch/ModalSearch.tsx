import React from 'react';
import styles from './modalsearch.module.css';
import classNames from 'classnames';
import { Modal } from 'shared/ui/Modal';
import { FilterDropdownSearch } from 'features/FilterDropdown/FilterDropdownSearch';
import { IFilterDropdownSearch } from 'features/FilterDropdown/FilterDropdownSearch/FilterDropdownSearch';

interface IModalSearch {
  onClickClose: () => void;
}
export function ModalSearch({ type, placeholderText, onClickClose }: IModalSearch & IFilterDropdownSearch) {
  return (
    <Modal>
      <button className={styles.closeButton} onClick={onClickClose}>
        <span className={classNames('icon-close_20__0', styles.closeButtonIcon)} />
      </button>
      <div className={styles.modalContainer}>
        <FilterDropdownSearch type={type} placeholderText={placeholderText} onSearch={onClickClose} />
      </div>
    </Modal>
  );
}
