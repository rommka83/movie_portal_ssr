import React from 'react';
import styles from './filterpaneldesktopresetbutton.module.css';
import classNames from 'classnames';
import { useTranslation } from 'i18n';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { filtersCountSelector, resetFilters } from 'app/store/filterSlice';
import { useRouter } from 'next/router';
import { clearParams } from 'shared/utils/generatesParamsString';

export const FilterPanelDesktopResetButton = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const filtersCount = useAppSelector(filtersCountSelector);
  const dispatch = useAppDispatch();
  const onClickReset = () => {
    dispatch(resetFilters());
    clearParams(router);
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
