import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import {
  LoginPage,
  SignupPage,
  CompleteRegistration,
  Article,
  ResetPassword,
} from './views';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup/verify" component={CompleteRegistration} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/article" component={Article} />
      <Route path="/reset-password" component={ResetPassword} />
    </Switch>
  </BrowserRouter>
);

export default routes;
