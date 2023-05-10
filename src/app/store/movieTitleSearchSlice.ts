import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IFilm } from 'shared/types/IFilm';

const _films: IFilm[] = [];

const initialState = {
  films: _films,
  filmSearchPending: false,
  filmSearchError: false,
};

export const getMovieTitleSearch = createAsyncThunk('movieTitleSearch/request', async (name: string) => {
  const response = await axios.get(`https://api.kinopoisk.dev/v1.3/movie?page=1&limit=10&name=${name}`, {
    headers: {
      Accept: 'application/json',
      // 'X-API-KEY': 'DMGDYW0-0FC4Z7T-N7R9K0N-HFPEH3J',
      'X-API-KEY': 'WK12G32-AS5MC31-G3YD6BS-R9FN48S',
      // 'X-API-KEY': 'PZQK66P-MP6MTV9-MMNQB95-S4P3NH9',
    },
  });
  return response.data.docs;
});

const movieTitleSearch = createSlice({
  name: 'movieTitleSearch',
  initialState: initialState,
  reducers: {
    resetmovieTitleSearch(state) {
      state.films = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(getMovieTitleSearch.pending, (state) => {
      state.filmSearchPending = true;
    });

    builder.addCase(getMovieTitleSearch.fulfilled, (state, action) => {
      state.filmSearchPending = false;
      state.films = action.payload;
    });

    builder.addCase(getMovieTitleSearch.rejected, (state) => {
      state.filmSearchPending = false;
      state.filmSearchError = true;
    });
  },
});

export const { resetmovieTitleSearch } = movieTitleSearch.actions;

export default movieTitleSearch.reducer;
