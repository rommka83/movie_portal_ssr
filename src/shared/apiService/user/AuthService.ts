import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IUser, IUserRequest } from '../types';
import userApi from './userConfig';

export default class AuthService {
  static async registration(user: IUserRequest): Promise<{ data: { status: string; profileId: string } }> {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: 'profile',
      data: user,
    };
    return userApi(config);
  }

  static async login(user: IUserRequest): Promise<{ data: { status: string; profileId: string } }> {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: 'login',
      data: user,
    };
    return userApi(config);
  }

  static async logout() {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: 'logout',
    };
    return userApi(config);
  }
}
