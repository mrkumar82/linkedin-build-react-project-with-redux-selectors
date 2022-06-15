import React, { useEffect } from 'react';
import NewTodos from './NewTodos';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { loadTodos } from './thunks';
import {
  getTodos,
  getIsLoading,
  getInCompleteTodos,
  getCompleteTodos,
} from './selector';

const TodoList = ({
  getincompletetodo,
  getcompletedtodo,
  isloading,
  startLoadtodos,
}) => {
  useEffect(() => {
    startLoadtodos();
  }, []);

  const loadingMsg = <div>Loading...</div>;
  const content = (
    <div>
      <NewTodos />
      <h3>Incomplete todos</h3>
      {getincompletetodo.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
      <h3>Complete todos</h3>
      {getcompletedtodo.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
  return isloading ? loadingMsg : content;
};

const mapStateToProps = (state) => {
  return {
    getincompletetodo: getInCompleteTodos(state),
    getcompletedtodo: getCompleteTodos(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    startLoadtodos: () => dispatch(loadTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
