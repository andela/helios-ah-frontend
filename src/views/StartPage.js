import React, { Component } from 'react';
import Links from '../components/Links';
import StartPage from '../components/StartPage';
class Start extends Component {
  render() {
    return (
      <div>
        <Links />
        <StartPage />
        <h2>This is the start Page</h2>
      </div>
    );
  }
}

export default Start;
