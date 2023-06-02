import React, { useCallback } from 'react';
import styles from './filterpaneldesktop.module.css';
import { useTranslation } from 'react-i18next';
import { countriesId, genresId } from '../constants';
import { FilterDropdown } from 'features/FilterDropdown';
import { FilterDropdownList } from 'features/FilterDropdown/FilterDropdownList';
import { FilterDropdownSearch } from 'features/FilterDropdown/FilterDropdownSearch';
import { FilterInputRange } from './FilterInputRange';
import { formatterVotes } from 'shared/utils/formatterVotes';
import { FilterPanelCarousel } from '../FilterPanelCarousel';
import { FilterPanelDesktopResetButton } from './FilterPanelDesktopResetButton';

export const FilterPanelDesktop = React.memo(() => {
  const { t } = useTranslation();
  const formatterRating = useCallback((value: string | number) => {
    return (+value / 10).toPrecision(2);
  }, []);

  return (
    <section className={styles.filterDesktop}>
      <div className={styles.container}>
        <div className={styles.plankList}>
          <FilterDropdown title='headerDropdownNavigation' type='genres' position='left'>
            <FilterPanelCarousel
              array={genresId}
              type='genres'
              carouselContainerClassName={styles.carouselContainer}
              withButton
            />
            <FilterDropdownList
              className={styles.list}
              array={genresId}
              title='headerDropdownNavigation'
              type='genres'
            />
          </FilterDropdown>

          <FilterDropdown title='FilterPanel' type='countries' position='left'>
            <FilterPanelCarousel
              array={countriesId}
              type='countries'
              carouselContainerClassName={styles.carouselContainer}
              withButton
            />

            <FilterDropdownList
              className={styles.list}
              array={countriesId}
              title='FilterPanel'
              type='countries'
            />
          </FilterDropdown>

          <FilterDropdown title='FilterPanel' type='rating' position='left' className={styles.dropdownRating}>
            <FilterInputRange
              type='rating'
              startValue='71'
              maxValue='100'
              minValue='61'
              formatter={formatterRating}
              className={styles.inputRating}
            />
          </FilterDropdown>

          <FilterDropdown title='FilterPanel' type='votes' position='left' className={styles.dropdownVotes}>
            <FilterInputRange
              type='votes'
              startValue='400'
              maxValue='1000'
              minValue='300'
              formatter={formatterVotes}
              className={styles.inputRating}
            />
          </FilterDropdown>

          <FilterDropdown
            title='FilterPanel'
            type='director'
            position='right'
            className={styles.dropdownSearch}
          >
            <FilterDropdownSearch placeholderText={t('FilterPanel.director')} type='director' />
          </FilterDropdown>

          <FilterDropdown title='FilterPanel' type='actor' position='right' className={styles.dropdownSearch}>
            <FilterDropdownSearch placeholderText={t('FilterPanel.actor')} type='actor' />
          </FilterDropdown>
        </div>
        <FilterPanelDesktopResetButton />
      </div>
    </section>
  );
});
