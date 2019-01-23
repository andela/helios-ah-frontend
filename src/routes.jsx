import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import {
  LoginPage,
  SignupPage,
  ChangePwPage,
  ResetPassword,
  CompleteRegistration
} from './views';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup/verify" component={CompleteRegistration} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/change/password" component={ChangePwPage} />
    </Switch>
  </BrowserRouter>
);

export default routes;
