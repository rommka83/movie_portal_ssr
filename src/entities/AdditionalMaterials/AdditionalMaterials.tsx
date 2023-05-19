import React, { HTMLAttributes, useMemo, useRef, useState } from 'react';
import styles from './additionalmaterials.module.css';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import classNames from 'classnames';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch } from 'app/store/hooks';
import { IVideo } from 'shared/types/IVideo';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import TrailerPlayer from 'widgets/TrailerPlayer';

interface IProps {
  video: IVideo;
}
type props = HTMLAttributes<HTMLDivElement> & IProps;

export function AdditionalMaterials({ className, video }: props) {
  const list = useRef<HTMLUListElement>(null);
  const { t } = useTranslation();
  const itemWidth = useMemo(() => {
    if (list.current === null) return;
    return (list.current.getBoundingClientRect().width - 30) / 4;
  }, [list]);
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState('');

  return video.trailers.length > 0 ? (
    <>
      <div className={classNames(styles.root, className)}>
        <SectionTitle className={styles.title}>{t('sectionTitle.additionalMaterials')}</SectionTitle>
        <ul className={styles.list} ref={list}>
          {video.trailers.slice(0, 4).map((el) => {
            return (
              <li
                className={styles.item}
                key={nanoid()}
                style={{ width: `${itemWidth}px` }}
                onClick={() => {
                  setIsOpen(true);
                  setSrc(el.url);
                }}
              >
                <video src={el.url} className={styles.video}></video>
                <p className={styles.itemName}>{el.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      {isOpen && (
        <Modal>
          <TrailerPlayer src={src} func={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  ) : null;
}
