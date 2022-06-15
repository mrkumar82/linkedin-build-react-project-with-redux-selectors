import { createSelector } from 'reselect';

export const getTodos = (state) => state.todoReducer;
export const getIsLoading = (state) => state.isLoading;

export const getInCompleteTodos = createSelector(getTodos, (todo) =>
  todo.filter((item) => !item.isCompleted)
);

export const getCompleteTodos = createSelector(getTodos, (todo) =>
  todo.filter((item) => item.isCompleted)
);
