import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCommentsSearch } from 'shared/apiService/requestContent';
import { GetCommentsResponseData } from 'shared/apiService/types';
import { RootState } from './store';

let comments: GetCommentsResponseData = {
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

export const getComments = createAsyncThunk('comments/comments-request', async (id: string) => {
  const response = await getCommentsSearch(id);
  return response;
});

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

export const commentsSelector = (state: RootState) => state.filmComents.comments;
