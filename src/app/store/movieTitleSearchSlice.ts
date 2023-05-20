import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getMovieSearch } from 'shared/apiService/requestContent';
import { IFilm } from 'shared/types/IFilm';

const _films: IFilm[] = [];

const initialState = {
  films: _films,
  filmSearchPending: false,
  filmSearchError: false,
};

export const getMovieTitleSearch = createAsyncThunk<IFilm[], string>(
  'movieTitleSearch/request',
  async (name) => {
    const response = await getMovieSearch(name);
    return response.docs;
  },
);

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
