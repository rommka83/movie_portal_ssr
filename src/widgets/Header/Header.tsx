import styles from './header.module.css';
import { ChangeTheLanguage } from 'features/ChangeTheLanguage';
import { HeaderNav } from 'features/HeaderNav';
import { Logo } from 'shared/ui/Logo/Logo';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { HeaderDropdown } from 'widgets/Header/HeaderDropdown';
import { useCallback, MouseEvent, useState } from 'react';
import { HeaderDropdownNavigation } from 'features/HeaderDropdownNavigation';
import Link from 'next/link';
import { HeaderDropdownUser } from 'features/HeaderDropdownUser';

export type HeaderDropdownType = 'movies' | 'series' | 'authorization';
export function Header() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [type, setType] = useState<HeaderDropdownType | null>(null);

  const onMouseEnter = useCallback((event: MouseEvent<HTMLElement>) => {
    const type = event.currentTarget.dataset['type'] ?? '';
    setType(type as HeaderDropdownType);
    setShow(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setShow(false);
  }, []);

  const onDropdownClose = useCallback(() => {
    setShow(false);
  }, []);

  const onHeaderDropdownClose = useCallback(() => {
    setType(null);
  }, []);

  return (
    <header className={styles.header} data-cy='header'>
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
              onItemClick={onDropdownClose}
            />
          </div>

          <div className={styles.wideArea}>
            <div className={styles.wideAreaInner}>
              <ButtonOrLink className={styles.wideAreaButton}>{t('header.PayForASubscription')}</ButtonOrLink>
              <ChangeTheLanguage />
              <div
                data-type='authorization'
                className={styles.authorizationButtonWrapper}
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}
              >
                <ButtonOrLink className={styles.avatarButton} variant='secondary' round small transparent>
                  <span className={classNames('icon-avatar_20__0', styles.adminIcon)} data-cy='iconAvatar' />
                </ButtonOrLink>
              </div>
            </div>
          </div>
        </div>
        <HeaderDropdown opened={show} onClose={onHeaderDropdownClose}>
          {type === 'movies' && <HeaderDropdownNavigation />}
          {type === 'series' && <HeaderDropdownNavigation />}
          {type === 'authorization' && <HeaderDropdownUser />}
        </HeaderDropdown>
      </div>
    </header>
  );
}
