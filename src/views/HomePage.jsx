import React from 'react';
import Links from '../components/Links';
import { Card } from '../components';

const HomePage = () => (
  <div>
    <Links />
    <h2> This is the Home Page</h2>
    <div className="row">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default HomePage;
