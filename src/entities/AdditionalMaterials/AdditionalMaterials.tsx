import React, { useState } from 'react';
import styles from './additionalmaterials.module.css';
import classNames from 'classnames';
import { nanoid } from '@reduxjs/toolkit';
import { IVideo } from 'shared/types/IVideo';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import TrailerPlayer from 'widgets/TrailerPlayer';
import { Carousel } from 'shared/ui/Carousel';
import { TrailerPicture } from 'shared/ui/TrailerPicture';
import { getTrailerId } from 'shared/utils/getTrailerId';

interface IAdditionalMaterials {
  video: IVideo['trailers'];
  className?: string;
}

export function AdditionalMaterials({ className, video }: IAdditionalMaterials) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState('');

  return video.length > 0 ? (
    <>
      <div className={classNames(styles.root, className)}>
        <Carousel
          title={t('sectionTitle.additionalMaterials')}
          carouselContainerClassName={styles.carousel}
          carouselChildrenClassName={styles.carouselChildren}
          scrollMultipleItems
          withButton
        >
          {video.map((el) => {
            return (
              <div
                className={styles.item}
                key={nanoid()}
                onClick={() => {
                  setIsOpen(true);
                  setSrc(el.url);
                }}
              >
                <TrailerPicture trailerID={getTrailerId(el.url)} />
              </div>
            );
          })}
        </Carousel>
      </div>
      {isOpen && (
        <Modal>
          <TrailerPlayer className={styles.trailerPlayer} src={src} onClose={() => setIsOpen(false)} modal />
        </Modal>
      )}
    </>
  ) : null;
}
