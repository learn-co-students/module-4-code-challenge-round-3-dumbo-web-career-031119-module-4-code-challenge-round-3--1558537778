import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" onChange={this.props.filterChange} value={this.props.filterValue}type="text" />
      </div>
    );
  }
}

export default Filter;
