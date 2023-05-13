import styles from './tablet.module.css';
import { VideoPlayer } from 'entities/VideoPlayer';
import { VideoDescription } from 'widgets/VideoDescription';
import { ActorsCreators } from 'widgets/ActorsCreators';
import AdditionalMaterials from 'entities/AdditionalMaterials';
import { BlockComments } from 'widgets/BlockComments/BlockComments';
import { AllDevaicePoster } from 'entities/AllDevaicePoster';
import { Back } from 'shared/ui/Back/Back';
import { useTranslation } from 'react-i18next';
import { ActorsList } from 'entities/ActorsList';
import { Grading } from 'features/Grading';
import { ContentText } from 'shared/ui/ContentText';
import { IFilm } from 'shared/types/IFilm';
import PosterCards from 'shared/bisnes/PosterCards';
import { Carousel } from 'shared/ui/Carousel';
import Link from 'next/link';

interface IProps {
  film: IFilm;
}

export default function Tablet({ film }: IProps) {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  return film === undefined ? null : (
    <div className='container'>
      <Back f={() => {}}>{t('Back')}</Back>
      <VideoDescription short film={film} className={styles.description} />
      <VideoPlayer
        trailer={film.videos !== undefined && film.videos.trailers.length > 0 ? film.videos.trailers[0].url : '#'}
        age={film.ageRating ? film.ageRating : 0}
        className={styles.player}
      />
      <ActorsList actors={film.persons} reiting={film.rating ? film.rating.kp : 0} />
      <ContentText className={styles.contentText}>{film.description}</ContentText>
      <Grading grading={film.rating ? film.rating.kp : 0} className={styles.grading} />
      {film.similarMovies && film.similarMovies.length > 0 && (
        <Carousel
          carouselContainerClassName={styles.carousel}
          className={styles.movieBadgeCarouselContent}
          title={`${t('sectionTitle.WithFilm')} «${lng === 'ru' ? film.name : film.enName ?? film.name}» ${t(
            'sectionTitle.watching',
          )}:`}
          withArrow
          withButton
          scrollMultipleItems
        >
          {film.similarMovies?.map((movie) => (
            <div key={movie.id} className={styles.movieBadgeContainer}>
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
    </div>
  );
}
