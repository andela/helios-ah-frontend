import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import {
  LoginPage,
  SignupPage,
  ResetPassword,
  CompleteRegistration,
  ChangePasswordPage,
  Article,
  HomePage,
} from './views';
import HomePageRedirect from './utilities/HomePageRedirect';
import PrivateRoute from './privateRoute';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />
      <Route path="/login" component={HomePageRedirect(LoginPage)} />
      <Route path="/signup/verify" component={CompleteRegistration} />
      <Route path="/signup" component={HomePageRedirect(SignupPage)} />
      <PrivateRoute path="/create-article" component={Article} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/article" component={Article} />
      <Route path="/change/password" component={ChangePasswordPage} />
    </Switch>
  </BrowserRouter>
);

export default routes;
