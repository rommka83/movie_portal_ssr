import React, { FC, HTMLAttributes, useMemo } from 'react';
import styles from './generaldataoncommentsforthefilm.module.css';
import classNames from 'classnames';
import { useAppSelector } from 'app/store/hooks';

export const GeneralDataOnCommentsForTheFilm: FC<
  HTMLAttributes<HTMLUListElement>
> = ({ className }) => {
  const { comments } = useAppSelector((state) => state.filmComents);
  console.log(comments);
  const {
    positive,
    neutral,
    negative,
    positiveProcent,
    negativeProcent,
    neutralProcent,
  } = useMemo(() => {
    let positive = 0;
    let negative = 0;
    let neutral = 0;

    comments.docs.map((el) => {
      switch (el.type) {
        case 'Позитивный':
          return positive++;
        case 'Нейтральный':
          return neutral++;
        case 'Негативный':
          return negative++;
        default:
          return el;
      }
    });

    let positiveProcent = ((positive * 100) / comments.total).toFixed(2) + ' %';
    let negativeProcent = ((negative * 100) / comments.total).toFixed(2) + ' %';
    let neutralProcent = ((neutral * 100) / comments.total).toFixed(2) + ' %';

    console.log(positiveProcent, negativeProcent, neutralProcent);
    return {
      positive,
      neutral,
      negative,
      positiveProcent,
      negativeProcent,
      neutralProcent,
    };
  }, [comments.docs, comments.total]);

  return comments.total === 0 ? null : (
    <ul className={classNames(className, styles.list)}>
      <li className={styles.item}>
        <p className={classNames(styles.total, styles.bigNumber)}>
          {comments.total}
        </p>
        <p className={styles.type}>всего</p>
      </li>
      <li className={styles.item}>
        <span className={classNames(styles.positive, styles.bigNumber)}>
          {positive}
        </span>
        <span className={styles.procent}> {positiveProcent}</span>
        <p className={styles.type}>Положительные</p>
      </li>
      <li className={styles.item}>
        <span className={classNames(styles.negative, styles.bigNumber)}>
          {negative}
        </span>
        <span className={styles.procent}> {negativeProcent}</span>
        <p className={styles.type}>Отрицательные</p>
      </li>
      <li className={styles.item}>
        <span className={classNames(styles.neutral, styles.bigNumber)}>
          {neutral}
        </span>
        <span className={styles.procent}> {neutralProcent}</span>
        <p className={styles.type}>Нейтральные</p>
      </li>
    </ul>
  );
};
