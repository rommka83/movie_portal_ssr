import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filters from './filterSlice';
import changeTrailerPlayer from './trailerPlayerSliceDELET';
import ActorsCreatorsModal from './ActorsCreatorsModalSlice';
import { movie } from './movieRequestDELET';
import { filmComents } from './commentsRequest';

export const store = configureStore({
  reducer: {
    filters: filters.reducer,
    changeTrailerPlayer: changeTrailerPlayer.reducer,
    ActorsCreatorsModal: ActorsCreatorsModal.reducer,
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
