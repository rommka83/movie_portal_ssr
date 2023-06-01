import React from 'react';
import styles from './catalogpageheader.module.css';
import { ExpandableBlock } from 'shared/ui/ExpandableBlock';
import classNames from 'classnames';
import { FilterPanelMobile } from 'widgets/FilterPanel';
import { useTranslation } from 'i18n';
import { useAppSelector } from 'app/store/hooks';
import { getSelectedFilterSelector } from 'app/store/filterSlice';

interface ICatalogPageHeader {
  showSelectedFilters?: boolean;
}
export const CatalogPageHeader = ({ showSelectedFilters }: ICatalogPageHeader) => {
  const { t } = useTranslation();
  const genres = useAppSelector(getSelectedFilterSelector('genres', t));
  const arrayFromGenres = typeof genres === 'string' && !!genres.length ? genres.split(',') : [];
  const countries = useAppSelector(getSelectedFilterSelector('countries', t));
  const ExpandableBlockText = !!arrayFromGenres.length ? arrayFromGenres[0] : 'MovieText';
  const titleText =
    !!arrayFromGenres.length && arrayFromGenres.length <= 1 ? arrayFromGenres[0] : 'MoviesWatchOnline';

  return (
    <div className={styles.containerOuter}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>{t(`headerDropdownNavigation.${titleText}`)}</h1>
          {showSelectedFilters && (
            <p className={styles.filtersText}>
              <span className={styles.filtersGenres}>
                {typeof genres === 'string' ? genres : t(`CatalogPageHeader.AllGenres`)}
              </span>
              {genres && countries ? ', ' : null}
              <span className={styles.filtersCountries}>
                {typeof countries === 'string' ? countries : `, ${t(`CatalogPageHeader.AllCountries`)}`}
              </span>
            </p>
          )}
        </div>

        {arrayFromGenres.length <= 1 && (
          <ExpandableBlock text={t(`CatalogPageHeader.${ExpandableBlockText}`)} />
        )}
        <FilterPanelMobile />
      </div>
    </div>
  );
};
