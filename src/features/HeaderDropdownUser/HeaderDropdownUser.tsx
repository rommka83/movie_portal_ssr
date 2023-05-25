import React from 'react';
import styles from './headerdropdownuser.module.css';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

interface IHeaderDropdownUser {
  className?: string;
  entranceDropdownClose: () => void;
}

export function HeaderDropdownUser({ className, entranceDropdownClose }: IHeaderDropdownUser) {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.root, className)}>
      <ButtonOrLink to='/Authorization' className={styles.entranceButton} onClick={entranceDropdownClose}>
        <span>{t('header.LoginOrRegister')}</span>
      </ButtonOrLink>
    </div>
  );
}
