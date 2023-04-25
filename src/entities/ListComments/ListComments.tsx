import React, { FC, HTMLAttributes } from 'react';
import { Desktop } from './desktop/Desktop';
import { UseMedia } from 'shared/hooks/useMedia';
import { Mobile } from './mobile/Mobile';
import { useAppSelector } from 'app/store/hooks';
import styles from './listcomments.module.css';

export const ListComments: FC<HTMLAttributes<HTMLUListElement>> = ({
  className,
}) => {
  const mobile = UseMedia('(max-width:600px)');
  const { comments, error } = useAppSelector((store) => store.filmComents);

  if (error) return <p className={styles.message}>Произошла ошибка</p>;
  if (comments.total === 0)
    return (
      <p className={styles.message}>К данному фильму, пока нет комментариев</p>
    );

  return mobile ? (
    <Mobile comments={comments} />
  ) : (
    <Desktop comments={comments} />
  );
};
