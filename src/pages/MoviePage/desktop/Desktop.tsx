import styles from './desktop.module.css';
import { VideoPlayer } from 'entities/VideoPlayer';
import { VideoDescription } from 'widgets/VideoDescription';
import { ActorsCreators } from 'widgets/ActorsCreators';
import { GenreBookmarks } from 'shared/bisnes/GenreBookmarks';
import { CategoryFilms } from 'widgets/CategoryFilms';
import AdditionalMaterials from 'entities/AdditionalMaterials';
import { BlockComments } from 'widgets/BlockComments/BlockComments';
import { AllDevaicePoster } from 'entities/AllDevaicePoster';
// import test from '../../../temp/DB/testKinopoisk.json';
import classNames from 'classnames';
import { IFilm } from 'shared/types/IFilm';

interface IProps {
  film: IFilm;
}

export const Desktop = ({ film }: IProps) => {
  return (
    <div className={classNames(styles.root, 'container')}>
      <GenreBookmarks ganre={film.genres} className={styles.head} />
      <div className={styles.playerAndDescription}>
        <VideoPlayer
          className={styles.player}
          trailer={
            film.videos !== undefined && film.videos.trailers.length > 0
              ? film.videos.trailers[0].url
              : '#'
          }
          age={film.ageRating ? film.ageRating : 0}
        />
        <VideoDescription film={film} className={styles.description} />
      </div>
      {film.similarMovies && film.similarMovies.length > 0 && (
        <CategoryFilms
          title={`С фильмом «${film.name}» смотрят:`}
          simulyrMovie={film.similarMovies}
          className={styles.simulyar}
        />
      )}
      {/* <ActorsCreators
        persons={film.persons}
        className={styles.ActorsCreators}
      /> */}
      <AdditionalMaterials className={styles.additionalMaterials} />
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
};
