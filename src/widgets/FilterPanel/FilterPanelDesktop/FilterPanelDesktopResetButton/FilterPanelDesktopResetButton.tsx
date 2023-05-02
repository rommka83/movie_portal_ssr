import React from 'react';
import styles from './filterpaneldesktopresetbutton.module.css';
import classNames from 'classnames';
import { useTranslation } from 'i18n';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { filtersCountSelector, resetFilters } from 'app/store/filterSlice';

export const FilterPanelDesktopResetButton = () => {
  const { t } = useTranslation();
  const filtersCount = useAppSelector(filtersCountSelector);
  const dispatch = useAppDispatch();
  const onClickReset = () => {
    dispatch(resetFilters());
  };

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.resetButton} disabled={!filtersCount} onClick={onClickReset}>
        <div className={styles.resetButtonContainer}>
          <span className={classNames('icon-close_16__0', styles.resetIcon)} />
          <span>{t('FilterPanel.ResetFilters')}</span>
        </div>
      </button>
    </div>
  );
};
