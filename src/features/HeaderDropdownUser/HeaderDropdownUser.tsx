import React, { useCallback } from 'react';
import styles from './headerdropdownuser.module.css';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useHeaderDropdownContext } from 'widgets/Header/HeaderDropdown/HeaderDropdownContext';

interface IHeaderDropdownUser {
  className?: string;
}

export function HeaderDropdownUser({ className }: IHeaderDropdownUser) {
  const { t } = useTranslation();
  const entranceDropdownClose = useHeaderDropdownContext();
  const authorizationButtonClick = useCallback(() => {
    entranceDropdownClose && entranceDropdownClose();
  }, [entranceDropdownClose]);

  return (
    <div className={classNames(styles.root, className)}>
      <ButtonOrLink to='/Authorization' className={styles.entranceButton} onClick={authorizationButtonClick}>
        <span>{t('header.LoginOrRegister')}</span>
      </ButtonOrLink>
    </div>
  );
}
