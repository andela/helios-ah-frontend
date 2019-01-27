import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
  )} />
);
const mapStateToProps = state => ({
  isAuthenticated: state.currentUser.isAuthenticated
});
export default connect(mapStateToProps, null)(PrivateRoute);
