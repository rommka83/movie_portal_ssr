import { IFilm } from 'shared/types/IFilm';
import { IPerson } from 'shared/types/IPerson';
import { IReviev } from 'shared/types/IReviev';

export type GetMovieResponseData = IFilm;
export type GetMoviesResponseData = {
  docs: IFilm[];
};

export type GetPersonResponseData = IPerson;
export type GetPersonsResponseData = {
  docs: IPerson[];
};

export type GetCommentsResponseData = IReviev;

export interface IUser {
  name: string;
  surname: string;
  password: string;
  email: string;
  phoneNumber: string;
  selfDescription: string;
  isAuth: boolean;
  isAutorisation: boolean;
  accessToken: string;
  refreshToken: string;
}
export interface IUserRequest {
  name: string;
  surname: string;
  password: string;
  email: string;
  phoneNumber: string;
  selfDescription: string;
}
