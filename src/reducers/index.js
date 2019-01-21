import { combineReducers } from 'redux';
import reducers from './reducers';
import authReducer from './authReducer';
import signupReducer from './signupReducer';

const rootReducers = combineReducers({
  reducers,
  authReducer,
  currentUser: signupReducer,
});

export default rootReducers;
