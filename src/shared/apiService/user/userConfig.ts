import axios from 'axios';

const userApi = axios.create({
  withCredentials: true,
  baseURL: 'http://45.141.101.66/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const registeredUserRequest = userApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default userApi;
