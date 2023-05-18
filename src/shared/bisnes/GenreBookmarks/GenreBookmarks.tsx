import React, { FC } from 'react';
import styles from './genrebookmarks.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { type } from 'os';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface IProps {
  home?: boolean;
  page?: string;
  ganre: { name: string }[];
}
export const GenreBookmarks: FC<HTMLAttributes<HTMLUListElement> & IProps> = ({
  ganre,
  className,
  home,
  page,
}) => {
  return (
    <ul className={classNames(styles.list, className)}>
      {home && (
        <li className={styles.item} key={nanoid()}>
          <Link href='/' className={styles.link}>
            мой иви
          </Link>
        </li>
      )}
      {ganre.map((el) => {
        return (
          <li className={styles.item} key={nanoid()}>
            <a href='https://www.ivi.ru/movies' className={styles.link}>
              {el.name}
            </a>
          </li>
        );
      })}
      {page && (
        <li className={styles.item} key={nanoid()}>
          <span className={classNames(styles.link, styles.lastLink)}>{page}</span>
        </li>
      )}
    </ul>
  );
};
