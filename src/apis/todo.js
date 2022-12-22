import { apiClient } from './auth';

const createTodoApi = async (body) => {
  const { resStatus } = await apiClient.post('/todos', body);
  return resStatus;
};

const getTodoApi = async () => {
  const { todoList } = await apiClient.get('/todos');
  return todoList;
};

const updateTodoApi = async (body, id) => {
  const { resStatus } = await apiClient.put(`/todos/${id}`, body);
  return resStatus;
};

const deleteTodoApi = async (id) => {
  const { resStatus } = await apiClient.delete(`/todos/${id}`);
  return resStatus;
};

export { createTodoApi, getTodoApi, updateTodoApi, deleteTodoApi };
