import React from 'react';
import NavBarAuth from '../components/NavBarAuth';
import { Card } from '../components';

const HomePage = () => (
  <div>
    <NavBarAuth />
    <div className="row">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default HomePage;
