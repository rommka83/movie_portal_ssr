/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import styles from './filterpanelmobilebuttonsblock.module.css';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import { useTranslation } from 'i18n';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { filtersCountSelector, resetFilters } from 'app/store/filterSlice';
import { useRouter } from 'next/router';
import { applyFilterParams, clearParams } from 'shared/utils/generatesParamsString';

interface IFilterPanelMobileButtonsBlock {
  onCloseModal: () => void;
}
const CATALOG_PAGE_PATH = '/CatalogPage';
export const FilterPanelMobileButtonsBlock = ({ onCloseModal }: IFilterPanelMobileButtonsBlock) => {
  const { t } = useTranslation();
  const router = useRouter();

  const dispatch = useAppDispatch();
  const filtersCount = useAppSelector(filtersCountSelector);
  const onClickReset = useCallback(() => {
    dispatch(resetFilters());
    clearParams(router, router.asPath !== CATALOG_PAGE_PATH);
  }, [router, dispatch]);
  const onApplyClick = useCallback(() => {
    applyFilterParams(router);
    onCloseModal();
  }, [onCloseModal, router]);
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
