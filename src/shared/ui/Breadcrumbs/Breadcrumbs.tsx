import React from 'react';
import styles from './breadcrumbs.module.css';
import Link from 'next/link';
import classNames from 'classnames';
import { useTranslation } from 'i18n';
import { Back } from '../Back/Back';

interface IBreadcrumbs {
  crumbs: { title: string; link?: string }[];
  className?: string;
}
export const Breadcrumbs = React.memo(({ crumbs, className }: IBreadcrumbs) => {
  const { t } = useTranslation();
  return (
    <>
      <ul className={classNames(styles.crumbsContainer, className)}>
        <li className={styles.crumb}>
          <Link className={styles.crumbLink} href='/'>
            {t(`header.MyIvi`)}
          </Link>
        </li>
        {crumbs.map((crumb, index) => (
          <li className={styles.crumb} key={index}>
            {index === crumbs.length - 1 ? (
              <span className={styles.crumbLink}>{crumb.title}</span>
            ) : (
              <Link className={styles.crumbLink} href={`/${crumb.link}`}>
                {crumb.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className={styles.backContainer}>
        <div className={styles.catalogContentContainer}>
          <Back className={styles.arrowBack}>{t('Back')}</Back>
        </div>
      </div>
    </>
  );
});
