import React, { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './personslist.module.css';
import { IPerson } from 'shared/types/IPerson';
import classNames from 'classnames';
import { PersonMiniCard } from 'shared/bisnes/PersonMiniCard';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';

interface IPersonListProps {
  list: IPerson[];
}

export function PersonsList({
  list,
  className,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement> & IPersonListProps>) {
  return (
    <section className={styles.root}>
      <SectionTitle className={styles.title}>{list[0].profession}</SectionTitle>
      <ul className={classNames(styles.list, className)}>
        {list.map((el) => {
          return (
            <li className={styles.item} key={el.id}>
              <PersonMiniCard person={el} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
