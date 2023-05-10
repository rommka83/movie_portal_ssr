import React from 'react';
import styles from './footerdesktop.module.css';
import classNames from 'classnames';
import Link from 'shared/ui/Link';
import { useTranslation } from '../../../i18n';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import { SvgIcon } from 'shared/ui/SvgIcon';

export const FooterDesktop = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={classNames(styles.footerContent, styles.containerBorder)}>
          <div className={classNames(styles.column, styles.columnNarrow)}>
            <p className={styles.columnTitle}>{t('footer.AboutUs')}</p>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link target="_blank" to="https://corp.ivi.ru/">
                  {t('footer.AboutCompany')}
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link target="_blank" to="https://corp.ivi.ru/career/">
                  {t('footer.Jobs')}
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link target="_blank" to="https://www.ivi.ru/pages/beta/">
                  {t('footer.BetaProgram')}
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link target="_blank" to="https://www.ivi.ru/info/partners">
                  {t('footer.InformationForPartners')}
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link target="_blank" to="https://corp.ivi.ru/advertisers/">
                  {t('footer.AdvertisingPlacement')}
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link target="_blank" to="https://www.ivi.ru/info/agreement">
                  {t('footer.TermsOfUse')}
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link target="_blank" to="https://www.ivi.ru/info/confidential">
                  {t('footer.PrivacyPolicy')}
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/AdminPanel">{t('footer.AdminPanel')}</Link>
              </li>
            </ul>
          </div>

          <div className={classNames(styles.column, styles.columnNarrow)}>
            <p className={styles.columnTitle}>{t('footer.Sections')}</p>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link to="/">{t('footer.MyIvi')}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link target="_blank" to="https://www.ivi.ru/new">
                  {t('footer.WhatsNew')}
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/CatalogPage">{t('footer.Movies')}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link target="_blank" to="https://www.ivi.ru/series">
                  {t('footer.Series')}
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link target="_blank" to="https://www.ivi.ru/animation">
                  {t('footer.Cartoons')}
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link target="_blank" to="https://www.ivi.ru/tvchannels">
                  {t('footer.TvChannels')}
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link target="_blank" to="https://www.ivi.ru/goodmovies">
                  {t('footer.WhatToSee')}
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link
                  className={styles.linkActivation}
                  target="_blank"
                  to="https://www.ivi.ru/cert"
                >
                  {t('footer.CertificateActivation')}
                </Link>
              </li>
            </ul>
          </div>

          <div className={classNames(styles.column, styles.columnNarrow)}>
            <p className={styles.columnTitle}>{t('footer.Support')}</p>
            <div className={styles.description}>
              <p>{t('footer.WeAreAlwaysReadyToHelpYou')}</p>
              <p>{t('footer.OurOperatorsAreOnline')}</p>
            </div>
            <div className={styles.support}>
              <ButtonOrLink
                to="https://www.ivi.ru/profile"
                className={styles.buttonOrLink}
                variant="secondary"
                large
              >
                {t('footer.WriteInChat')}
              </ButtonOrLink>
              <div className={styles.supportButtons}>
                <ButtonOrLink
                  to=""
                  className={styles.supportButton}
                  variant="secondary"
                  round
                  small
                >
                  <span className={classNames(styles.envelop, 'icon-email_16__0')} />
                </ButtonOrLink>
                <ButtonOrLink className={styles.supportButton} variant="secondary" round small>
                  <span className={classNames(styles.phone, 'icon-call_16__0')} />
                </ButtonOrLink>
              </div>
            </div>
            <div className={styles.questions}>
              <Link to="https://ask.ivi.ru/" className={styles.questionLink}>
                ask.ivi.ru
              </Link>
              <p className={styles.questionText}>{t('footer.AnswersOnQuestions')}</p>
            </div>
          </div>

          <div className={classNames(styles.column, styles.columnNarrow, styles.columnCentered)}>
            <Link to="https://www.ivi.ru/subscribe">
              <div className={styles.footerWidget}>
                <div className={styles.footerWidgetIcon}>
                  <span className={'icon-noAds_56__0'} />
                  <span
                    className={classNames(styles.footerWidgetIconAbsolute, 'icon-noAds_56__1')}
                  />
                </div>
              </div>
            </Link>

            <Link className={styles.footerWidgetText} to="https://www.ivi.ru/subscribe">
              {t('footer.WatchMoviesWithoutAds')}
            </Link>
          </div>
        </div>

        <div className={styles.footerContent}>
          <div className={classNames(styles.column, styles.columnWide)}>
            <div className={styles.stores}>
              <ButtonOrLink
                className={styles.storesLink}
                to="https://apps.apple.com/RU/app/id455705533"
                variant="secondary"
                large
              >
                <div className={styles.storesLinkContainer}>
                  <div className={styles.img}>
                    <SvgIcon type="AppleLogo" size={20} />
                  </div>
                  <div className={styles.textContent}>
                    <p className={styles.preamble}>{t('footer.DownloadTo')}</p>
                    <p className={styles.caption}>App Store</p>
                  </div>
                </div>
              </ButtonOrLink>
              <ButtonOrLink
                className={styles.storesLink}
                to="https://play.google.com/store/apps/details"
                variant="secondary"
                large
              >
                <div className={styles.storesLinkContainer}>
                  <div className={styles.img}>
                    <SvgIcon type="Google" size={20} />
                  </div>
                  <div className={styles.textContent}>
                    <p className={styles.preamble}>{t('footer.AvailableIn')}</p>
                    <p className={styles.caption}>Google Play</p>
                  </div>
                </div>
              </ButtonOrLink>
              <ButtonOrLink
                className={styles.storesLink}
                to="https://www.ivi.ru/pages/tvsmart/"
                variant="secondary"
                large
              >
                <div className={styles.storesLinkContainer}>
                  <div className={classNames(styles.img, 'icon-smartTvPromo_20__0')} />
                  <div className={styles.textContent}>
                    <p className={styles.preamble}>{t('footer.LookAt')}</p>
                    <p className={styles.caption}>Smart TV</p>
                  </div>
                </div>
              </ButtonOrLink>
              <ButtonOrLink
                className={styles.storesLink}
                to="https://www.ivi.ru/devices"
                variant="secondary"
                large
              >
                <div className={styles.storesLinkContainer}>
                  <div className={classNames(styles.img, 'icon-anyDev_20__0')} />
                  <div className={styles.textContent}>
                    <p className={styles.caption}>{t('footer.AllDevices')}</p>
                  </div>
                </div>
              </ButtonOrLink>
            </div>

            <div className={styles.copyrights}>
              <div>© 2023 ООО «Иви.ру»</div>
              <div className={styles.copyrightContent}>
                HBO ® and related service marks are the property of Home Box Office, Inc
              </div>
            </div>
          </div>
          <div className={classNames(styles.column, styles.columnWide)}>
            <div className={styles.community}>
              <ButtonOrLink to="https://vk.com/iviru" variant="secondary" round>
                <SvgIcon type="VK" size={16} />
              </ButtonOrLink>
              <ButtonOrLink to="https://ok.ru/ivi.ru" variant="secondary" round>
                <SvgIcon type="OK" size={16} />
              </ButtonOrLink>
              <ButtonOrLink to="https://twitter.com/ivi_ru" variant="secondary" round>
                <SvgIcon type="Twitter" size={16} />
              </ButtonOrLink>
              <ButtonOrLink to="https://invite.viber.com" variant="secondary" round>
                <SvgIcon type="Viber" size={16} />
              </ButtonOrLink>
              <ButtonOrLink
                to="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F2543415%2F"
                variant="secondary"
                round
              >
                <SvgIcon type="Linkedin" size={16} />
              </ButtonOrLink>
              <ButtonOrLink to="https://t.me/official_iviru" variant="secondary" round>
                <SvgIcon type="Telegram" size={16} />
              </ButtonOrLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
