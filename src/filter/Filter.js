import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>Find the Best Specialist</h1>
          <input
            type="text"
            className="search-field name"
            placeholder="Name..."
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <input type="text" className="search-field city" placeholder="City..." />
        </form>
      </div>
    );
  }
}