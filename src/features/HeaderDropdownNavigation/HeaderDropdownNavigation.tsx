import { MouseEvent, useState } from 'react';
import styles from './headerdropdownnavigation.module.css';
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

export function HeaderDropdownNavigation() {
  const { t } = useTranslation();
  const [offset, setOffset] = useState(0);
  const currentIndex = offset / ROW_CONTENT_HEIGHT;
  const onMouseEnter = (event: MouseEvent<HTMLLIElement>) => {
    const index = event.currentTarget.dataset['index'] ?? 0;
    setOffset(+index * ROW_CONTENT_HEIGHT);
  };
  return (
    <div className={styles.navContainer}>
      <div className={styles.wrapper}>
        <div className={styles.doubleColumn}>
          <CardTitle className={styles.title}>{t('headerDropdownNavigation.genres')}</CardTitle>
          <ul className={styles.filmLinkList}>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.anime')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to='/CatalogPage/биография'>{t('headerDropdownNavigation.biography')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to='/CatalogPage/боевик'>{t('headerDropdownNavigation.actions')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to='/CatalogPage/вестерн'>{t('headerDropdownNavigation.western')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to='/CatalogPage/военные'>{t('headerDropdownNavigation.military')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to='/CatalogPage/детектив'>{t('headerDropdownNavigation.detectives')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.kids')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.documentaries')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to='/CatalogPage/драма'>{t('headerDropdownNavigation.drama')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.play')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.historical')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.comedy')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.shortFilm')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.criminal')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.melodrama')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.music')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.cartoons')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.musical')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.news')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.adventures')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.realTv')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.family')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.sport')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.talkShow')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.thrillers')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.horror')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.fantastic')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.noir')}</Link>
            </li>
            <li className={styles.filmListItem}>
              <Link to=''>{t('headerDropdownNavigation.fantasy')}</Link>
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
                  <Link to=''> {t(`headerDropdownNavigation.${content}`)}</Link>
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
