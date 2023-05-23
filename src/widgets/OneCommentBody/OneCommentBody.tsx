import React, { FC } from 'react';
import styles from './onecommentbody.module.css';
import { IOneComment } from 'shared/types/IOneComment';
import { comment } from 'stories/OneComment.stories';
import classNames from 'classnames';

interface IProps {
  comment: IOneComment;
  className?: string;
}

export const OneCommentBody: FC<IProps> = ({ className, comment }) => {
  return (
    <div className={classNames(styles.commentBody, className)}>
      <h5 className={styles.commentTitle}>{comment.title}</h5>
      <p className={styles.commentContent}>{comment.review}</p>
    </div>
  );
};
