import axios, { AxiosRequestConfig } from 'axios';

const userApi = axios.create({
  withCredentials: true,
  baseURL: 'http://45.141.101.66/',
  headers: {
    accept: '*/*',
    'Content-Type': 'application/json',
  },
});

userApi.interceptors.request.use(async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await userApi(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export default userApi;
