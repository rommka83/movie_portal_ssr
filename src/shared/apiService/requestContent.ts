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

export const getMovies = async (params?: Record<string, string>): Promise<GetMoviesResponseData> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'v1.3/movie',
    params: { page: '1', limit: '30', ...params },
  };
  return await apiRequest<GetMoviesResponseData>(config);
};

export const getMoviesByGenre = async (
  name: string,
  page: number,
  params?: Record<string, string>,
): Promise<GetMoviesResponseData> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'v1.3/movie',
    params: { page: `${page}`, limit: '30', 'genres.name': `${name}`, ...params },
  };
  return await apiRequest<GetMoviesResponseData>(config);
};

export const getTop10 = async (): Promise<GetMoviesResponseData> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'v1.3/movie?page=1&limit=10&top10',
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
