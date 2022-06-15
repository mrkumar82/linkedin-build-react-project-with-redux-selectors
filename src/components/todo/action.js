export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';

export const createTodo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const completedTodo = (id) => {
  return {
    type: COMPLETED_TODO,
    payload: id,
  };
};

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = () => {
  return {
    type: LOAD_TODOS_IN_PROGRESS,
  };
};
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = (todos) => {
  return {
    type: LOAD_TODOS_SUCCESS,
    payload: todos,
  };
};
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () => {
  return {
    type: LOAD_TODOS_FAILURE,
  };
};

export const POST_TODOS = 'POST_TODOS';
export const postTodoAction = (todos) => {
  return {
    type: POST_TODOS,
    payload: todos,
  };
};

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodoAction = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const UPDATE_TODO = 'UPDATE_TODO';
export const updateTodoAction = (data) => {
  return {
    type: UPDATE_TODO,
    payload: data,
  };
};
