import React from 'react';
import { Switch, Route } from 'react-router-dom';
import propTypes from 'prop-types';
import SignupPage from '../views/SignupPage';
import CompleteRegistration from './CompleteRegistration';

const SignupRoutes = ({ match }) => (
  <Switch>
    <Route
      exact
      path={`${match.path}/verify}`}
      component={CompleteRegistration}
    />
    <Route path={match.path} component={SignupPage} />
  </Switch>
);

SignupRoutes.propTypes = {
  match: propTypes.objectOf(propTypes.any).isRequired,
};

export default SignupRoutes;
