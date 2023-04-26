import styles from './tablet.module.css';
import { VideoPlayer } from 'entities/VideoPlayer';
import { useMemo } from 'react';
import { VideoDescription } from 'widgets/VideoDescription';
import { ActorsCreators } from 'widgets/ActorsCreators';
import { GenreBookmarks } from 'shared/bisnes/GenreBookmarks';
import { CategoryFilms } from 'widgets/CategoryFilms';
import AdditionalMaterials from 'entities/AdditionalMaterials';
import { BlockComments } from 'widgets/BlockComments/BlockComments';
import testComments from '../../../temp/DB/testComments.json';
import { AllDevaicePoster } from 'entities/AllDevaicePoster';
import test from '../../../temp/DB/testKinopoisk.json';
import classNames from 'classnames';
import { Back } from 'shared/ui/Back/Back';
import { useTranslation } from 'react-i18next';
import { ActorsList } from 'entities/ActorsList';
import { Grading } from 'features/Grading';
import { ContentText } from 'shared/ui/ContentText';

interface IProps {
  id: string;
}

export function Tablet({ id }: IProps) {
  const { t } = useTranslation();

  const film = useMemo(() => {
    if (id === undefined) return;
    return test.find((el) => el.id === +id);
  }, [id]);

  return film === undefined ? null : (
    <div className='container'>
      <Back f={() => {}}>{t('Back')}</Back>
      <VideoDescription short film={film} className={styles.description} />
      <VideoPlayer
        trailer={
          film.videos !== undefined && film.videos.trailers.length > 0
            ? film.videos.trailers[0].url
            : '#'
        }
        age={film.ageRating ? film.ageRating : 0}
        className={styles.player}
      />
      <ActorsList actors={film.persons} reiting={film.rating.kp} />
      <ContentText className={styles.contentText}>
        {film.description}
      </ContentText>
      <Grading grading={film.rating.kp} className={styles.grading} />

      {film.similarMovies.length > 0 && (
        <CategoryFilms
          title={`С фильмом «${film.name}» смотрят:`}
          simulyrMovie={film.similarMovies}
          className={styles.simulyar}
        />
      )}
      <ActorsCreators
        persons={film.persons}
        className={styles.actorsCreators}
      />
      <AdditionalMaterials className={styles.AdditionalMaterials} />
      <BlockComments className={styles.comments} />
      <AllDevaicePoster
        name={film.name}
        poster={film.poster.url}
        className={styles.allDvices}
      />
      <GenreBookmarks
        home
        ganre={film.genres}
        page={film.name}
        className={styles.crumbs}
      />
    </div>
  );
}
