import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import StartPage from './views/StartPage';
import BookmarkPage from './views/BookmarkPage';

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/start" component={StartPage} />
            <Route path="/bookmark" component={BookmarkPage} />
        </Switch>
    </BrowserRouter>
);


export default routes;
