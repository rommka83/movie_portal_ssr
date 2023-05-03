import React, { FC, HTMLAttributes, useState } from 'react';
import styles from './onecomment.module.css';
import classNames from 'classnames';
import UserPhoto from 'shared/user/UserPhoto';
import { IOneComment } from 'shared/types/IOneComment';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { OneCommentHeader } from 'widgets/OneCommentHeader';
import { OneCommentBody } from 'widgets/OneCommentBody';

interface IProps {
  comment: IOneComment;
}

export const OneComment: FC<HTMLAttributes<HTMLDivElement> & IProps> = ({ className, comment }) => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <article className={classNames(styles.root, className)}>
        <OneCommentHeader comment={comment} />
        <OneCommentBody comment={comment} />
        <div className={styles.commentFooter}>
          <button
            className={classNames(styles.commentBtn, styles.open, 'icon-message_20__0')}
            onClick={() => setModalIsOpen(true)}
          >
            <span>{t('sectionTitle.AddComment')}</span>
          </button>
          <button className={classNames(styles.commentBtn, styles.like, 'icon-thumbUp_16__0')}>
            <span>{t('sectionTitle.Healthy')}</span>
            <span>20</span>
          </button>
          <button className={classNames(styles.commentBtn, styles.like, 'icon-thumbDown_16__0')}>
            <span>{t('sectionTitle.No')}</span>
            <span>5</span>
          </button>
        </div>
      </article>
      {modalIsOpen && (
        <Modal>
          <div className={classNames(styles.modal, 'container')}>
            <OneCommentHeader comment={comment} className={styles.modalHead} />
            <OneCommentBody comment={comment} className={styles.modalComment} />
            <textarea className={styles.myComment} />
            <div className={styles.modalBlockBtn}>
              <button onClick={() => {}} className={styles.modalBtn}>
                Комментировать
              </button>
              <button onClick={() => setModalIsOpen(false)} className={styles.modalBtn}>
                Закрыть
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
