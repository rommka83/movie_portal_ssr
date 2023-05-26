import styles from './headernav.module.css';
import Link from 'shared/ui/Link';
import { MouseEvent } from 'react';
import { useTranslation } from '../../i18n';
import classNames from 'classnames';
import { HeaderDropdownType } from 'widgets/Header/Header';

interface IHeaderNav {
  onMouseEnter: (event: MouseEvent<HTMLLIElement>) => void;
  onMouseLeave: (event: MouseEvent<HTMLLIElement>) => void;
  onItemClick: (event: MouseEvent<HTMLLIElement>) => void;
  type: HeaderDropdownType | null;
}
export function HeaderNav({ onMouseEnter, onMouseLeave, type, onItemClick }: IHeaderNav) {
  const { t } = useTranslation();
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to='/'>{t('header.MyIvi')}</Link>
        </li>
        <li className={styles.item}>
          <Link to='https://www.ivi.ru/new'>{t('header.WhatsNew')}</Link>
        </li>
        <li
          data-type='movies'
          className={classNames(styles.item, {
            [styles.active]: type === 'movies',
          })}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onItemClick}
        >
          <Link to='/CatalogPage'>{t('header.Movies')}</Link>
        </li>
        <li className={styles.item}>
          <Link to='https://www.ivi.ru/series'>{t('header.Series')}</Link>
        </li>
        <li className={styles.item}>
          <Link to='https://www.ivi.ru/animation'>{t('header.Cartoons')}</Link>
        </li>
        <li className={styles.item}>
          <Link to='https://www.ivi.ru/tvchannels'>{t('header.TvChannels')}</Link>
        </li>
      </ul>
    </nav>
  );
}
