import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/loginActions';
import setAuthorizationToken from './utilities/setAuthorizationToken';
import reverseToken from './utilities/reverseToken';
import store from './store';
import App from './components/App';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  store.dispatch(setCurrentUser(jwt.decode(reverseToken(localStorage.token))));
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
