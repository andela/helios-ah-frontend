import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import StartPage from './components/StartPage';
import SignupRoutes from './components/SignupRoutes';
import CompleteRegistration from './components/CompleteRegistration';


const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/start" component={StartPage} />
      <Route path="/signup/verify" component={CompleteRegistration} />
      <Route path="/signup" component={SignupRoutes} />
    </Switch>
  </BrowserRouter>
);


export default routes;
