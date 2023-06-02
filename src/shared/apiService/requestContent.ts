import { AxiosRequestConfig } from 'axios';
import {
  GetCommentsResponseData,
  GetMovieResponseData,
  GetMoviesResponseData,
  GetPersonResponseData,
  GetPersonsResponseData,
} from './types';
import { apiRequest } from './config';
import userApi from './user/userConfig';

export const getMovie = async (path: string): Promise<GetMovieResponseData> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `v1.3/movie/${path}`,
  };
  return await apiRequest<GetMovieResponseData>(config);
};

export const getMovies = async (
  params?: Record<string, string | string[]>,
): Promise<GetMoviesResponseData> => {
  const urlSearchParams = new URLSearchParams({ page: '1', limit: '100' });
  if (params) {
    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (Array.isArray(value)) {
        value.forEach((arrayValue) => {
          !!arrayValue && urlSearchParams.append(key, arrayValue);
        });
      } else if (!!value) {
        urlSearchParams.set(key, value);
      }
    });
  }

  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'v1.3/movie',
    params: urlSearchParams,
  };
  return await apiRequest<GetMoviesResponseData>(config);
};

export const getPerson = async (path: string): Promise<GetPersonResponseData> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `v1/person/${path}`,
  };
  return await apiRequest<GetPersonResponseData>(config);
};

export const getPersons = async (params?: Record<string, string>): Promise<GetPersonsResponseData> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'v1/person',
    params: { page: '1', limit: '30', ...params },
  };
  return await apiRequest<GetPersonsResponseData>(config);
};

export const getComments = async (params?: Record<string, string>): Promise<GetCommentsResponseData> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'v1/review',
    params: { page: '1', limit: '30', ...params },
  };
  return await apiRequest<GetCommentsResponseData>(config);
};
