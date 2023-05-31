import React, { useState } from 'react';
import styles from '../../styles/home.module.css';
import { PromoSlider } from 'widgets/PromoSlider';
import { IFilm } from 'shared/types/IFilm';
import { MoviesCarousel } from 'widgets/MoviesCarousel';
import { ButtonsWithPadarkas } from 'features/ButtonsWithPadarkas';
import { AboutUs } from 'widgets/AboutUs';
import { TopSection } from 'widgets/TopSection';
import { getMoviesByGenre, getTop10 } from 'shared/apiService/requestContent';

export const getStaticProps = async () => {
  try {
    const top = await getTop10();
    const fantasy = await getMoviesByGenre('фэнтези', 1);
    const adventure = await getMoviesByGenre('приключения', 1);

    return {
      props: { top: top.docs, adventure: adventure.docs, fantasy: fantasy.docs },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
let fantasyPage = 2;
let adventurePage = 2;

interface Iprops {
  top: IFilm[];
  adventure: IFilm[];
  fantasy: IFilm[];
}
export default function Home({ top, adventure, fantasy }: Iprops) {
  const [fantasyFilms, setFantasyFilms] = useState(fantasy);
  const [adventureFilms, setAdventureFilms] = useState(adventure);
  return (
    <>
      <PromoSlider />
      <div className='container'>
        <div className={styles.wrapper}>
          <ButtonsWithPadarkas />
          <AboutUs />
          <TopSection films={top} />
          <MoviesCarousel
            title={'Фэнтези'}
            movies={fantasyFilms}
            getFilms={async () => {
              const newFantasy = await getMoviesByGenre('фэнтези', fantasyPage);
              setFantasyFilms((old) => {
                return [...old, ...newFantasy.docs];
              });
              ++fantasyPage;
            }}
          />
          <MoviesCarousel
            title={'Приключения'}
            movies={adventureFilms}
            getFilms={async () => {
              const newAdventure = await getMoviesByGenre('приключения', adventurePage);
              setAdventureFilms((old) => {
                return [...old, ...newAdventure.docs];
              });
              ++adventurePage;
            }}
          />
        </div>
      </div>
    </>
  );
}
