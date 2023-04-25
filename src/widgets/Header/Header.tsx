import styles from './header.module.css';
import { ChangeTheLanguage } from 'features/ChangeTheLanguage';
import { HeaderNav } from 'features/HeaderNav';
import { Logo } from 'shared/ui/Logo/Logo';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { HeaderDropdown } from 'widgets/Header/HeaderDropdown';
import { useCallback, MouseEvent, useState } from 'react';
import { HeaderMoviesFilter } from 'features/HeaderMoviesFilter';
import Link from 'next/link';

export type HeaderDropdownType = 'movies' | 'promo' | 'avatar';
export function Header() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [type, setType] = useState<HeaderDropdownType | ''>('');
  const onMouseEnter = useCallback((event: MouseEvent<HTMLLIElement>) => {
    const type = event.currentTarget.dataset['type'] ?? '';
    setType(type as HeaderDropdownType);
    setShow(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setTimeout(() => {
      setShow(false);
    }, 250);
  }, []);
  const onHeaderDropdownClose = useCallback(() => {
    setType('');
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={classNames(styles.container, 'container')}>
          <div className={styles.content}>
            <Link href='/' className={styles.logo}>
              <Logo className={styles.logoImg} />
            </Link>
            <HeaderNav
              type={type}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </div>

          <div className={styles.wideArea}>
            <div className={styles.wideAreaInner}>
              <ButtonOrLink className={styles.wideAreaButton}>
                {t('header.Watch30DaysForFree')}
              </ButtonOrLink>
              <ChangeTheLanguage />
              <ButtonOrLink
                className={styles.avatarButton}
                variant='secondary'
                round
                small
                transparent
              >
                <span
                  className={classNames('icon-avatar_20__0', styles.adminIcon)}
                />
              </ButtonOrLink>
            </div>
          </div>
        </div>
        <HeaderDropdown opened={show} onClose={onHeaderDropdownClose}>
          <HeaderMoviesFilter />
        </HeaderDropdown>
      </div>
    </header>
  );
}
