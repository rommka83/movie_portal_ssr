import { MouseEvent, useState } from 'react';
import styles from './headerdropdownnavigation.module.css';
import { CardTitle } from 'shared/ui/CardTitle/CardTitle';
import { useTranslation } from '../../i18n';
import { Link } from 'shared/ui/Link/MyLink';
import classNames from 'classnames';
import { genresId } from 'widgets/FilterPanel/constants';
import { useHeaderDropdownContext } from 'widgets/Header/HeaderDropdown/HeaderDropdownContext';

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
  const onDropdownClose = useHeaderDropdownContext();
  const onDropdownCloseHandler = () => {
    onDropdownClose && onDropdownClose();
  };
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
            {genresId.map((genre) => (
              <li className={styles.filmListItem} key={genre.id} onClick={onDropdownCloseHandler}>
                <Link to={`/CatalogPage/${genre.name}`}>{t(`headerDropdownNavigation.${genre.name}`)}</Link>
              </li>
            ))}
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
