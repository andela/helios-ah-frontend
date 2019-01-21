import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import {
  LoginPage,
  HomePage,
  SignupPage,
  CompleteRegistration
} from './views';


const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup/verify" component={CompleteRegistration} />
      <Route path="/signup" component={SignupPage} />
    </Switch>
  </BrowserRouter>
);


export default routes;
