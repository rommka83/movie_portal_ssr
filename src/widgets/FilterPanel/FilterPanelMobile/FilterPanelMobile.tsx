import React, { useState, MouseEvent, useCallback } from 'react';
import styles from './filterpanelmobile.module.css';
import { Modal } from 'shared/ui/Modal';
import { countries, estimates, genres, ratings } from '../constants';
import { useTranslation } from 'react-i18next';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import classNames from 'classnames';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { FilterPanelMobileButtonsBlock } from './FilterPanelMobileButtonsBlock';
import { FilterPanelCarousel } from '../FilterPanelCarousel';
import { FilterPanelMobileSearch } from './FilterPanelMobileSearch';
import { useAppSelector } from 'app/store/hooks';
import { filtersCountSelector } from 'app/store/filterSlice';
import { FilterPanelMobileAccordion } from './FilterPanelMobileAccordion';

export const FilterPanelMobile = React.memo(() => {
  const { t } = useTranslation();
  const [showHeader, setShowHeader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const filtersCount = useAppSelector(filtersCountSelector);

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
    <div className={styles.container}>
      <ButtonOrLink
        className={classNames(styles.openButton, {
          [styles.active]: !!filtersCount,
        })}
        variant='third'
        large
        onClick={onModalShow}
      >
        <span className={classNames(styles.iconFilters, 'icon-filter_16__0')} />
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
                <SectionTitle className={styles.contentTitle}>{t('FilterPanel.Filters')}</SectionTitle>
                <p
                  className={classNames(styles.titleFixed, {
                    [styles.show]: showHeader,
                  })}
                >
                  {t('FilterPanel.Filters')}
                </p>
                <FilterPanelCarousel type='genres' array={genres} />

                <FilterPanelMobileAccordion
                  textButton={t('headerDropdownNavigation.countries')}
                  array={countries}
                  type='countries'
                />

                <FilterPanelMobileAccordion
                  textButton={t('FilterPanel.rating')}
                  array={ratings}
                  type='rating'
                />

                <FilterPanelMobileAccordion
                  textButton={t('FilterPanel.votes')}
                  array={estimates}
                  type='votes'
                />

                <FilterPanelMobileSearch
                  type='director'
                  placeholderText={t('FilterPanel.director')}
                  title={t('FilterPanel.director')}
                />
                <FilterPanelMobileSearch
                  type='actor'
                  placeholderText={t('FilterPanel.actor')}
                  title={t('FilterPanel.actor')}
                />
              </div>
            </div>
            <FilterPanelMobileButtonsBlock onCloseModal={onModalClose} />
          </div>
        </Modal>
      )}
    </div>
  );
});
