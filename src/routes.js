import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import StartPage from './components/StartPage.jsx';
import ResetPassword from './components/ResetPassword.jsx'


const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/start" component={StartPage} />
            <Route path="/reset" component={ResetPassword}/>
        </Switch>
    </BrowserRouter>
);


export default routes;
