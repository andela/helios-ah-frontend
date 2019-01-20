import React, { Component } from 'react';
import Links from '../components/Links';
class HomePage extends Component {
  render() {
    return (
      <div>
        <Links/>
        <h2> This is the Home Page</h2>
        <h3 className="test2">Authors Haven</h3>
      </div>
    );
  }
}

export default HomePage;
