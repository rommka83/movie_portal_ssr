import React, { FC } from 'react';
import styles from './mobile.module.css';
import { nanoid } from '@reduxjs/toolkit';
import OneComment from 'entities/OneComment';
import { Carousel } from 'shared/ui/Carousel';
import { IOneComment } from 'shared/types/IOneComment';
import classNames from 'classnames';

interface IProps {
  comments: IOneComment[];
  className?: string;
}

export const Mobile: FC<IProps> = ({ comments, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Carousel withButton scrollMultipleItems carouselChildrenClassName={styles.carousel}>
        {comments.map((el) => (
          <OneComment comment={el} key={nanoid()} />
        ))}
      </Carousel>
    </div>
  );
};
