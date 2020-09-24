import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.css';
import { Todo } from '../Todo';

export const TodoList = ({ items, setTodos }) => {

  return (
    <ul className="todo-list">
      {items.map(item => (
        <Todo
          item={item}
          key={item.id}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setTodos: PropTypes.func.isRequired,
};
