import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getComments } from 'shared/apiService';
import { IReviev } from 'shared/types/IReviev';
import { onExtraReducersRejected } from './helpers';
import { RootState } from './store';

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

export const getCommentsThunk = createAsyncThunk(
  'comments/comments-request',
  async (id: string, { dispatch }) => {
    try {
      const response = await getComments({ limit: '50', movieId: id });
      return response;
    } catch (err) {
      dispatch(
        onExtraReducersRejected({
          title: 'Errors.title',
          text: 'Errors.getComments',
        }),
      );
      return comments;
    }
  },
);

export const filmComents = createSlice({
  name: 'filmComents',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsThunk.pending, (state) => {
        state.pending = true;
        state.comments = comments;
      })
      .addCase(getCommentsThunk.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.comments = payload;
      })
      .addCase(getCommentsThunk.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default filmComents.reducer;

export const commentsSelector = (state: RootState) => state.filmComents.comments;
