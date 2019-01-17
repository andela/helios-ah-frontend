import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import StartPage from './components/StartPage';
import AuthVerify from './components/AuthVerify.jsx';

const socialLoginRe = /^\/api\/v1\/auth\/social_(ggl|tw|fb)/
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/start" component={StartPage} />
            <Route path={socialLoginRe} component={AuthVerify} />
            <Route exact path="/" component={HomePage} />
        </Switch>
    </BrowserRouter>
);


export default routes;
