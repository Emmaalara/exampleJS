import * as api from "../api";

export const listTodos = async () => {
  try {
    const { data } = await api.listTodos();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createTodos = async (todo) => {
  try {
    const { data } = await api.createTodo(todo);
    return data;
  } catch (error) {
    console.log(error);
  }
};
