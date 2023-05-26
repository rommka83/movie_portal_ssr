import classNames from 'classnames';
import { ActorsList } from 'entities/ActorsList';
import { ControlsVideoContent } from 'features/ControlsVideoContent';
import { Grading } from 'features/Grading';
import React from 'react';
import { IFilm } from 'shared/types/IFilm';
import { ContentText } from 'shared/ui/ContentText';
import styles from '../videodescription.module.css';

interface IVideoDescriptionBody {
  film: IFilm;
  trailer: string;
  age: number;
  containerClassName?: string;
}
export const VideoDescriptionBody = ({ film, trailer, age, containerClassName }: IVideoDescriptionBody) => {
  return (
    <div className={classNames(containerClassName, styles.videoDescriptionBodyContainer)}>
      <div className={styles.innerContainer}>
        <ActorsList actors={film.persons} reiting={film.rating ? film.rating.kp : 0} />
        <ContentText className={styles.description}>{film.description}</ContentText>
        <Grading grading={film.rating ? film.rating.kp : 0} />
      </div>
      <ControlsVideoContent trailer={trailer} age={age} className={styles.controlsVideoContent} />
    </div>
  );
};
