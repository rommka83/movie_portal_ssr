import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filters from './filterSlice';
import { movie } from './oneFilmSliceDELETE';
import { filmComents } from './commentsRequest';

export const store = configureStore({
  reducer: {
    filters: filters.reducer,
    movie: movie.reducer,
    filmComents: filmComents.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
