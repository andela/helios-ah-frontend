/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jwt from 'jsonwebtoken';
import rootReducer from '../reducers';
import { setCurrentUser } from '../actions/loginActions';
import setAuthorizationToken from '../utilities/setAuthorizationToken';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    devTools
  )
);


export default store;
