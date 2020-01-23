import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import FormAddItem from '../form-add-item';

import './app.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ],
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(elem => elem.id === id);

      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArr,
      };
    });
  };

  addItem = text => {
    const newTodo = {
      label: text,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newTodo],
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <FormAddItem onItemAdded={this.addItem} />
      </div>
    );
  }
}
