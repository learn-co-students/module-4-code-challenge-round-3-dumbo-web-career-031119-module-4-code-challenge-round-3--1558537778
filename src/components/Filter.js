import React, { Component } from 'react';

class Filter extends Component {

  state ={
    title: "",
  }

  //method
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
    this.props.handleFilter(this.state.title);
  };

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" name="title" value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Filter;
