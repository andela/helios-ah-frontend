import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    )}
  />
);
const mapStateToProps = state => ({
  isAuthenticated: state.currentUser.isAuthenticated
});
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired

};
export default connect(mapStateToProps, null)(PrivateRoute);
