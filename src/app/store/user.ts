import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser, IUserRequest } from 'shared/apiService/types';
import AuthService from 'shared/apiService/user/AuthService';
import { onExtraReducersRejected } from './helpers';

const user: IUser = {
  name: '',
  surname: '',
  password: '',
  email: '',
  phoneNumber: '',
  selfDescription: '',
  isAuth: false,
  isAutorisation: false,
  accessToken: '',
  refreshToken: '',
};

const initialState = {
  user,
  status: '',
  profileId: '',
  pending: false,
  error: false,
};

export const registration = createAsyncThunk(
  'user/user-request',
  async (responce: IUserRequest, { dispatch }) => {
    try {
      const response = await AuthService.registration(responce);
      return response.data;
    } catch (err) {
      dispatch(
        onExtraReducersRejected({
          title: 'ошибка запроса',
          text: `${err}`,
        }),
      );
      return { status: 'неуспех', profileId: 'нет' };
    }
  },
);

export const login = createAsyncThunk('user/user-request', async (responce: IUserRequest, { dispatch }) => {
  try {
    const response = await AuthService.login(responce);
    return response.data;
  } catch (err) {
    dispatch(
      onExtraReducersRejected({
        title: 'ошибка запроса',
        text: `${err}`,
      }),
    );
    return { status: 'неуспех', profileId: 'нет' };
  }
});

export const userResponce = createSlice({
  name: 'userResponce',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.pending = true;
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.status = payload.status;
        state.profileId = payload.profileId;
      })
      .addCase(registration.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default userResponce.reducer;
