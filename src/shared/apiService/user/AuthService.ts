import { AxiosResponse } from 'axios';
import { IUserCreat } from '../types';
import userApi from './userConfig';

export default class AuthService {
  //   static async login(user: IUserCreat): Promise<AxiosResponse<{ status: string; profileId: string }>> {
  //     return userApi.post<{ status: string; profileId: string }>('/profile', { user });
  //   }
  //   static async registration(email: string, password: string): Promise<AxiosResponse<IUserCreat>> {
  //     return userApi.post<IUserCreat>('/registration', { email, password });
  //   }
  //   static async logout(): Promise<void> {
  //     return userApi.post('/logout');
  //   }
}
