import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { LoginPage, HomePage, SignupPage } from './views';
import { StartPage } from './components';


const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/start" component={StartPage} />
      <Route path="/signup" component={SignupPage} />
    </Switch>
  </BrowserRouter>
);


export default routes;
