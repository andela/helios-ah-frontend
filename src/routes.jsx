import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import StartPage from './components/StartPage';
import SignupPage from './views/SignupPage';


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
