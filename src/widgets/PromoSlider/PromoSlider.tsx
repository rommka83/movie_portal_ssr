import React from 'react';

import styles from './promoSlider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import { PromoSlide } from 'entities/PromoSlide';
import { IFilm } from 'shared/types/IFilm';
import { UseMedia } from 'shared/hooks/useMedia';

type PropsType = {
  movies: IFilm[];
};

export const PromoSlider: React.FC<PropsType> = ({ movies }) => {

  const brakePoint = UseMedia('(max-width:768px)')


  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1.25}
      navigation={!brakePoint}
      loop
      centeredSlides
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className={styles.slider}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id} className={styles.slide}>
          <PromoSlide movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
