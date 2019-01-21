import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { LoginPage, SignupPage } from './views';


const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
    </Switch>
  </BrowserRouter>
);


export default routes;
