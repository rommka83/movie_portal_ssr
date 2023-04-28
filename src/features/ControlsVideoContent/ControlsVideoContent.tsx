import React, { FC, HTMLAttributes, useState } from 'react';
import styles from './controlsvideocontent.module.css';
import classNames from 'classnames';
import { useTranslation } from '../../i18n';
import { Modal } from 'shared/ui/Modal';
import { TrailerPlayer } from 'widgets/TrailerPlayer/TrailerPlayer';

interface IProps {
  trailer: string;
  age: number;
}

export const ControlsVideoContent: FC<HTMLAttributes<HTMLUListElement> & IProps> = ({
  trailer,
  age,
  className,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul className={classNames(styles.list, className)}>
        <li
          className={classNames(styles.item, styles.treilerPlay, 'icon-playOutline_20__0')}
          onClick={() => setIsOpen(true)}
        >
          <span> {t('Player.trailer')}</span>
        </li>
        <li className={classNames(styles.item, styles.bookmark, 'icon-favoriteAdd_20__0')}></li>
        <li className={classNames(styles.item, styles.download, 'icon-share_20__0')}></li>
      </ul>
      {isOpen && (
        <Modal>
          <TrailerPlayer src={trailer} func={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};
