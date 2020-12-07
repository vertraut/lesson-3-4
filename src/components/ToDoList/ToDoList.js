import React from 'react';
import './ToDoList.css';

const ToDoList = ({ todos, deleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className="TodoList__item">
        <p className="TodoList__text">
          {text} {completed ? '+' : '-'}
        </p>
        <button onClick={() => deleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default ToDoList;
