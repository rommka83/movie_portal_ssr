import React, { useCallback, useRef, useState } from 'react';
import styles from './sortdropdown.module.css';
import { useTranslation } from 'i18n';
import classNames from 'classnames';
import { sortTypes } from './constants';
import { SortDropdownItem } from './SortDropdownItem';
import { useOutsideClick } from 'shared/hooks/useOutsideClick';
import { useAccordionContext } from 'shared/ui/Accordion/AccordionContext';

export const SortDropdown = () => {
  const { t } = useTranslation();
  const [hide, setHide] = useState(false);
  const containerRef = useRef(null);
  const dropdownClose = useAccordionContext();

  const onClose = useCallback(() => {
    setHide(true);
    setTimeout(() => {
      dropdownClose && dropdownClose();
    }, 250);
  }, [dropdownClose]);

  useOutsideClick(containerRef, onClose);

  return (
    <ul
      ref={containerRef}
      className={classNames(styles.sortList, {
        [styles.hide]: hide,
      })}
    >
      <li className={styles.sortListFirstItem}>{t('CatalogPageHeader.Sort')}</li>
      {sortTypes.map((sortType) => (
        <SortDropdownItem key={sortType} sortType={sortType} onCloseSortDropdown={onClose} />
      ))}
    </ul>
  );
};
