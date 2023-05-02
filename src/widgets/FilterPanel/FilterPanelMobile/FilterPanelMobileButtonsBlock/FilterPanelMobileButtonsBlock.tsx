import React, { useCallback } from 'react';
import styles from './filterpanelmobilebuttonsblock.module.css';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import { useTranslation } from 'i18n';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { filtersCountSelector, resetFilters } from 'app/store/filterSlice';

interface IFilterPanelMobileButtonsBlock {
  onCloseModal: () => void;
}
export const FilterPanelMobileButtonsBlock = ({ onCloseModal }: IFilterPanelMobileButtonsBlock) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const filtersCount = useAppSelector(filtersCountSelector);
  const onClickReset = useCallback(() => {
    dispatch(resetFilters());
  }, []);
  const onApplyClick = useCallback(() => {
    onCloseModal();
  }, [onCloseModal]);
  return (
    <div className={styles.buttonsBlock}>
      <ButtonOrLink
        className={styles.filterButton}
        variant="primary"
        large
        disabled={!filtersCount}
        onClick={onApplyClick}
      >
        {t('FilterPanel.ShowResults')}
      </ButtonOrLink>
      <ButtonOrLink
        className={styles.filterButton}
        variant="primary"
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
