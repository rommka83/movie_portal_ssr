import React, { FC, HTMLAttributes } from 'react';
import styles from './controlsvideocontent.module.css';
import { changeTrailerPlayer } from 'app/store/trailerPlayerSlice';
import classNames from 'classnames';
import { useTranslation } from '../../i18n';
import { useAppDispatch } from 'app/store/hooks';

interface IProps {
  trailer: string;
  age: number;
}

export const ControlsVideoContent: FC<
  HTMLAttributes<HTMLUListElement> & IProps
> = ({ trailer, age, className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <ul className={classNames(styles.list, className)}>
      <li
        className={classNames(
          styles.item,
          styles.treilerPlay,
          'icon-playOutline_20__0'
        )}
        onClick={() => {
          dispatch(
            changeTrailerPlayer({
              isOpen: true,
              age: age,
              trailer: trailer,
            })
          );
        }}
      >
        <span> {t('Player.trailer')}</span>
      </li>
      <li
        className={classNames(
          styles.item,
          styles.bookmark,
          'icon-favoriteAdd_20__0'
        )}
      ></li>
      <li
        className={classNames(styles.item, styles.download, 'icon-share_20__0')}
      ></li>
    </ul>
  );
};
