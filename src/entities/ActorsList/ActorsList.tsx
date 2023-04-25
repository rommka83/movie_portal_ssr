import React from 'react';
import styles from './actorslist.module.css';
import classNames from 'classnames';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { IPerson } from 'shared/types/IPerson';

interface Iprops {
  actors: IPerson[];
  reiting: number;
}

export function ActorsList({ actors, reiting }: Iprops) {
  return (
    <ul className={styles.list}>
      <li className={classNames(styles.item, styles.reiting)}>{reiting}</li>
      {actors.slice(0, 4).map((el) => {
        if (el.name === null) return null;
        const name = el.name.split(' ').slice(0, 1);
        const surName = el.name.split(' ').slice(1);
        return (
          <li className={styles.item} key={nanoid()}>
            <Link to={`/ActorPage/${el.id}/${el.name}`} className={styles.link}>
              {el.photo !== '' ? (
                <img
                  src={el.photo}
                  alt={el.name ? el.name : 'фото артиста'}
                  className={styles.pic}
                />
              ) : (
                <div
                  className={classNames(styles.noPerson, 'icon-avatar_56__0')}
                />
              )}
              <p className={styles.name} key={nanoid()}>
                {name}
              </p>
              <p className={styles.name} key={nanoid()}>
                {surName}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
