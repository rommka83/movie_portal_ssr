import React, {
  FC,
  HTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { MovieBadge } from 'entities/MovieBadge';
import { nanoid } from '@reduxjs/toolkit';
import styles from './categoryfilms.module.css';
import { UseMedia } from 'shared/hooks/useMedia';
import { Link } from 'react-router-dom';
import { IFilm } from 'shared/types/IFilm';
import { PosterCards } from 'shared/bisnes/PosterCards/PosterCards';
import { ISimulyarMovies } from 'shared/types/ISimulyarMovie';
import classNames from 'classnames';

interface IProps {
  title: string;
  movies?: IFilm[];
  simulyrMovie?: ISimulyarMovies[];
}
type props = HTMLAttributes<HTMLElement> & IProps;

export const CategoryFilms: FC<props> = ({
  title,
  movies,
  children,
  simulyrMovie,
  className,
}) => {
  const list = useRef<HTMLUListElement>(null);
  const [ofset, setOfset] = useState(0);
  const [widthList, setWidthList] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  const fiveSlides = UseMedia('(max-width: 1450px)');
  const threeSlides = UseMedia('(max-width: 1050px)');
  const twoSlides = UseMedia('(max-width: 630px)');
  const oneSlide = UseMedia('(max-width: 400px)');

  const amountCards = useMemo(() => {
    if (oneSlide) return 1;
    if (twoSlides) return 2;
    if (threeSlides) return 3;
    if (fiveSlides) return 5;
    return 7;
  }, [fiveSlides, threeSlides, twoSlides, oneSlide]);

  const moveLeft = function () {
    setOfset((currentOfset) => {
      if (widthOfset === undefined) return currentOfset;
      const newOfset = currentOfset - widthOfset;
      return newOfset;
    });
  };

  const moveRight = function () {
    setOfset((currentOfset) => {
      if (widthOfset === undefined) return currentOfset;
      const newOfset = currentOfset + widthOfset;

      return newOfset;
    });
  };

  const cardWidth: number = useMemo(() => {
    if (list.current === null) return 0;
    const cardWidth = (widthList - 20 * (amountCards - 1)) / amountCards;
    return cardWidth;
  }, [amountCards, widthList]);

  const widthOfset = useMemo(() => {
    if (cardWidth === undefined) return;
    const widthOfset = cardWidth + 20;
    return widthOfset;
  }, [cardWidth]);

  useEffect(() => {
    setWidthList((current) => {
      if (list.current === null) return current;
      return list.current.offsetWidth;
    });

    setScrollWidth((current) => {
      if (list.current === null) return current;
      return list.current.scrollWidth;
    });
  }, [widthList]);

  return (
    <section className={classNames(styles.root, className)}>
      <SectionTitle children={title} />
      <div className={styles.sliderWrapper}>
        <div className={styles.window}>
          <ul
            className={styles.list}
            ref={list}
            style={{ transform: `translateX(${ofset}px)` }}
          >
            {movies !== undefined &&
              movies.map((obj) => {
                return (
                  <li className={styles.item} key={nanoid()}>
                    <div
                      style={{
                        width: `${cardWidth !== undefined ? cardWidth : 0}px`,
                        height: '100%',
                      }}
                    >
                      <Link to={`/MoviePage/${obj.id}/${obj.name}`}>
                        <MovieBadge film={obj} />
                      </Link>
                    </div>
                  </li>
                );
              })}
            {simulyrMovie !== undefined &&
              simulyrMovie.map((obj) => {
                return (
                  <li className={styles.item} key={nanoid()}>
                    <div
                      style={{
                        width: `${cardWidth !== undefined ? cardWidth : 0}px`,
                        height: '100%',
                      }}
                    >
                      <Link to={`/MoviePage/${obj.id}/${obj.name}`}>
                        <PosterCards
                          src={obj.poster.url ? obj.poster.url : ''}
                          name={obj.name}
                        />
                      </Link>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      {Math.round(ofset - cardWidth * amountCards - 20 * (amountCards - 1)) !==
        -scrollWidth && (
        <div
          className={`${styles.controlR} ${styles.control}  icon-arrowRight_8x20__0`}
          onClick={moveLeft}
        />
      )}
      {ofset < 0 && (
        <div
          className={`${styles.controlL} ${styles.control}  icon-arrowLeft_8x20__0`}
          onClick={moveRight}
        />
      )}
    </section>
  );
};
