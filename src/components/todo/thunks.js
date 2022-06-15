import {
  loadTodosFailure,
  loadTodosSuccess,
  loadTodosInProgress,
  postTodoAction,
  deleteTodoAction,
  updateTodoAction,
} from './action';

export const loadTodos = () => async (dispatch, getState) => {
  dispatch(loadTodosInProgress());
  try {
    const resp = await fetch('http://localhost:8000/todo');
    const todos = await resp.json();
    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
};

export const postTodoThunk = (todo) => async (dispatch, getState) => {
  const resp = await fetch('http://localhost:8000/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const data = await resp.json();
  dispatch(postTodoAction(data));
};

export const removeTodoThunk = (id) => async (dispatch, getState) => {
  const resp = await fetch(`http://localhost:8000/todo/${id}`, {
    method: 'DELETE',
  });
  const data = await resp.json();
  dispatch(deleteTodoAction(id));
};

export const updateTodoThunk = (id, todo) => async (dispatch, getState) => {
  const resp = await fetch(`http://localhost:8000/todo/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const data = await resp.json();
  dispatch(updateTodoAction(data));
};

export const displayAlert = (text) => () => {
  alert(text);
};
