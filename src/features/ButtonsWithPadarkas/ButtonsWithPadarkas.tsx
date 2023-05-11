import React from 'react';
import styles from './buttonswithpadarkas.module.css';
import classNames from 'classnames';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import Image from 'next/image';
import { SvgIcon } from 'shared/ui/SvgIcon';

interface IProps extends React.ComponentPropsWithoutRef<'div'> {}

export function ButtonsWithPadarkas({ className }: IProps) {
  return (
    <section className={classNames(styles.root, className)}>
      <ButtonOrLink className={classNames(styles.btnGrad, styles.btn)} variant='secondary'>
        <SvgIcon type={'winamp'} />
        <span className={styles.text}>30 дней подписки за 1 ₽</span>
      </ButtonOrLink>
      <ButtonOrLink className={styles.btn} variant='secondary'>
        <SvgIcon type={'padarka'} />
        <span className={styles.text}>Активировать сертификат</span>
      </ButtonOrLink>
    </section>
  );
}
