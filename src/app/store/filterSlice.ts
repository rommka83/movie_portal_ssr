import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilter {
  genres: string;
  countries: string;
  years: string;
  novelties: string;
}

const initialState: IFilter = {
  genres: '',
  countries: '',
  years: '',
  novelties: '',
};

const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilters(state, obj: PayloadAction<IFilter>) {
      console.log('до:', { ...state });
      state = obj.payload;
      console.log('после', { ...state });
    },
  },
});

export const { addFilters } = filters.actions;
export default filters;
