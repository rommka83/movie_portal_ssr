import React, { useState, MouseEvent, useCallback } from 'react';
import styles from './filterpanelmobile.module.css';
import { Modal } from 'shared/ui/Modal';
import { FilterGenreCard } from 'shared/ui/FilterGenreCard';
import { countries, estimates, genres, ratings } from '../constants';
import { useTranslation } from 'react-i18next';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import { Carousel } from 'shared/ui/Carousel';
import { Accordion } from 'shared/ui/Accordion';
import classNames from 'classnames';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { ModalSearch } from 'features/ModalSearch';
import { addGenresFilter } from 'app/store/filterSlice';
import { useAppDispatch } from 'app/store/hooks';

export const FilterPanelMobile = React.memo(() => {
  const { t } = useTranslation();
  const [showHeader, setShowHeader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

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

  const onGenreCardClick = (genre: string) => {
    dispatch(addGenresFilter(genre));
  };

  return (
    <>
      <ButtonOrLink className={styles.openButton} variant="third" large onClick={onModalShow}>
        <span className={classNames(styles.iconFilters, 'icon-filter_16__0')}></span>
        {t('FilterPanel.Filters')}
      </ButtonOrLink>
      {showModal && (
        <Modal className={styles.modal}>
          <button className={styles.closeButton} onClick={onModalClose}>
            <span className={classNames('icon-close_20__0', styles.closeButtonIcon)} />
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
                <Carousel className={styles.carousel} title={t('headerMoviesFilter.Genres')}>
                  {genres.map((genre) => (
                    <FilterGenreCard
                      key={genre}
                      genre={genre}
                      caption={t(`headerMoviesFilter.${genre}`)}
                      onClick={onGenreCardClick}
                    />
                  ))}
                </Carousel>

                <Accordion textButton={t('headerMoviesFilter.Countries')}>
                  <Carousel className={styles.carousel}>
                    {countries.map((country) => (
                      <div className={styles.countriesButtonContainer} key={country}>
                        <ButtonOrLink className={styles.countriesButton} variant="third" large>
                          {t(`FilterPanel.${country}`)}
                        </ButtonOrLink>
                      </div>
                    ))}
                  </Carousel>
                </Accordion>

                <Accordion textButton={t('FilterPanel.Rating')}>
                  <Carousel className={styles.carousel}>
                    {ratings.map((rating) => (
                      <div className={styles.countriesButtonContainer} key={rating}>
                        <ButtonOrLink className={styles.countriesButton} variant="third" large>
                          {t(`FilterPanel.${rating}`)}
                        </ButtonOrLink>
                      </div>
                    ))}
                  </Carousel>
                </Accordion>

                <Accordion textButton={t('FilterPanel.Estimated')}>
                  <Carousel className={styles.carousel}>
                    {estimates.map((estimate) => (
                      <div className={styles.countriesButtonContainer} key={estimate}>
                        <ButtonOrLink className={styles.countriesButton} variant="third" large>
                          {t(`FilterPanel.${estimate}`)}
                        </ButtonOrLink>
                      </div>
                    ))}
                  </Carousel>
                </Accordion>

                <ModalSearch
                  type="Режиссер"
                  placeholderText={t('FilterPanel.Director')}
                  title={t('FilterPanel.Director')}
                />

                <ModalSearch
                  type="Актер"
                  placeholderText={t('FilterPanel.Actor')}
                  title={t('FilterPanel.Actor')}
                />
              </div>
            </div>

            <div className={styles.buttonsBlock}>
              <ButtonOrLink className={styles.filterButton} variant="primary" large>
                {t('FilterPanel.ShowResults')}
              </ButtonOrLink>
              <ButtonOrLink className={styles.filterButton} variant="primary" transparent large>
                {t('FilterPanel.ResetFilters')}
                <div className={styles.filtersCounter}>3</div>
              </ButtonOrLink>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
});
