import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => (
  <ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
  </ul>
);

export default Links;
