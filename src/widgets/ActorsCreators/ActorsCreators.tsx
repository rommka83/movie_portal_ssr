import React, { useMemo } from 'react';
import styles from './actorscreators.module.css';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import { UseMedia } from 'shared/hooks/useMedia';
import { useAppDispatch } from 'app/store/hooks';
import { openClose } from 'app/store/ActorsCreatorsModalSlice';
import { HTMLAttributes } from 'react';
import { IPerson } from 'shared/types/IPerson';
import { useTranslation } from '../../i18n';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  persons: IPerson[];
}
type props = HTMLAttributes<HTMLDivElement> & IProps;

export function ActorsCreators({ persons, className }: props) {
  const tablet = UseMedia('(max-width: 850px)');
  const mobile = UseMedia('(max-width: 500px)');
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [amountCardPerson, widthCardPerson] = useMemo(() => {
    if (mobile) return [3, 20];
    if (tablet) return [5, 10];
    return [10, 7];
  }, [tablet, mobile]);

  return (
    <div className={classNames(styles.root, className)}>
      <SectionTitle className={styles.title}>{t('ActorsCreators')}</SectionTitle>
      <div className={styles.picWrapper}>
        <ul className={styles.list} style={{ gridAutoColumns: `calc(${widthCardPerson}%)` }}>
          {persons.slice(0, amountCardPerson).map((el) => {
            if (el.name === null) return null;
            const [name] = el.name.split(' ').slice(0, 1);
            const [surName] = el.name.split(' ').slice(1);

            return (
              <li className={styles.item} key={nanoid()}>
                <Link href={`/ActorPage/${el.id}`} className={styles.link}>
                  {el.photo !== '' ? (
                    <Image
                      width={60}
                      height={60}
                      src={el.photo}
                      alt={el.name}
                      className={styles.pic}
                    />
                  ) : (
                    <div className={classNames(styles.noPhoto, 'icon-person_56__0')}></div>
                  )}

                  <p className={styles.name}>{name}</p>
                  <p className={classNames(styles.name, styles.surName)}>{surName}</p>
                  <p className={styles.position}>{el.profession}</p>
                </Link>
              </li>
            );
          })}
          <li
            className={classNames(styles.item, styles.entryModal)}
            onClick={() => {
              dispatch(openClose());
            }}
          >
            {t('more')}
          </li>
        </ul>
      </div>
    </div>
  );
}
