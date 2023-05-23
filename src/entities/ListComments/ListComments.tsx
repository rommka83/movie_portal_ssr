import React, { FC, HTMLAttributes } from 'react';
import { Desktop } from './desktop/Desktop';
import { Mobile } from './mobile/Mobile';
import { useAppSelector } from 'app/store/hooks';
import styles from './listcomments.module.css';
import { commentsPendingSelector, commentsSelector } from 'app/store/commentsRequest';
import { Loader } from 'shared/ui/Loader';

interface IProps {
  all?: boolean;
}

export const ListComments: FC<HTMLAttributes<HTMLUListElement> & IProps> = ({ all = false, className }) => {
  const comments = useAppSelector(commentsSelector);
  const commentsPending = useAppSelector(commentsPendingSelector);

  if (commentsPending) {
    return (
      <div className={styles.loaderContainer}>
        <Loader className={styles.loader} />
      </div>
    );
  }

  if (comments?.total === 0) return <p className={styles.message}>К данному фильму, пока нет комментариев</p>;

  return (
    <>
      <Mobile className={styles.mobile} comments={comments.docs} />
      <Desktop className={styles.desktop} comments={!all ? comments.docs.slice(0, 4) : comments.docs} />
    </>
  );
};
