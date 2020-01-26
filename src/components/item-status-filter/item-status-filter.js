import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onFilterChange } = this.props;
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          key={name}
          name={name}
          type="button"
          className={`btn ${clazz}`}
          onClick={() => onFilterChange(name)}
        >
          {name}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
