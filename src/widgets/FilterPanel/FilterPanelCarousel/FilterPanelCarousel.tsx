import React from 'react';
import styles from './filterpanelcarousel.module.css';
import { Carousel } from 'shared/ui/Carousel';
import { CarouselGenreCard } from './CarouselGenreCard';
import { FilterPanelButton, FilterPanelButtonType } from './FilterPanelButton';
import classNames from 'classnames';
import { IGenre } from 'shared/types/IGenre';
import { ICountry } from 'shared/types/ICountry';

interface IFilterPanelCarousel {
  array: IGenre[] | ICountry[] | string[];
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
      carouselChildrenClassName={classNames(styles.carousel, {
        [styles.carouselGenres]: type === 'genres',
        [styles.carouselButtons]: type !== 'genres',
      })}
      carouselContainerClassName={carouselContainerClassName}
      withButton={withButton}
      scrollMultipleItems
    >
      {array.map((item) => {
        if (typeof item === 'string' && type !== 'genres') {
          return <FilterPanelButton key={item} item={item} type={type} />;
        }
        if (type === 'genres' && typeof item === 'object') {
          return <CarouselGenreCard key={item.id} genre={item.name} />;
        }
        if (type === 'countries' && typeof item === 'object') {
          return <FilterPanelButton key={item.id} item={item.name} type={type} />;
        }
      })}
    </Carousel>
  );
};
