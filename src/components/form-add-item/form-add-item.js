import React, { Component } from 'react';

import './form-add-item.css';

export default class FormAddItem extends Component {
  state = {
    label: '',
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form className="form-add-item" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control my-input"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary my-btn">Add Item</button>
      </form>
    );
  }
}
