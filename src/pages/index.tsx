import React, { useState } from 'react';
import styles from '../../styles/home.module.css';
import { PromoSlider } from 'widgets/PromoSlider';
import { IFilm } from 'shared/types/IFilm';
import { MoviesCarousel } from 'widgets/MoviesCarousel';
import { ButtonsWithPadarkas } from 'features/ButtonsWithPadarkas';
import { AboutUs } from 'widgets/AboutUs';
import { TopSection } from 'widgets/TopSection';
import { getMovies } from 'shared/apiService/requestContent';

export const getStaticProps = async () => {
  try {
    const [fantasy, adventure, top] = await Promise.all([
      getMovies({ 'genres.name': 'фэнтези', limit: '30' }),
      getMovies({ 'genres.name': 'приключения', limit: '30' }),
      getMovies({ limit: '10', top10: '!null' }),
    ]);

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
            genreLink='фэнтези'
            title={'Фэнтези'}
            movies={fantasyFilms}
            getFilms={async () => {
              const newFantasy = await getMovies({
                'genres.name': 'фэнтези',
                page: fantasyPage.toString(),
                limit: '30',
              });
              setFantasyFilms((old) => {
                return [...old, ...newFantasy.docs];
              });
              ++fantasyPage;
            }}
          />
          <MoviesCarousel
            genreLink='приключения'
            title={'Приключения'}
            movies={adventureFilms}
            getFilms={async () => {
              const newAdventure = await getMovies({
                'genres.name': 'приключения',
                page: adventurePage.toString(),
                limit: '30',
              });
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
