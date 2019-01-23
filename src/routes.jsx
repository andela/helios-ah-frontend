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
import HomePageRedirect from './utilities/HomePageRedirect';


const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={HomePageRedirect(LoginPage)} />
      <Route path="/signup/verify" component={CompleteRegistration} />
      <Route path="/signup" component={HomePageRedirect(SignupPage)} />
    </Switch>
  </BrowserRouter>
);


export default routes;
