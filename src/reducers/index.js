import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import homeReducer from './homeReducer';

const rootReducers = combineReducers({
  currentUser: signupReducer,
  home: homeReducer,
});

export default rootReducers;
