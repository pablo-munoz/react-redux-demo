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
  const index = action.index;
  return { ...state, todos: [...state.todos.slice(0, index), ...state.todos.slice(index+1)]}
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: return addTodo(state, action);
    case REMOVE_TODO: return removeTodo(state, action);
    default: return state;
  }
};

export default todoReducer;
