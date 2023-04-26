import React, { FC, HTMLAttributes } from 'react';
import styles from './alldevaiceposter.module.css';
import classNames from 'classnames';
import tv from './tv-without-poster.png';
import ipad from './ipad-without-poster.png';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import Image from 'next/image';

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
        <SectionTitle>
          {<p>Смотреть «{name}» на всех устройствах</p>}
        </SectionTitle>
        <p className={styles.offerVariants}>
          Приложение доступно для скачивания на iOS, Android, SmartTV и
          приставках
        </p>
        <ButtonOrLink className={styles.offerBtn}>
          {<span>Подключить устройства</span>}
        </ButtonOrLink>
      </div>
      <div className={styles.posters}>
        <Image
          width={100}
          height={100}
          src={poster}
          alt=''
          className={styles.posterTv}
        />
        <Image width={100} height={100} src={tv} alt='' className={styles.tv} />
        <Image
          width={100}
          height={100}
          src={poster}
          alt=''
          className={styles.posterIPad}
        />
        <Image
          width={100}
          height={100}
          src={ipad}
          alt=''
          className={styles.IPad}
        />
      </div>
    </div>
  );
};
