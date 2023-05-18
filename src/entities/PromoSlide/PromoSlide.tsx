import React from 'react';
import styles from './promoSlide.module.css';
import ButtonOrLink from 'shared/ui/ButtonOrLink';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

interface PropsType extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  picture: string;
  description: string;
  width: number;
}

export const PromoSlide = ({ title, picture, description, width, className }: PropsType) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Link href='/CatalogPage' style={{ width: `${width}px` }}>
        <Image src={picture} alt={picture} width={1600} height={900} className={styles.pic} />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.description}>{description}</div>
        </div>
      </Link>
      <ButtonOrLink className={styles.btn} variant='primary'>
        <span>Смотреть по подписке</span>
      </ButtonOrLink>
    </div>
  );
};
