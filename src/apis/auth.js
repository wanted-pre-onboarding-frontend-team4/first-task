import axios from 'axios';
import { BASE_URL } from '../constants/url';

const apiClient = axios.create({
  baseURL: process.env.REACT_BASE_URL,
});

const signUp = async (body) => {
  const resStatus = await apiClient.post('/auth/signup', body);
  return resStatus;
};

const signIn = async (body) => {
  const resStatus = await apiClient.post('/auth/signIn', body);
  return resStatus;
};

export { apiClient, signIn, signUp };
