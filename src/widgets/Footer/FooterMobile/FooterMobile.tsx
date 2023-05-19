import React from 'react';
import { Link } from 'shared/ui/Link/MyLink';
import styles from './footermobile.module.css';
import { useTranslation } from '../../../i18n';

export const FooterMobile = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.container}>
      <div className={styles.tabBar}>
        <Link to='/' className={styles.tabBarItem}>
          <span className='icon-home_20__0' />
          <span className={styles.linkText}>{t('footer.MyIvi')}</span>
        </Link>
        <Link to='/CatalogPage' className={styles.tabBarItem}>
          <span className='icon-catalog_20__0' />
          <span className={styles.linkText}>{t('footer.Catalog')}</span>
        </Link>
        <Link to='' className={styles.tabBarItem}>
          <span className='icon-search_20__0' />
          <span className={styles.linkText}>{t('footer.Search')}</span>
        </Link>
        <Link to='/Authorization' className={styles.tabBarItem}>
          <span className='icon-avatar_20__0' />
          <span className={styles.linkText}>{t('footer.Profile')}</span>
        </Link>
        <Link to='https://www.ivi.ru/watch/navigation' className={styles.tabBarItem}>
          <span className='icon-more_20__0' />
          <span className={styles.linkText}>{t('footer.More')}</span>
        </Link>
      </div>
    </footer>
  );
};
