import { ADD_TODO, REMOVE_TODO } from '../actions/actionTypes';

const initialState = {
  todos: [
    "An already created todo",
    "Another todo"
  ]
};

const addTodo = (state, action) => {
  return { ...state, todos: state.todos.concat(action.todo) }
}

const removeTodo = (state, action) => {
  // To create a new array with all elements of an old one except one we can use array destructuring
  // [...arr.slice(0, indexToRemove), ...arr.slice(indexToRemove+1)]
  return { ...state };
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: return addTodo(state, action);
    case REMOVE_TODO: return removeTodo(state, action);
    default: return state;
  }
};

export default todoReducer;
