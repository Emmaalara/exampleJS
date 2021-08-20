import axios from 'axios';

const url = "http://localhost:5000/todos";

export const listTodos = () => axios.get(url);
export const createTodo = (newTodo) => axios.post(url, newTodo);
export const updateTodo = (updateTodo) => axios.post(url, updateTodo);
