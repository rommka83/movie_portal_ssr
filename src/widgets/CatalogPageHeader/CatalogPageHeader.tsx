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
  showSelectedFilters?: boolean;
}
export const CatalogPageHeader = ({ titleText, showSelectedFilters }: ICatalogPageHeader) => {
  const { t } = useTranslation();
  const genres = useAppSelector(genresSelectedSelector(t));
  const countries = useAppSelector(countriesSelectedSelector(t));

  return (
    <div className={styles.containerOuter}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>{titleText}</h1>
          {showSelectedFilters && (
            <p className={styles.filtersText}>
              <span className={styles.filtersGenres}>
                {genres.length ? genres.join(', ') : t(`CatalogPageHeader.AllGenres`)}
              </span>
              {genres.length && countries.length ? ', ' : null}
              <span className={styles.filtersCountries}>
                {countries.length ? countries.join(', ') : `, ${t(`CatalogPageHeader.AllCountries`)}`}
              </span>
            </p>
          )}
        </div>

        {genres.length <= 1 && <ExpandableBlock text={t(`CatalogPageHeader.MovieText`)} />}
        <FilterPanelMobile />
      </div>
    </div>
  );
};
