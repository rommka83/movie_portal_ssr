import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IReviev } from 'shared/types/IReviev';
import { RootState } from './store';

const initialState = {
  genres: [],
  pending: false,
  error: false,
};

export const getGenres = createAsyncThunk('genres/genres-request', async () => {
  const response = await axios.get(`https://api.kinopoisk.dev/v1.3/movie?page=1&limit=10&genres`, {
    headers: {
      Accept: 'application/json',
      'X-API-KEY': 'WK12G32-AS5MC31-G3YD6BS-R9FN48S',
    },
  });
  return response.data;
});

export const allGenres = createSlice({
  name: 'allGenres',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.pending, (state) => {
        state.pending = true;
      })
      .addCase(getGenres.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.genres = payload;
      })
      .addCase(getGenres.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default allGenres.reducer;
