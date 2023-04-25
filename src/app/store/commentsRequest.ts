import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IReviev } from 'shared/types/IReviev';

let comments: IReviev = {
  docs: [],
  total: 0,
  limit: 0,
  page: 0,
  pages: 0,
};

const initialState = {
  comments,
  pending: false,
  error: false,
};

export const getComments = createAsyncThunk(
  'comments/comments-request',
  async (id: number) => {
    const response = await axios.get(
      `https://api.kinopoisk.dev/v1/review?page=1&limit=100&movieId=${id}`,
      {
        headers: {
          Accept: 'application/json',
          'X-API-KEY': 'WK12G32-AS5MC31-G3YD6BS-R9FN48S',
        },
      }
    );
    return response.data;
  }
);

export const filmComents = createSlice({
  name: 'filmComents',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.pending = true;
      })
      .addCase(getComments.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.comments = payload;
      })
      .addCase(getComments.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default filmComents.reducer;
