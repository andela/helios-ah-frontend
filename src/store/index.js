import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jwt from 'jsonwebtoken';
import rootReducer from '../reducers';
import { setCurrentUser } from '../actions/authActions';
import setAuthorizationToken from '../utils/setAuthorizationToken';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    devTools
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

export default store;
