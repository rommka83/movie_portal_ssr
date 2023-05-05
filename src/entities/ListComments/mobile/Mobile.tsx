import React, { FC, HTMLAttributes } from 'react';
import styles from './mobile.module.css';
import { nanoid } from '@reduxjs/toolkit';
import OneComment from 'entities/OneComment';
import { Carousel } from 'shared/ui/Carousel';
import { IOneComment } from 'shared/types/IOneComment';

interface IProps {
  comments: IOneComment[];
}

export const Mobile: FC<HTMLAttributes<HTMLUListElement> & IProps> = ({ comments, className }) => {
  return (
    <div className={styles.root}>
      <div className={styles.coruselWrapper}>
        <Carousel withButton scrollMultipleItems className={styles.corusel}>
          {comments.map((el) => {
            return <OneComment comment={el} className={styles.ItemComments} key={nanoid()} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};
