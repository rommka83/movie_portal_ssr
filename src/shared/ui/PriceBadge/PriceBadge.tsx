import React, { HTMLAttributes } from 'react';
import styles from './priceBadge.module.css';
import cn from 'classnames';

interface IProps {
  price: boolean;
}

type props = HTMLAttributes<HTMLSpanElement> & IProps;

export const PriceBadge = ({ price, className }: props) => {
  return (
    <span className={cn(styles.priceBadge, price ? styles.pink : styles.gray, className)}>
      {price ? 'Подписка' : 'Бесплатно'}
    </span>
  );
};
