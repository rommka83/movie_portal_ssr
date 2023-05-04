import React from 'react';
import styles from './moviereviews.module.css';
import { ListComments } from 'entities/ListComments';
import GeneralDataOnCommentsForTheFilm from 'entities/GeneralDataOnCommentsForTheFilm';
import { useAppSelector } from 'app/store/hooks';
import classNames from 'classnames';

export function MovieReviews() {
  const comments = useAppSelector((state) => state.filmComents.comments);

  return (
    <div className={classNames(styles.blocCommentMain, 'container')}>
      <ListComments all className={styles.listComments} />
      <GeneralDataOnCommentsForTheFilm className={styles.right} comments={comments} />
    </div>
  );
}
