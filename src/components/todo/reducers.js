import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETED_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
  POST_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
} from './action';

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      return false;
    default:
      return state;
  }
};

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      const newTodo = {
        id: new Date(),
        text: action.payload,
        isCompleted: false,
      };
      return [...state, newTodo];
    case REMOVE_TODO:
      return state.filter((item) => item.text !== action.payload);
    case COMPLETED_TODO:
      return state.map((item) => {
        if (item.text === action.payload) {
          return {
            ...item,
            isCompleted: true,
          };
        }
        return item;
      });

    case LOAD_TODOS_IN_PROGRESS:
      return state;

    case LOAD_TODOS_SUCCESS:
      return action.payload;

    case LOAD_TODOS_FAILURE:
      return state;

    case POST_TODOS:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case UPDATE_TODO:
      const updateTodo = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        }
        return todo;
      });
      return updateTodo;

    default:
      return state;
  }
};
