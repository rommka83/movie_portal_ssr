import React, { FC, HTMLAttributes } from 'react';
import styles from './desktop.module.css';
import { nanoid } from '@reduxjs/toolkit';
import OneComment from 'entities/OneComment';
import classNames from 'classnames';
import { IOneComment } from 'shared/types/IOneComment';

interface IProps {
  comments: IOneComment[];
  className?: string;
}

export const Desktop: FC<HTMLAttributes<HTMLUListElement> & IProps> = ({ comments, className }) => {
  return (
    <ul className={classNames(styles.listComments, className)}>
      {comments.map((el) => {
        return (
          <li className={styles.ItemComments} key={nanoid()}>
            <OneComment comment={el} />
          </li>
        );
      })}
    </ul>
  );
};
