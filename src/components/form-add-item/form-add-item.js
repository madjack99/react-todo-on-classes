import React, { Component } from 'react';

import './form-add-item.css';

export default class FormAddItem extends Component {
  render() {
    const { onItemAdded } = this.props;
    return (
      <div className="form-add-item">
        <button
          onClick={() => onItemAdded('hello world')}
          className="btn btn-outline-secondary my-btn"
        >
          Add Item
        </button>
      </div>
    );
  }
}
