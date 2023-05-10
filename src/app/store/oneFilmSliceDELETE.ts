import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilm } from '../../shared/types/IFilm';

const film: IFilm = {
  id: 0,
  name: '',
  enName: null,
  year: 0,
  description: null,
  shortDescription: null,
  rating: {
    kp: 0,
    imdb: 0,
    tmdb: 0,
    filmCritics: 0,
    russianFilmCritics: 0,
    await: 0,
  },
  movieLength: 0,
  ageRating: null,
  poster: {
    url: '',
    previewUrl: '',
  },
  videos: {
    trailers: [
      {
        url: '',
        name: '',
        site: '',
        type: '',
        size: 0,
      },
    ],
    teasers: [
      {
        url: '',
        name: '',
        site: '',
        type: '',
        size: 0,
      },
    ],
  },
  genres: [],
  countries: [],
  persons: [],
  similarMovies: null,
  facts: null,
  alternativeName: null,
};

const initialState = {
  film,
};

export const movie = createSlice({
  name: 'movie',
  initialState: initialState,
  reducers: {
    addFilm(state, obj: PayloadAction<IFilm>) {
      state.film = obj.payload;
    },
  },
});

export const { addFilm } = movie.actions;
export default movie.reducer;
