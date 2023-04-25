import React, { FC, HTMLAttributes } from 'react';
import styles from './mobile.module.css';
import { nanoid } from '@reduxjs/toolkit';
import OneComment from 'entities/OneComment';
import { IReviev } from 'shared/types/IReviev';
import { Carousel } from 'shared/ui/Carousel';

interface IProps {
  comments: IReviev;
}

export const Mobile: FC<HTMLAttributes<HTMLUListElement> & IProps> = ({
  comments,
  className,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.coruselWrapper}>
        <Carousel withButton scrollMultipleItems className={styles.corusel}>
          {comments.docs.map((el) => {
            return (
              <OneComment
                comment={el}
                className={styles.ItemComments}
                key={nanoid()}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
