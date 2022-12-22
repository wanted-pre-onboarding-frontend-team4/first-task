import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_BASE_URL,
});

const signUpApi = async (body) => {
  const { data } = await apiClient.post('/auth/signup', body);
  return data;
};

const signInApi = async (body) => {
  const { data } = await apiClient.post('/auth/signIn', body);
  return data;
};

export { apiClient, signInApi, signUpApi };
