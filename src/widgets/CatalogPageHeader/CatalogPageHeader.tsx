import React from 'react';
import styles from './catalogpageheader.module.css';
import { ExpandableBlock } from 'shared/ui/ExpandableBlock';
import classNames from 'classnames';
import { FilterPanelMobile } from 'widgets/FilterPanel';
import { useTranslation } from 'i18n';
import { useAppSelector } from 'app/store/hooks';
import { countriesSelectedSelector, genresSelectedSelector } from 'app/store/filterSlice';

interface ICatalogPageHeader {
  titleText: string;
}
export const CatalogPageHeader = ({ titleText }: ICatalogPageHeader) => {
  const { t } = useTranslation();
  const genres = useAppSelector(genresSelectedSelector(t));
  const countries = useAppSelector(countriesSelectedSelector(t));
  return (
    <div className={styles.containerOuter}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>{titleText}</h1>
          <p className={styles.filtersText}>
            <span className={styles.filtersGenres}>{genres.join(', ')}</span>
            {genres.length && countries.length ? ', ' : null}
            <span className={styles.filtersCountries}>{countries.join(', ')}</span>
          </p>
        </div>

        <ExpandableBlock text={t(`CatalogPageHeader.MovieText`)} />
        <FilterPanelMobile />
      </div>
    </div>
  );
};
