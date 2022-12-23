/* eslint-disable */
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const signUpApi = async (body) => {
  const { data } = await apiClient.post('/auth/signup', body);
  return data;
};

const logInApi = async (body) => {
  const { data } = await apiClient.post('/auth/signIn', body);
  return data;
};

export { apiClient, logInApi, signUpApi };
