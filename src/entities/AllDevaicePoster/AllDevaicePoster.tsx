import React, { FC, HTMLAttributes } from 'react';
import styles from './alldevaiceposter.module.css';
import classNames from 'classnames';
import tv from './tv-without-poster.png';
import ipad from './ipad-without-poster.png';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface IProps {
  poster: string;
  name: string;
  enName: string | null;
}

export const AllDevaicePoster: FC<HTMLAttributes<HTMLDivElement> & IProps> = ({
  className,
  poster,
  name,
  enName,
}) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.offerЕoСonnect}>
        <SectionTitle>
          <p>
            {t('AllDevaicePoster.look')} «{lng === 'ru' ? name : enName ?? name}»{' '}
            {t('AllDevaicePoster.onAlldevices')}
          </p>
        </SectionTitle>
        <p className={styles.offerVariants}>{t('AllDevaicePoster.content')}</p>
        <ButtonOrLink className={styles.offerBtn}>
          <span>{t('AllDevaicePoster.connectDevices')}</span>
        </ButtonOrLink>
      </div>
      <div className={styles.posters}>
        <Image width={100} height={100} src={poster} alt="" className={styles.posterTv} />
        <Image width={500} height={500} src={tv} alt="" className={styles.tv} />
        <Image width={100} height={100} src={poster} alt="" className={styles.posterIPad} />
        <Image width={100} height={100} src={ipad} alt="" className={styles.IPad} />
      </div>
    </div>
  );
};
