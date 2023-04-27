import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IFilm } from '../../shared/types/IFilm';

let movies: IFilm[] = [];

const initialState = {
  muvie: movies,
  pending: false,
  error: false,
};

export const getFilm = createAsyncThunk('film/film-request', async () => {
  const response = await axios.get(
    // `https://api.kinopoisk.dev/v1/movie/random`,
    `https://api.kinopoisk.dev/v1/review?page=1&movieId=1111765`,
    {
      headers: {
        Accept: 'application/json',
        'X-API-KEY': 'WK12G32-AS5MC31-G3YD6BS-R9FN48S',
      },
    },
  );
  return response.data;
});

export const movie = createSlice({
  name: 'movie',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFilm.pending, (state) => {
        state.pending = true;
      })
      .addCase(getFilm.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.muvie = payload.data;
      })
      .addCase(getFilm.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default movie.reducer;
