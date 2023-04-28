import React from 'react';
import styles from './filterbutton.module.css';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'app/store/hooks';
import { addCountriesFilter } from 'app/store/filterSlice';

interface IFilterButton {
  key: string;
  title: string;
}
export const FilterButton = React.memo(({ key, title }: IFilterButton) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(addCountriesFilter(title));
  };
  return (
    <div className={styles.countriesButtonContainer} key={key}>
      <ButtonOrLink
        className={styles.countriesButton}
        variant='third'
        large
        onClick={onClick}
      >
        {t(`FilterPanel.${title}`)}
      </ButtonOrLink>
    </div>
  );
});
