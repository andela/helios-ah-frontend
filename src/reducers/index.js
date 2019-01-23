import { combineReducers } from 'redux';
import flashMessages from './flashReducer';
import signupReducer from './signupReducer';
import homeReducer from './homeReducer';


const rootReducers = combineReducers({
  flashMessages,
  currentUser: signupReducer,
  home: homeReducer,
});

export default rootReducers;
