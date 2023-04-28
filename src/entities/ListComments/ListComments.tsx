import React, { FC, HTMLAttributes } from 'react';
import { Desktop } from './desktop/Desktop';
import { UseMedia } from 'shared/hooks/useMedia';
import { Mobile } from './mobile/Mobile';
import { useAppSelector } from 'app/store/hooks';
import styles from './listcomments.module.css';
import { IOneComment } from 'shared/types/IOneComment';
import { IReviev } from 'shared/types/IReviev';
import axios from 'axios';

export const ListComments: FC<HTMLAttributes<HTMLUListElement>> = ({ className }) => {
  const comments = useAppSelector((state) => state.filmComents.comments);
  const mobile = UseMedia('(max-width:600px)');
  if (comments?.total === 0)
    return <p className={styles.message}>К данному фильму, пока нет комментариев</p>;
  if (comments === undefined) return null;
  return mobile ? <Mobile comments={comments} /> : <Desktop comments={comments} />;
};
