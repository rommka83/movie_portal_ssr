import React, { useCallback } from 'react';
import styles from './filterpaneldesktop.module.css';
import { useTranslation } from 'react-i18next';
import { countries, genres } from '../constants';
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
          <FilterDropdown title='headerMoviesFilter' type='Genres' position='left'>
            <FilterPanelCarousel
              array={genres}
              type='genres'
              carouselContainerClassName={styles.carouselContainer}
              withButton
            />
            <FilterDropdownList
              className={styles.list}
              array={genres}
              title='headerMoviesFilter'
              type='genres'
            />
          </FilterDropdown>

          <FilterDropdown title='FilterPanel' type='Countries' position='left'>
            <FilterPanelCarousel
              array={countries}
              type='countries'
              carouselContainerClassName={styles.carouselContainer}
              withButton
            />

            <FilterDropdownList
              className={styles.list}
              array={countries}
              title='FilterPanel'
              type='countries'
            />
          </FilterDropdown>

          <FilterDropdown title='FilterPanel' type='Rating' position='left' className={styles.dropdownRating}>
            <FilterInputRange
              type='rating'
              startValue='71'
              maxValue='100'
              minValue='61'
              formatter={formatterRating}
              className={styles.inputRating}
            />
          </FilterDropdown>

          <FilterDropdown
            title='FilterPanel'
            type='Estimated'
            position='left'
            className={styles.dropdownVotes}
          >
            <FilterInputRange
              type='votes'
              startValue='300'
              maxValue='1000'
              minValue='200'
              formatter={formatterVotes}
              className={styles.inputRating}
            />
          </FilterDropdown>

          <FilterDropdown
            title='FilterPanel'
            type='Director'
            position='right'
            className={styles.dropdownSearch}
          >
            <FilterDropdownSearch placeholderText={t('FilterPanel.Director')} type='director' />
          </FilterDropdown>

          <FilterDropdown title='FilterPanel' type='Actor' position='right' className={styles.dropdownSearch}>
            <FilterDropdownSearch placeholderText={t('FilterPanel.Actor')} type='actor' />
          </FilterDropdown>
        </div>
        <FilterPanelDesktopResetButton />
      </div>
    </section>
  );
});
