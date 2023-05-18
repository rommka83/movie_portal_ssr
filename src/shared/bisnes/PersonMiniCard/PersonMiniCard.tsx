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
  position,
  className,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement> & IProps>) {
  const personName = person.name ?? person.enName;
  if (!personName) return null;
  const [name] = personName.split(' ').slice(0, 1);
  const [surName] = personName.split(' ').slice(1);

  return (
    <Link href={`/ActorPage/${person.id}`} className={styles.link}>
      <div className={classNames(styles.root, className)}>
        {person.photo != null ? (
          <Image width={60} height={60} src={person.photo} alt={personName} className={styles.pic} />
        ) : (
          <div className={styles.noPhoto}>
            <span className={classNames(styles.noPhotoIcon, 'icon-person_56__0')} />
          </div>
        )}
        <p className={styles.name}>{name}</p>
        <p className={classNames(styles.name, styles.surName)}>{surName}</p>
        {position && <p className={styles.position}>{person.profession}</p>}
      </div>
    </Link>
  );
}
