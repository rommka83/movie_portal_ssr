import { createSlice } from '@reduxjs/toolkit';

interface IActorsCreatorsModal {
  isOpen: boolean;
}

const initialState: { data: IActorsCreatorsModal } = {
  data: { isOpen: false },
};

const ActorsCreatorsModal = createSlice({
  name: 'IActorsCreatorsModal',
  initialState,
  reducers: {
    openClose(state) {
      state.data.isOpen = !state.data.isOpen;
    },
  },
});

export const { openClose } = ActorsCreatorsModal.actions;
export default ActorsCreatorsModal;
