/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import styles from './filterpanelmobilebuttonsblock.module.css';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import { useTranslation } from 'i18n';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { filtersCountSelector, resetFilters } from 'app/store/filterSlice';
import { useRouter } from 'next/router';
import { clearParams } from 'shared/utils/generatesParamsString';

interface IFilterPanelMobileButtonsBlock {
  onCloseModal: () => void;
}
export const FilterPanelMobileButtonsBlock = ({ onCloseModal }: IFilterPanelMobileButtonsBlock) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const filtersCount = useAppSelector(filtersCountSelector);
  const onClickReset = useCallback(() => {
    dispatch(resetFilters());
    clearParams(router);
  }, [router, dispatch]);
  const onApplyClick = useCallback(() => {
    onCloseModal();
  }, [onCloseModal]);
  return (
    <div className={styles.buttonsBlock}>
      <ButtonOrLink
        className={styles.filterButton}
        variant='primary'
        large
        disabled={!filtersCount}
        onClick={onApplyClick}
      >
        {t('FilterPanel.ShowResults')}
      </ButtonOrLink>
      <ButtonOrLink
        className={styles.filterButton}
        variant='primary'
        transparent
        large
        onClick={onClickReset}
      >
        {t('FilterPanel.ResetFilters')}
        {!!filtersCount && <div className={styles.filtersCounter}>{filtersCount}</div>}
      </ButtonOrLink>
    </div>
  );
};
