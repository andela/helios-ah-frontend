import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LoginContainer from './components/LoginContainer.jsx';


const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={LoginContainer} />
        </Switch>
    </BrowserRouter>
);


export default routes;
