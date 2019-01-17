import React from 'react';
import { Switch, Route } from 'react-router-dom';
import propTypes from 'prop-types';
import SignupPage from '../views/SignupPage';
import CompleteRegistration from './CompleteRegistration';

const SignupRoutes = ({ match, location }) => {
  console.log('match is ==> ', match);
  console.log('location is ==> ', location.search);
  return (
    <Switch>
      <Route exact path={match} component={SignupPage} />
      <Route exact path={match.params} component={CompleteRegistration} />
    </Switch>
  );
};

SignupRoutes.propTypes = {
  match: propTypes.objectOf(propTypes.string).isRequired,
};

export default SignupRoutes;
