import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TipIconType } from 'shared/ui/Tip/Tip';
import { RootState } from './store';

export interface ITip {
  id: string;
  title: string;
  text: string;
  type: TipIconType;
}
interface ITips {
  tips: ITip[];
}

const initialState: ITips = {
  tips: [],
};

const tips = createSlice({
  name: 'tips',
  initialState,
  reducers: {
    addTip(state, action: PayloadAction<ITip>) {
      state.tips.unshift(action.payload);
    },
    removeTip(state, action: PayloadAction<string>) {
      state.tips = state.tips.filter((tip) => tip.id !== action.payload);
    },
  },
});

export const { addTip, removeTip } = tips.actions;
export default tips;

export const tipsSelector = (state: RootState) => state.tips.tips;
