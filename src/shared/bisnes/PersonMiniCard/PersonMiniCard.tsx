import React, { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './personcard.module.css';
import { IPerson } from 'shared/types/IPerson';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

interface IProps {
  person: IPerson;
  position?: boolean;
}

export function PersonMiniCard({
  person,
  position = false,
  className,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement> & IProps>) {
  if (person.name === null) return null;
  const [name] = person.name.split(' ').slice(0, 1);
  const [surName] = person.name.split(' ').slice(1);

  return (
    <Link href={`/ActorPage/${person.id}`} className={styles.link}>
      <div className={classNames(styles.root, className)}>
        {person.photo !== '' ? (
          <Image
            width={60}
            height={60}
            src={person.photo}
            alt={person.name}
            className={styles.pic}
          />
        ) : (
          <div className={classNames(styles.noPhoto, 'icon-person_56__0')}></div>
        )}
        <p className={styles.name}>{name}</p>
        <p className={classNames(styles.name, styles.surName)}>{surName}</p>
        {position && <p className={styles.position}>{person.profession}</p>}
      </div>
    </Link>
  );
}
