/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, HTMLAttributes } from 'react';
import styles from './blockcomments.module.css';
import classNames from 'classnames';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import GeneralDataOnCommentsForTheFilm from 'entities/GeneralDataOnCommentsForTheFilm';
import { ListComments } from 'entities/ListComments';
import { commentsSelector } from 'app/store/commentsRequest';
import { useAppSelector } from 'app/store/hooks';
import { useTranslation } from 'react-i18next';
export const BlockComments: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const { t } = useTranslation();
  const comments = useAppSelector(commentsSelector);

  return (
    <section className={classNames(styles.root, className)}>
      <SectionTitle>
        {
          <div className={styles.title}>
            <span>{t('sectionTitle.MovieCommentary')}</span>
            <div className="icon-arrowRight_6x16__0"></div>
          </div>
        }
      </SectionTitle>
      <ButtonOrLink variant="third" large={false} className={styles.commentAdd}>
        <span className={styles.btnAddText}>{t('sectionTitle.WriteAreview')}</span>
      </ButtonOrLink>
      <div className={styles.blocCommentMain}>
        <ListComments className={styles.listComments} />
        <GeneralDataOnCommentsForTheFilm className={styles.right} comments={comments} />
      </div>
    </section>
  );
};
