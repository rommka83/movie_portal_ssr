import React, { useCallback } from 'react';
import styles from './filterpaneldesktop.module.css';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { countries, genres } from '../constants';
import { FilterDropdown } from 'features/FilterDropdown';
import { FilterDropdownList } from 'features/FilterDropdown/FilterDropdownList';
import { FilterDropdownSearch } from 'features/FilterDropdown/FilterDropdownSearch';
import { InputRange } from 'shared/ui/InputRange';
import { Carousel } from 'shared/ui/Carousel';
import { FilterGenreCard } from 'shared/ui/FilterGenreCard';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import { UseMedia } from 'shared/hooks/useMedia';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { addGenresFilter, filtersSelector } from 'app/store/filterSlice';
import { FilterButton } from './FilterButton';
import { FilterInputRange } from './FilterInputRange';
import { formatterVotes } from 'shared/utils/formatterVotes';

export const FilterPanelDesktop = React.memo(() => {
  const { t } = useTranslation();
  const tablet = UseMedia('(max-width: 900px)');
  const dispatch = useAppDispatch();

  const formatterRating = useCallback((value: string | number) => {
    return (+value / 10).toPrecision(2);
  }, []);

  const onGenreCardClick = (genre: string) => {
    dispatch(addGenresFilter(genre));
  };

  return (
    <section className={styles.filterDesktop}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.plankList}>
          <FilterDropdown
            title='headerMoviesFilter'
            type='Genres'
            position='left'
          >
            <div className={styles.listWrapper}>
              {!tablet && (
                <Carousel
                  className={styles.carousel}
                  withButton
                  scrollMultipleItems
                >
                  {genres.map((genre) => (
                    <FilterGenreCard
                      containerClassName={styles.genreCardContainer}
                      className={styles.card}
                      iconClassName={styles.iconCard}
                      key={genre}
                      genre={genre}
                      caption={t(`headerMoviesFilter.${genre}`)}
                      onClick={onGenreCardClick}
                    />
                  ))}
                </Carousel>
              )}
              <FilterDropdownList
                className={styles.list}
                array={genres}
                title='headerMoviesFilter'
              />
            </div>
          </FilterDropdown>

          <FilterDropdown title='FilterPanel' type='Countries' position='left'>
            <div className={styles.listWrapper}>
              {!tablet && (
                <Carousel className={styles.carousel} withButton>
                  {countries.map((country) => (
                    <FilterButton key={country} title={country} />
                  ))}
                </Carousel>
              )}
            </div>
            <FilterDropdownList
              className={styles.list}
              array={countries}
              title='FilterPanel'
            />
          </FilterDropdown>

          <FilterDropdown
            title='FilterPanel'
            type='Rating'
            position='left'
            className={styles.dropdownRating}
          >
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
            <FilterDropdownSearch
              placeholderText={t('FilterPanel.Director')}
              type='Режиссер'
            />
          </FilterDropdown>

          <FilterDropdown
            title='FilterPanel'
            type='Actor'
            position='right'
            className={styles.dropdownSearch}
          >
            <FilterDropdownSearch
              placeholderText={t('FilterPanel.Actor')}
              type='Актер'
            />
          </FilterDropdown>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.resetButton}>
            <div className={styles.resetButtonContainer}>
              <span
                className={classNames('icon-close_16__0', styles.resetIcon)}
              />
              <span>{t('FilterPanel.ResetFilters')}</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
});
