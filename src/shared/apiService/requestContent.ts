import { AxiosRequestConfig } from 'axios';
import {
  GetCommentsResponseData,
  GetMovieResponseData,
  GetMoviesResponseData,
  GetPersonResponseData,
  GetPersonsResponseData,
} from './types';
import { apiRequest } from './config';

export const getMovie = async (path: string): Promise<GetMovieResponseData> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `v1.3/movie/${path}`,
  };
  return await apiRequest<GetMovieResponseData>(config);
};

export const getMovies = async ({
  params,
}: {
  params: Record<string, string>;
}): Promise<GetMoviesResponseData> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'v1.3/movie',
    params,
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

export const getPersons = async ({
  params,
}: {
  params: Record<string, string>;
}): Promise<GetPersonsResponseData> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'v1/person',
    params,
  };
  return await apiRequest<GetPersonsResponseData>(config);
};

export const getMovieSearch = async (name: string): Promise<GetMoviesResponseData> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `v1.3/movie?page=1&limit=10&name=${name}`,
  };
  return await apiRequest<GetMoviesResponseData>(config);
};

export const getCommentsSearch = async (id: string): Promise<GetCommentsResponseData> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `v1/review?page=1&limit=100&movieId=${id}`,
  };
  return await apiRequest<GetCommentsResponseData>(config);
};
