import React from 'react';
import styles from './actorscreators.module.css';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import { IPerson } from 'shared/types/IPerson';
import { useTranslation } from '../../i18n';
import Link from 'next/link';
import { PersonMiniCard } from 'shared/bisnes/PersonMiniCard';
import { Carousel } from 'shared/ui/Carousel';

interface IProps {
  persons: IPerson[];
  className?: string;
  id: number;
}

export function ActorsCreators({ id, persons, className }: IProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.root, className)}>
      <Carousel
        href={`/AllParticipants/${id}`}
        carouselContainerClassName={styles.carouselContainer}
        title={t('ActorsCreators')}
        carouselChildrenClassName={styles.personCardCarouselContent}
        withButton
        scrollMultipleItems
      >
        {persons.slice(0, 10).map((el) => (
          <div className={styles.item} key={nanoid()}>
            <PersonMiniCard person={el} position />
          </div>
        ))}
        <div className={styles.item}>
          <Link href={`/AllParticipants/${id}`}>
            <p className={styles.entryModal}>{t('more')}</p>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}
