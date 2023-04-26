import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITrailerPlayer {
  isOpen: boolean;
  trailer: string;
  age: number;
}

const initialState: { data: ITrailerPlayer } = {
  data: { isOpen: false, trailer: '', age: 0 },
};

const trailerPlayer = createSlice({
  name: 'trailerPlayer',
  initialState,
  reducers: {
    changeTrailerPlayer(state, obj: PayloadAction<ITrailerPlayer>) {
      state.data = obj.payload;
    },
  },
});

export const { changeTrailerPlayer } = trailerPlayer.actions;
export default trailerPlayer;
