import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Links extends Component {
  render() {
    return (
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/start">Start</NavLink></li>
        <li><NavLink to="/bookmark">Bookmarked Articles</NavLink></li>
      </ul>
    );
  }
}

export default Links;
