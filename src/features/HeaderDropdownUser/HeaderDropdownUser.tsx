import React, { useEffect, useState } from 'react';
import styles from './headerdropdownuser.module.css';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import classNames from 'classnames';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface IHeaderDropdownUser {
  open: boolean;
  className?: string;
  entranceDropdownClose: () => void;
}

export function HeaderDropdownUser({ open, className, entranceDropdownClose }: IHeaderDropdownUser) {
  const { t } = useTranslation();
  const [exit, setExit] = useState(open);
  useEffect(() => {
    setExit(open);
  }, [open]);

  return exit ? (
    <div className={classNames(styles.root, className)} onMouseLeave={entranceDropdownClose}>
      <Link href='/Authorization' className={styles.link}>
        <ButtonOrLink className={styles.entranceButton} onClick={entranceDropdownClose}>
          <span>{t('header.LoginOrRegister')}</span>
        </ButtonOrLink>
      </Link>
    </div>
  ) : null;
}
