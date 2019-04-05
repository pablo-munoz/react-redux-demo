import { ADD_TODO, REMOVE_TODO, UNDO } from './actionTypes';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo: todo
  };
};

export const removeTodo = (index) => {
  return {
    type: REMOVE_TODO,
    index
  };
}

export const undo = () => {
  return {
    type: UNDO
  };
}
