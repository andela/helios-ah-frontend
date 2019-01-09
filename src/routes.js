import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';


const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    </BrowserRouter>
);


export default routes;
