import React, { FC, HTMLAttributes } from 'react';
import styles from './allparticipants.module.css';
import { Back } from 'shared/ui/Back/Back';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { IFilm } from 'shared/types/IFilm';
import { useAppSelector } from 'app/store/hooks';

interface IProps {
  // film?: IFilm;
}

export const AllParticipants: FC<HTMLAttributes<HTMLDivElement> & IProps> = ({ className }) => {
  const { film } = useAppSelector((state) => state.movie);
  return (
    <div className={styles.root}>
      <Back className={styles.back} f={() => {}}>
        Назад
      </Back>
      <div className={styles.content}>
        <SectionTitle>{film.name}</SectionTitle>
      </div>
    </div>
  );
};
