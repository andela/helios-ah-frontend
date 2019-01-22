import React from 'react';
import NavBar from '../components/NavBarNoAuth';
import { Card } from '../components';

const HomePage = () => (
  <div>
    <NavBar />
    <div className="row">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default HomePage;
