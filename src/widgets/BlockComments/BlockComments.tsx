/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, HTMLAttributes, useEffect } from 'react';
import styles from './blockcomments.module.css';
import classNames from 'classnames';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { t } from 'i18next';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import GeneralDataOnCommentsForTheFilm from 'entities/GeneralDataOnCommentsForTheFilm';
import { ListComments } from 'entities/ListComments';
import { getComments } from 'app/store/commentsRequest';
import { useAppDispatch } from 'app/store/hooks';
import { useParams } from 'react-router';

export const BlockComments: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id === undefined) return;
    dispatch(getComments(+id));
  }, [id]);

  return (
    <section className={classNames(styles.root, className)}>
      <SectionTitle
        children={
          <div className={styles.title}>
            <span>{t('sectionTitle.movie commentary')}</span>
            <div className='icon-arrowRight_6x16__0'></div>
          </div>
        }
      />
      <ButtonOrLink
        variant='third'
        large={false}
        children={<span className={styles.btnAddText}>Написать отзыв</span>}
        className={styles.commentAdd}
      />
      <div className={styles.blocCommentMain}>
        <ListComments className={styles.listComments} />
        <GeneralDataOnCommentsForTheFilm className={styles.right} />
      </div>
    </section>
  );
};
