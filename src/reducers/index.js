import { combineReducers } from 'redux';
import flashMessages from './flashReducer';
import auth from './loginReducer';
import signupReducer from './signupReducer';


const rootReducers = combineReducers({
  auth,
  flashMessages,
  currentUser: signupReducer,
});

export default rootReducers;
