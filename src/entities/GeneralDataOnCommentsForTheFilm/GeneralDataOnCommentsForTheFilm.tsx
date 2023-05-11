/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, HTMLAttributes, useMemo } from 'react';
import styles from './generaldataoncommentsforthefilm.module.css';
import classNames from 'classnames';
import { useAppSelector } from 'app/store/hooks';
import { IReviev } from 'shared/types/IReviev';
import { useTranslation } from 'react-i18next';

interface IGeneralDataOnCommentsForTheFilm {
  className?: string;
  comments: IReviev;
}

export const GeneralDataOnCommentsForTheFilm: FC<IGeneralDataOnCommentsForTheFilm> = ({ className, comments }) => {
  const { t } = useTranslation();

  const { positive, neutral, negative, positiveProcent, negativeProcent, neutralProcent } = useMemo(() => {
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

    let positiveProcent = ((positive * 100) / comments.docs.length).toFixed(2) + ' %';
    let negativeProcent = ((negative * 100) / comments.docs.length).toFixed(2) + ' %';
    let neutralProcent = ((neutral * 100) / comments.docs.length).toFixed(2) + ' %';

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
        <p className={classNames(styles.total, styles.bigNumber)}>{comments.docs.length}</p>
        <p className={styles.type}>{t('GeneralDataOnCommentsForTheFilm.total')}</p>
      </li>
      <li className={styles.item}>
        <span className={classNames(styles.positive, styles.bigNumber)}>{positive}</span>
        <span className={styles.procent}> {positiveProcent}</span>
        <p className={styles.type}>{t('GeneralDataOnCommentsForTheFilm.positive')}</p>
      </li>
      <li className={styles.item}>
        <span className={classNames(styles.negative, styles.bigNumber)}>{negative}</span>
        <span className={styles.procent}> {negativeProcent}</span>
        <p className={styles.type}>{t('GeneralDataOnCommentsForTheFilm.negative')}</p>
      </li>
      <li className={styles.item}>
        <span className={classNames(styles.neutral, styles.bigNumber)}>{neutral}</span>
        <span className={styles.procent}> {neutralProcent}</span>
        <p className={styles.type}>{t('GeneralDataOnCommentsForTheFilm.neutral')}</p>
      </li>
    </ul>
  );
};
