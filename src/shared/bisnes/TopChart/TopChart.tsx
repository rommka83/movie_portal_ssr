import React, { FC } from 'react';
import styles from './topchart.module.css';
import { useTranslation } from '../../../i18n';
import { IFilm } from 'shared/types/IFilm';

interface IProps {
  obj: IFilm;
}

export const TopChart: FC<IProps> = ({ obj }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <p className={styles.name}>{t('topChart.Our')}</p>
      <p className={styles.name}>{t('topChart.grade')}</p>

      <input
        type="range"
        className={styles.inp}
        min="0"
        max="10"
        value={obj.rating.kp}
        step="0,1"
        style={{ width: 'width' }}
        id="topChart"
        readOnly
      />
    </div>
  );
};
