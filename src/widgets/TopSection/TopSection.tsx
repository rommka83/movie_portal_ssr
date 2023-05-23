import React from 'react';
import styles from './topsection.module.css';
import { t } from 'i18next';
import PosterCards from 'shared/bisnes/PosterCards';
import { Carousel } from 'shared/ui/Carousel';
import Link from 'next/link';
import { IFilm } from 'shared/types/IFilm';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { SvgIcon } from 'shared/ui/SvgIcon';

interface IProps extends React.ComponentPropsWithoutRef<'div'> {
  films: IFilm[];
}

export function TopSection({ films, className }: IProps) {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  return (
    <section className={classNames(styles.root, className)}>
      <SectionTitle>
        <SvgIcon type='top' />
      </SectionTitle>
      <Carousel
        carouselContainerClassName={styles.carousel}
        className={styles.movieBadgeCarouselContent}
        withArrow
        withButton
        scrollMultipleItems
      >
        {films.map((movie, index) => {
          return (
            <div key={movie.id} className={styles.movieBadgeContainer}>
              <Link href={`/MoviePage/${movie.id}`}>
                <PosterCards
                  src={movie.poster?.url}
                  name={movie.name}
                  className={styles.card}
                  top
                  num={index}
                />
              </Link>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
