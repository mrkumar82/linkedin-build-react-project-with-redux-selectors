import React from 'react';

import { connect } from 'react-redux';
import { removeTodoThunk, updateTodoThunk } from './thunks';

const TodoListItem = ({ todo, onRemovetodo, onCompletetodo }) => {
  const onCompleteHandler = (id) => {
    const updatedtodo = { ...todo, isCompleted: true };
    onCompletetodo(id, updatedtodo);
  };
  return (
    <div>
      <div className='list-wrapper'>
        <h2>{todo.text}</h2>

        <div>
          {todo.isCompleted ? null : (
            <button
              className='completed'
              onClick={() => onCompleteHandler(todo.id)}
            >
              Mark as completed
            </button>
          )}
          <button className='remove' onClick={() => onRemovetodo(todo.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemovetodo: (id) => dispatch(removeTodoThunk(id)),
    onCompletetodo: (id, data) => dispatch(updateTodoThunk(id, data)),
  };
};

export default connect(null, mapDispatchToProps)(TodoListItem);
