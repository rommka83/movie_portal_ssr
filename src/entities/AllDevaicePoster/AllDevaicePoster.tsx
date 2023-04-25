import React, { FC, HTMLAttributes } from 'react';
import styles from './alldevaiceposter.module.css';
import classNames from 'classnames';
import tv from './tv-without-poster.png';
import ipad from './ipad-without-poster.png';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';

interface IProps {
  poster: string;
  name: string;
}

export const AllDevaicePoster: FC<HTMLAttributes<HTMLDivElement> & IProps> = ({
  className,
  poster,
  name,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.offerЕoСonnect}>
        <SectionTitle children={<p>Смотреть «{name}» на всех устройствах</p>} />
        <p className={styles.offerVariants}>
          Приложение доступно для скачивания на iOS, Android, SmartTV и
          приставках
        </p>
        <ButtonOrLink
          children={<span>Подключить устройства</span>}
          className={styles.offerBtn}
        />
      </div>
      <div className={styles.posters}>
        <img src={poster} alt='' className={styles.posterTv} />
        <img src={tv} alt='' className={styles.tv} />
        <img src={poster} alt='' className={styles.posterIPad} />
        <img src={ipad} alt='' className={styles.IPad} />
      </div>
    </div>
  );
};
