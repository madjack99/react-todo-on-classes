import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  return (
    <ul>
      <li>Learn</li>
      <li>Build</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My todo list</h1>;
};

const SearchPanel = () => {
  const searchStyle = {
    fontSize: '25px',
  };

  return <input style={searchStyle} type="text" placeholder="search" />;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
