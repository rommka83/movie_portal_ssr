import { MouseEvent, useState } from 'react';
import styles from './headermoviesfilter.module.css';
import { CardTitle } from 'shared/ui/CardTitle/CardTitle';
import { useTranslation } from '../../i18n';
import { Link } from 'shared/ui/Link/MyLink';
import classNames from 'classnames';

const sideContent = [
  'New',
  'Collections',
  'IviRating',
  'Trailers',
  'WhatToSee',
  'MoviesInHD',
  'IvisChoice',
  'SubscriptionNews',
];

const ROW_CONTENT_HEIGHT = 28;

export function HeaderMoviesFilter() {
  const { t } = useTranslation();
  const [offset, setOffset] = useState(0);
  const currentIndex = offset / ROW_CONTENT_HEIGHT;
  const onMouseEnter = (event: MouseEvent<HTMLLIElement>) => {
    const index = event.currentTarget.dataset['index'] ?? 0;
    setOffset(+index * ROW_CONTENT_HEIGHT);
  };
  return (
    <div className={styles.filterContainer}>
      <div className={styles.wrapper}>
        <div className={styles.doubleColumn}>
          <CardTitle className={styles.title}>{t('headerMoviesFilter.Genres')}</CardTitle>
          <ul className={styles.filmLinkList}>
            <li className={styles.filmListItem}>
              <Link to='/CatalogPage/биография'>{t('headerMoviesFilter.biography')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to='/CatalogPage/боевик'>{t('headerMoviesFilter.actions')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to='/CatalogPage/вестерн'>{t('headerMoviesFilter.western')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to='/CatalogPage/военные'>{t('headerMoviesFilter.military')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to='/CatalogPage/детектив'>{t('headerMoviesFilter.detectives')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.family')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.kids')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.documentaries')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to='/CatalogPage/драма'>{t('headerMoviesFilter.drama')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.historical')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.musical')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.comedy')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.criminal')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.melodrama')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.cartoons')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.adventures')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.sport')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.thrillers')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.horror')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.fantastic')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.fantasy')}</Link>
            </li>
          </ul>
        </div>
        <div className={styles.singleColumn}>
          <CardTitle className={styles.title}>{t('headerMoviesFilter.Countries')}</CardTitle>
          <ul className={styles.singleColumnList}>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.Russians')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.Foreign')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.SovietCinema')}</Link>
            </li>
          </ul>

          <CardTitle className={styles.title}>{t('headerMoviesFilter.Years')}</CardTitle>
          <ul className={styles.singleColumnList}>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.Movies2023')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.Movies2022')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.Movies2021')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerMoviesFilter.Movies2020')}</Link>
            </li>
          </ul>
        </div>
        <div className={styles.sideContent}>
          <div className={styles.sideContentWrapper}>
            <ul className={styles.singleColumnList}>
              {sideContent.map((content, index) => (
                <li
                  data-index={index}
                  key={content}
                  className={classNames(styles.filmListItem, {
                    [styles.active]: currentIndex === index,
                  })}
                  onMouseEnter={onMouseEnter}
                >
                  <Link to=''> {t(`headerMoviesFilter.${content}`)}</Link>
                </li>
              ))}
            </ul>
            <div className={styles.gutter}>
              <div className={styles.gutterStripe} style={{ transform: `translateY(${offset}px)` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
