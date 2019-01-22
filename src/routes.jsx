import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/LoginForm';
import AuthVerify from './components/AuthVerify';
import {
  SignupPage,
  CompleteRegistration
} from './views';

const socialLoginRe = /^\/api\/v1\/auth\/social_(ggl|tw|fb)/;
const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path={socialLoginRe} component={AuthVerify} />
      <Route path="/login" component={Login} />
      <Route path="/signup/verify" component={CompleteRegistration} />
      <Route path="/signup" component={SignupPage} />
    </Switch>
  </BrowserRouter>
);


export default routes;
