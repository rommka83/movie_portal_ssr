import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filters from './filterSlice';
import { movie } from './oneFilmSliceDELETE';
import { filmComents } from './commentsRequest';
import movieTitleSearch from './movieTitleSearchSlice';
import { allGenres } from './allGenresRequest';

export const store = configureStore({
  reducer: {
    filters: filters.reducer,
    movie: movie.reducer,
    filmComents: filmComents.reducer,
    movieTitleSearch: movieTitleSearch,
    allGenres: allGenres.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
