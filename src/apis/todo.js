import { apiClient } from './auth';

const createTodoApi = async (body) => {
  const { data } = await apiClient.post('/todos', body);
  return data;
};

const getTodoApi = async () => {
  const { data } = await apiClient.get('/todos');
  return data;
};

const updateTodoApi = async (body, id) => {
  const { data } = await apiClient.put(`/todos/${id}`, body);
  return data;
};

const deleteTodoApi = async (id) => {
  const { data } = await apiClient.delete(`/todos/${id}`);
  return data;
};

export { createTodoApi, getTodoApi, updateTodoApi, deleteTodoApi };
