import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import {
  LoginPage,
  SignupPage,
  ResetPassword,
  CompleteRegistration,
  ChangePasswordPage,
  Article,
  HomePage,
  GetArticlePage,
  BookmarkPage,
  ProfilePage
} from './views';
import HomePageRedirect from './utilities/HomePageRedirect';
import PrivateRoute from './privateRoute';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <PrivateRoute path="/profile" component={ProfilePage} />
      <Route exact path="/home" component={HomePage} />
      <Route path="/login" component={HomePageRedirect(LoginPage)} />
      <Route path="/signup/verify" component={CompleteRegistration} />
      <Route path="/signup" component={HomePageRedirect(SignupPage)} />
      <PrivateRoute exact path="/create-article" component={Article} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/change/password" component={ChangePasswordPage} />
      <Route path="/article/:id" component={GetArticlePage} />
      <PrivateRoute path="/bookmark" component={BookmarkPage} />
    </Switch>
  </BrowserRouter>
);

export default routes;
