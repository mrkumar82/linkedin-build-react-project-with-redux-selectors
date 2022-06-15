import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './action';
import { postTodoThunk } from './thunks';

const NewTodos = ({ todos, createtodo, postTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const postTodoHandler = () => {
    const newTodo = {
      id: new Date(),
      text: inputValue,
      isCompleted: false,
    };
    postTodo(newTodo);
  };

  return (
    <div className='new-todo-form'>
      <input
        type='text'
        placeholder='New todo'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isduplicate = todos.some((t) => t.text === inputValue);
          if (!isduplicate) {
            postTodoHandler();
            setInputValue('');
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todoReducer,
});
const mapDispatchToProps = (dispatch) => ({
  createtodo: (text) => dispatch(createTodo(text)),
  postTodo: (text) => dispatch(postTodoThunk(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodos);
