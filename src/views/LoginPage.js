import React, { Component } from 'react';
import Links from '../components/Links';
import Login from '../components/Login.jsx';
class LoginPage extends Component {
  render() {
    return (
      <div>
        <Links />
        <Login/>
        <h2>This is the Login Page</h2>
      </div>
    );
  }
}

export default LoginPage;
