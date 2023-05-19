import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'https://api.kinopoisk.dev/',
  headers: {
    Accept: 'application/json',
    'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
  },
});

export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await api(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
