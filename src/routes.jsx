import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {
  BookmarkPage,
  LoginPage,
  HomePage,
  SignupPage
} from './views';


const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/bookmark" component={BookmarkPage} />
    </Switch>
  </BrowserRouter>
);


export default routes;
