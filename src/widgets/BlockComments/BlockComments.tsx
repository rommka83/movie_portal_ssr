/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, HTMLAttributes, useState } from 'react';
import styles from './blockcomments.module.css';
import classNames from 'classnames';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import GeneralDataOnCommentsForTheFilm from 'entities/GeneralDataOnCommentsForTheFilm';
import { ListComments } from 'entities/ListComments';
import { commentsSelector } from 'app/store/commentsRequest';
import { useAppSelector } from 'app/store/hooks';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import Link from 'next/link';
import { UserPhoto } from 'shared/user/UserPhoto/UserPhoto';
import { CastomSelect } from 'features/CastomSelect';

export const BlockComments: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const { t } = useTranslation();
  const comments = useAppSelector(commentsSelector);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const categoriesComment = ['Положительная', 'Отрицательная', 'Нейтральная'];
  const [valueSelect, setValueSelect] = useState('Нейтральная');
  const [valueTitleComment, setValueTitleComment] = useState('');
  const [valueComment, setValueComment] = useState('');

  const assignAcommentCategory = (value: string) => {
    setValueSelect(value);
  };

  return (
    <>
      <section className={classNames(styles.root, className)}>
        <Link href='/MovieReviews'>
          <SectionTitle onClick={() => setModalIsOpen(true)}>
            {
              <div className={styles.title}>
                <span>{t('sectionTitle.MovieCommentary')}</span>
                <div className='icon-arrowRight_6x16__0'></div>
              </div>
            }
          </SectionTitle>
        </Link>
        <ButtonOrLink
          variant='third'
          large={true}
          className={styles.commentAdd}
          onClick={() => setModalIsOpen(true)}
        >
          <span className={styles.btnAddText}>{t('sectionTitle.WriteAreview')}</span>
        </ButtonOrLink>
        <div className={styles.blocCommentMain}>
          <ListComments className={styles.listComments} />
          <GeneralDataOnCommentsForTheFilm className={styles.right} comments={comments} />
        </div>
      </section>
      {modalIsOpen && (
        <Modal>
          <div className={classNames(styles.modal, 'container')}>
            <div className={styles.modalHead}>
              <UserPhoto />
              <span className={styles.modalHeadName}>Имя пользователя</span>
              <ButtonOrLink
                variant='third'
                large={true}
                className={styles.modalHeadBtn}
                onClick={() => setModalIsOpen(false)}
              >
                <span>выйти</span>
              </ButtonOrLink>
            </div>
            <CastomSelect
              placeholder='Тип рецензии'
              list={categoriesComment}
              className={styles.categoryComment}
              func={(val) => assignAcommentCategory(val)}
            />
            <input
              type='text'
              className={styles.inpTitle}
              placeholder='Заголовок'
              value={valueTitleComment}
              onChange={(e) => setValueTitleComment(e.target.value)}
            />
            <textarea
              className={styles.textComment}
              placeholder='Текст'
              value={valueComment}
              onChange={(e) => setValueComment(e.target.value)}
            />
            <ButtonOrLink>
              <span>Опубликовать</span>
            </ButtonOrLink>
          </div>
        </Modal>
      )}
    </>
  );
};
