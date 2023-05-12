import styles from './desktop.module.css';
import { VideoPlayer } from 'entities/VideoPlayer';
import { VideoDescription } from 'widgets/VideoDescription';
import { ActorsCreators } from 'widgets/ActorsCreators';
import { GenreBookmarks } from 'shared/bisnes/GenreBookmarks';
import AdditionalMaterials from 'entities/AdditionalMaterials';
import { BlockComments } from 'widgets/BlockComments/BlockComments';
import { AllDevaicePoster } from 'entities/AllDevaicePoster';
import classNames from 'classnames';
import { IFilm } from 'shared/types/IFilm';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'shared/ui/Carousel';
import Link from 'next/link';
import PosterCards from 'shared/bisnes/PosterCards';

interface IProps {
  film: IFilm;
}

const Desktop = ({ film }: IProps) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  return (
    <div className={classNames(styles.root, 'container')}>
      <GenreBookmarks ganre={film.genres} className={styles.head} />
      <div className={styles.playerAndDescription}>
        <VideoPlayer
          className={styles.player}
          trailer={film.videos !== undefined && film.videos.trailers.length > 0 ? film.videos.trailers[0].url : '#'}
          age={film.ageRating ? film.ageRating : 0}
        />
        <VideoDescription film={film} className={styles.description} />
      </div>
      {film.similarMovies && film.similarMovies.length > 0 && (
        <Carousel
          carouselContainerClassName={styles.carousel}
          className='movieBadgeCarouselContent'
          title={`${t('sectionTitle.WithFilm')} «${lng === 'ru' ? film.name : film.enName ?? film.name}» ${t(
            'sectionTitle.watching',
          )}:`}
          withArrow
          withButton
          scrollMultipleItems
        >
          {film.similarMovies?.map((movie) => (
            <div key={movie.id} className='movieBadgeContainer'>
              <Link href={`/MoviePage/${movie.id}`}>
                <PosterCards src={movie.poster.url ?? ''} name={movie.name} />
              </Link>
            </div>
          ))}
        </Carousel>
      )}
      <ActorsCreators persons={film.persons} className={styles.actorsCreators} />
      <AdditionalMaterials className={styles.additionalMaterials} video={film.videos} />
      <BlockComments className={styles.comments} />
      <AllDevaicePoster name={film.name} enName={film.enName} poster={film.poster.url} className={styles.allDvices} />
      <GenreBookmarks home ganre={film.genres} page={film.name} className={styles.crumbs} />
    </div>
  );
};

export default Desktop;
