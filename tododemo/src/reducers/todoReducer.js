import { ADD_TODO, REMOVE_TODO, UNDO } from '../actions/actionTypes';

const initialState = {
  todos: [
    "An already created todo",
    "Another todo"
  ],
  history: []
};

const addTodo = (state, action) => {
  return {
    ...state,
    history: state.history.concat([state]),
    todos: state.todos.concat(action.todo)
  }
}

const removeTodo = (state, action) => {
  const index = action.index;
  return {
    ...state,
    history: state.history.concat([state]),
    todos: [...state.todos.slice(0, index), ...state.todos.slice(index+1)]
  }
}

const undo = (state, action) => {
  if (state.history.length === 0) {
    return state;
  }

  return {
    ...state,
    ...state.history[state.history.length-1],
    history: [...state.history.slice(0, -1)],
  }
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: return addTodo(state, action);
    case REMOVE_TODO: return removeTodo(state, action);
    case UNDO: return undo(state, action);
    default: return state;
  }
};

export default todoReducer;
