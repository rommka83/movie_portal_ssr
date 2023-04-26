import React, { FC, HTMLAttributes } from 'react';
import styles from './onecomment.module.css';
import classNames from 'classnames';
import UserPhoto from 'shared/user/UserPhoto';
import { IOneComment } from 'shared/types/IOneComment';
import { useTranslation } from 'react-i18next';

interface IProps {
  comment: IOneComment;
}

export const OneComment: FC<HTMLAttributes<HTMLDivElement> & IProps> = ({
  className,
  comment,
}) => {
  const { t } = useTranslation();

  return (
    <article className={classNames(styles.root, className)}>
      <div className={styles.head}>
        <UserPhoto />
        <div className={styles.userInfo}>
          <p className={styles.name}>{comment.author}</p>
        </div>
        <p className={styles.data}>
          {new Date(comment.date).toLocaleDateString()}
        </p>
      </div>
      <div className={styles.commentBody}>
        <h5 className={styles.commentTitle}>{comment.title}</h5>
        <p className={styles.commentContent}>{comment.review}</p>
      </div>
      <div className={styles.commentFooter}>
        <button
          className={classNames(
            styles.commentBtn,
            styles.open,
            'icon-message_20__0'
          )}
        >
          <span>{t('sectionTitle.AddComment')}</span>
        </button>
        <button
          className={classNames(
            styles.commentBtn,
            styles.like,
            'icon-thumbUp_16__0'
          )}
        >
          <span>{t('sectionTitle.Healthy')}</span>
          <span>20</span>
        </button>
        <button
          className={classNames(
            styles.commentBtn,
            styles.like,
            'icon-thumbDown_16__0'
          )}
        >
          <span>{t('sectionTitle.No')}</span>
          <span>5</span>
        </button>
      </div>
    </article>
  );
};
