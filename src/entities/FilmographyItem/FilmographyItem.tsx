import React from 'react';

import styles from './filmographyItem.module.css';


import { NavLink } from 'react-router-dom';

import ButtonOrLink from 'shared/ui/ButtonOrLink';
import { IActorFilms } from 'shared/types/IActorFilms';
import { UseMedia } from 'shared/hooks/useMedia';


type PropsType = {
    movie: IActorFilms
}


export const FilmographyItem: React.FC<PropsType> = ({ movie }) => {

    const brakePoint = UseMedia('(max-width:380px)')


    return (
        <NavLink
            to={`/MoviePage/${movie.id}/${movie.name}`}
            className={styles.filmographyItem}
        >
            <div className={styles.filmographyPhoto}>
                <div className={styles.filmographyImg}></div>
            </div>
            <div className={styles.filmographyBody}>
                <div className={styles.filmographyInfo}>
                    <div className={styles.filmographyTitle}>
                        {
                            movie.name && brakePoint &&
                                movie.name.length > 16
                                ? movie.name.slice(0, 16) + '...'
                                : movie.name
                        }
                    </div>
                    {movie.rating && <div className={styles.filmographyRating}>
                        Рейтинг Иви:
                        <span className={styles.filmographyRatingSpan}>
                            {movie.rating}
                        </span>
                    </div>}
                </div>
                <ButtonOrLink
                    to={`/MoviePage/${movie.id}/${movie.name}`}
                    className={styles.btn}
                    variant={'secondary'}
                >
                    Смотреть
                </ButtonOrLink>
            </div>
        </NavLink>
    )
}
