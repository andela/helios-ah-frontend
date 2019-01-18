import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { HomePage, SignupPage } from './views';
import Login from './components/Login';
import { StartPage } from './components';
import AuthVerify from './components/AuthVerify';

const socialLoginRe = /^\/api\/v1\/auth\/social_(ggl|tw|fb)/;
const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/start" component={StartPage} />
      <Route path={socialLoginRe} component={AuthVerify} />
      <Route path="/signup" component={SignupPage} />
    </Switch>
  </BrowserRouter>
);


export default routes;
