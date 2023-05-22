import classNames from 'classnames';
import { useTranslation } from 'i18n';
import React from 'react';
import styles from './notfound.module.css';

interface INotFound {
  className?: string;
}
export const NotFound = ({ className }: INotFound) => {
  const { t } = useTranslation();
  return <p className={classNames(styles.notFound, className)}>{t('NotFound.notFound')}</p>;
};
