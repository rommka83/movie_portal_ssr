import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUserCreat } from 'shared/apiService/types';

let user: IUserCreat = {
  email: '',
  password: '',
  name: '',
  surname: '',
  phoneNumber: '',
  selfDescription: '',
};

const initialState = {
  user,
  status: '',
  profileId: '',
  pending: false,
  error: false,
};

type arg = {
  email: string;
  password: string;
};

export const login = createAsyncThunk('user/user-request', async (user: IUserCreat) => {
  const response = await axios.post('http://45.141.101.66/profile', user, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data;
});

export const userResponce = createSlice({
  name: 'userResponce',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.pending = true;
        state.user = user;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.status = payload.status;
        state.profileId = payload.profileId;
      })
      .addCase(login.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default userResponce.reducer;

// export const commentsSelector = (state: RootState) => state.filmComents.comments;
