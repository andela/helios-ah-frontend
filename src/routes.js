import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import LoginContainer from './components/LoginContainer.jsx';
import StartPage from './components/StartPage';


const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/start" component={StartPage} />
        </Switch>
    </BrowserRouter>
);


export default routes;
