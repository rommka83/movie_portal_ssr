import { AxiosRequestConfig } from 'axios';
import {
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
