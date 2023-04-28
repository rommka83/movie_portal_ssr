import React, { FC, HTMLAttributes } from 'react';
import styles from './desktop.module.css';
import { nanoid } from '@reduxjs/toolkit';
import OneComment from 'entities/OneComment';
import { IReviev } from 'shared/types/IReviev';
import classNames from 'classnames';

interface IProps {
  comments: IReviev;
}

export const Desktop: FC<HTMLAttributes<HTMLUListElement> & IProps> = ({ comments, className }) => {
  return (
    <ul className={classNames(styles.listComments, className)}>
      {comments.docs.slice(0, 4).map((el) => {
        return (
          <li className={styles.ItemComments} key={nanoid()}>
            <OneComment comment={el} />
          </li>
        );
      })}
    </ul>
  );
};
