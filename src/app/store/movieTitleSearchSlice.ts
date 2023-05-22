import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMovies } from 'shared/apiService';
import { IFilm } from 'shared/types/IFilm';
import { onExtraReducersRejected } from './helpers';

const _films: IFilm[] = [];

const initialState = {
  films: _films,
  filmSearchPending: false,
  filmSearchError: false,
};

export const getMovieTitleSearch = createAsyncThunk(
  'movieTitleSearch/request',
  async (name: string, { dispatch }) => {
    try {
      const response = await getMovies({ limit: '10', name });
      return response.docs;
    } catch (err) {
      dispatch(
        onExtraReducersRejected({
          title: 'Errors.title',
          text: 'Errors.getMovieTitle',
        }),
      );
      return _films;
    }
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
