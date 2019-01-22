import { combineReducers } from 'redux';
import authReducer from './authReducer';
import flashMessages from './flashReducer';
import auth from './loginReducer';
import signupReducer from './signupReducer';


const rootReducers = combineReducers({
  authReducer,
  auth,
  flashMessages,
  currentUser: signupReducer,
});

export default rootReducers;
