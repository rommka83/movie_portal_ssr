import React, { useCallback } from 'react';
import styles from './filterpaneldesktop.module.css';
import classNames from 'classnames';
import { useTranslation } from '../../../i18n';
import { countries, genres } from '../constants';
import { FilterDropdown } from 'features/FilterDropdown';
import { FilterDropdownList } from 'features/FilterDropdown/FilterDropdownList';
import { FilterDropdownSearch } from 'features/FilterDropdown/FilterDropdownSearch';
import { InputRange } from 'shared/ui/InputRange';
import { Carousel } from 'shared/ui/Carousel';
import { FilterGenreCard } from 'shared/ui/FilterGenreCard';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import { UseMedia } from 'shared/hooks/useMedia';

export const FilterPanelDesktop = React.memo(() => {
  const { t } = useTranslation();
  const tablet = UseMedia('(max-width: 900px)');
  const formatterRating = useCallback((value: string | number) => {
    return +value / 10;
  }, []);
  const formatterVotes = useCallback((value: string | number) => {
    return `${value} к`;
  }, []);

  return (
    <section className={styles.filterDesktop}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.plankList}>
          <FilterDropdown title="headerMoviesFilter" type="Genres" position="left">
            <div className={styles.listWrapper}>
              {!tablet && (
                <Carousel className={styles.carousel} withButton scrollMultipleItems>
                  {genres.map((genre) => (
                    <FilterGenreCard
                      containerClassName={styles.genreCardContainer}
                      className={styles.card}
                      iconClassName={styles.iconCard}
                      key={genre}
                      genre={genre}
                      caption={t(`headerMoviesFilter.${genre}`)}
                    ></FilterGenreCard>
                  ))}
                </Carousel>
              )}
              <FilterDropdownList
                className={styles.list}
                array={genres}
                title="headerMoviesFilter"
              />
            </div>
          </FilterDropdown>

          <FilterDropdown title="FilterPanel" type="Countries" position="left">
            <div className={styles.listWrapper}>
              {!tablet && (
                <Carousel className={styles.carousel} withButton>
                  {countries.map((country) => (
                    <div className={styles.countriesButtonContainer} key={country}>
                      <ButtonOrLink className={styles.countriesButton} variant="third" large>
                        {t(`FilterPanel.${country}`)}
                      </ButtonOrLink>
                    </div>
                  ))}
                </Carousel>
              )}
            </div>
            <FilterDropdownList className={styles.list} array={countries} title="FilterPanel" />
          </FilterDropdown>

          <FilterDropdown
            title="FilterPanel"
            type="Rating"
            position="left"
            className={styles.dropdownRating}
          >
            <InputRange
              startValue="71"
              maxValue="100"
              minValue="61"
              formatter={formatterRating}
              className={styles.inputRating}
            />
          </FilterDropdown>

          <FilterDropdown
            title="FilterPanel"
            type="Estimated"
            position="left"
            className={styles.dropdownVotes}
          >
            <InputRange
              startValue="300"
              maxValue="1000"
              minValue="200"
              formatter={formatterVotes}
              className={styles.inputRating}
            />
          </FilterDropdown>

          <FilterDropdown
            title="FilterPanel"
            type="Director"
            position="right"
            className={styles.dropdownSearch}
          >
            <FilterDropdownSearch placeholderText={t('FilterPanel.Director')} />
          </FilterDropdown>

          <FilterDropdown
            title="FilterPanel"
            type="Actor"
            position="right"
            className={styles.dropdownSearch}
          >
            <FilterDropdownSearch placeholderText={t('FilterPanel.Actor')} />
          </FilterDropdown>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.resetButton}>
            <div className={styles.resetButtonContainer}>
              <span className={classNames('icon-close_16__0', styles.resetIcon)} />
              <span>{t('FilterPanel.ResetFilters')}</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
});
