import React, { useMemo } from 'react';
import styles from './actorscreators.module.css';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import { useMedia } from 'shared/hooks/useMedia';
import { HTMLAttributes } from 'react';
import { IPerson } from 'shared/types/IPerson';
import { useTranslation } from '../../i18n';
import Image from 'next/image';
import Link from 'next/link';
import { PersonMiniCard } from 'shared/bisnes/PersonMiniCard';

interface IProps {
  persons: IPerson[];
  id: number;
  className: string;
}

export function ActorsCreators({ id, persons, className }: IProps) {
  const tablet = useMedia('(max-width: 850px)');
  const mobile = useMedia('(max-width: 500px)');
  const { t } = useTranslation();

  const [amountCardPerson, widthCardPerson] = useMemo(() => {
    if (mobile) return [3, 20];
    if (tablet) return [5, 12];
    return [10, 7];
  }, [tablet, mobile]);

  return (
    <div className={classNames(styles.root, className)}>
      <SectionTitle className={styles.title}>{t('ActorsCreators')}</SectionTitle>
      <div className={styles.picWrapper}>
        <ul className={styles.list} style={{ gridAutoColumns: `calc(${widthCardPerson}%)` }}>
          {persons.slice(0, amountCardPerson).map((el) => {
            return (
              <li className={styles.item} key={nanoid()}>
                <PersonMiniCard person={el} position />
              </li>
            );
          })}
          <Link href={`/AllParticipants/${id}`}>
            <li className={classNames(styles.item, styles.entryModal)}>{t('more')}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
