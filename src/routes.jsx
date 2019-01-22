import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {
  LoginPage,
  HomePage,
  SignupPage,
  ResetPassword
} from './views';
import { StartPage } from './components';


const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/start" component={StartPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/reset-password" component={ResetPassword} />
    </Switch>
  </BrowserRouter>
);

export default routes;
