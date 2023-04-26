import React, { useState, MouseEvent, useCallback } from 'react';
import styles from './filterpanelmobile.module.css';
import { Modal } from 'shared/ui/Modal';
import { FilterGenreCard } from 'shared/ui/FilterGenreCard';
import { countries, estimates, genres, ratings } from '../constants';
import { useTranslation } from '../../../i18n';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import { FilterDropdownSearch } from 'features/FilterDropdown/FilterDropdownSearch';
import { Carousel } from 'shared/ui/Carousel';
import { Accordion } from 'shared/ui/Accordion';
import classNames from 'classnames';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';

export const FilterPanelMobile = React.memo(() => {
  const { t } = useTranslation();
  const [showHeader, setShowHeader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onContentScroll = (event: MouseEvent<HTMLDivElement>) => {
    const scrollTop = event.currentTarget.scrollTop;
    if (scrollTop > 0) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  const onModalClose = () => {
    setShowModal(false);
  };

  const onModalShow = useCallback(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      <ButtonOrLink
        className={styles.openButton}
        variant='third'
        large
        onClick={onModalShow}
      >
        <span
          className={classNames(styles.iconFilters, 'icon-filter_16__0')}
        ></span>
        {t('FilterPanel.Filters')}
      </ButtonOrLink>
      {showModal && (
        <Modal className={styles.modal}>
          <button className={styles.closeButton} onClick={onModalClose}>
            <span
              className={classNames('icon-close_20__0', styles.closeButtonIcon)}
            />
          </button>

          <div className={styles.filterPanelMobile}>
            <div className={styles.filterWrapper} onScroll={onContentScroll}>
              <div className={styles.contentScroll}>
                <SectionTitle className={styles.contentTitle}>
                  {t('FilterPanel.Filters')}
                </SectionTitle>
                <p
                  className={classNames(styles.titleFixed, {
                    [styles.show]: showHeader,
                  })}
                >
                  {t('FilterPanel.Filters')}
                </p>
                <Carousel
                  className={styles.carousel}
                  title={t('headerMoviesFilter.Genres')}
                >
                  {genres.map((genre) => (
                    <FilterGenreCard
                      key={genre}
                      genre={genre}
                      caption={t(`headerMoviesFilter.${genre}`)}
                    ></FilterGenreCard>
                  ))}
                </Carousel>

                <Accordion textButton={t('headerMoviesFilter.Countries')}>
                  <Carousel className={styles.carousel}>
                    {countries.map((country) => (
                      <div
                        className={styles.countriesButtonContainer}
                        key={country}
                      >
                        <ButtonOrLink
                          className={styles.countriesButton}
                          variant='third'
                          large
                        >
                          {t(`FilterPanel.${country}`)}
                        </ButtonOrLink>
                      </div>
                    ))}
                  </Carousel>
                </Accordion>

                <Accordion textButton={t('FilterPanel.Rating')}>
                  <Carousel className={styles.carousel}>
                    {ratings.map((rating) => (
                      <div
                        className={styles.countriesButtonContainer}
                        key={rating}
                      >
                        <ButtonOrLink
                          className={styles.countriesButton}
                          variant='third'
                          large
                        >
                          {t(`FilterPanel.${rating}`)}
                        </ButtonOrLink>
                      </div>
                    ))}
                  </Carousel>
                </Accordion>

                <Accordion textButton={t('FilterPanel.Estimated')}>
                  <Carousel className={styles.carousel}>
                    {estimates.map((estimate) => (
                      <div
                        className={styles.countriesButtonContainer}
                        key={estimate}
                      >
                        <ButtonOrLink
                          className={styles.countriesButton}
                          variant='third'
                          large
                        >
                          {t(`FilterPanel.${estimate}`)}
                        </ButtonOrLink>
                      </div>
                    ))}
                  </Carousel>
                </Accordion>

                <Accordion textButton={t('FilterPanel.Director')}>
                  <FilterDropdownSearch
                    placeholderText={t('FilterPanel.Director')}
                  />
                </Accordion>

                <Accordion textButton={t('FilterPanel.Actor')}>
                  <FilterDropdownSearch
                    placeholderText={t('FilterPanel.Actor')}
                  />
                </Accordion>
              </div>
            </div>

            <div className={styles.buttonsBlock}>
              <ButtonOrLink
                className={styles.filterButton}
                variant='primary'
                large
              >
                {t('FilterPanel.ShowResults')}
              </ButtonOrLink>
              <ButtonOrLink
                className={styles.filterButton}
                variant='primary'
                transparent
                large
              >
                {t('FilterPanel.ResetFilters')}
              </ButtonOrLink>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
});
