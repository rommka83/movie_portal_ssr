import React from 'react';
import styles from './filterpanelcarousel.module.css';
import { Carousel } from 'shared/ui/Carousel';
import { CarouselGenreCard } from './CarouselGenreCard';
import { FilterPanelButton, FilterPanelButtonType } from './FilterPanelButton';
import classNames from 'classnames';

interface IFilterPanelCarousel {
  array: string[];
  type: 'genres' | FilterPanelButtonType;
  carouselContainerClassName?: string;
  withButton?: boolean;
}
export const FilterPanelCarousel = ({
  array,
  type,
  carouselContainerClassName,
  withButton,
}: IFilterPanelCarousel) => {
  return (
    <Carousel
      className={classNames(styles.carousel, {
        [styles.carouselGenres]: type === 'genres',
        [styles.carouselCountries]: type === 'countries',
      })}
      carouselContainerClassName={carouselContainerClassName}
      withButton={withButton}
      scrollMultipleItems
    >
      {array.map((item) =>
        type === 'genres' ? (
          <CarouselGenreCard key={item} genre={item} />
        ) : (
          <FilterPanelButton key={item} item={item} type={type} />
        ),
      )}
    </Carousel>
  );
};
