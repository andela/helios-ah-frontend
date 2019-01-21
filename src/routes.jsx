import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/Login';
import { StartPage } from './components';
import AuthVerify from './components/AuthVerify';
import {
  LoginPage,
  HomePage,
  SignupPage,
  CompleteRegistration
} from './views';

const socialLoginRe = /^\/api\/v1\/auth\/social_(ggl|tw|fb)/;
const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/start" component={StartPage} />
      <Route path={socialLoginRe} component={AuthVerify} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup/verify" component={CompleteRegistration} />
      <Route path="/signup" component={SignupPage} />
    </Switch>
  </BrowserRouter>
);


export default routes;
