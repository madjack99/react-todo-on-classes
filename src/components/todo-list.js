import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
  return (
    <ul>
      <li>
        <TodoListItem label="drink coffee" />
      </li>
      <li>
        <TodoListItem label="build react" important />
      </li>
    </ul>
  );
};

export default TodoList;
