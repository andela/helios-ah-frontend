import { combineReducers } from 'redux';
import authReducer from './authReducer';
import articles from './articleReducer';
import flashMessages from './flashReducer';
import auth from './loginReducer';
import signupReducer from './signupReducer';


const rootReducers = combineReducers({
  authReducer,
  articles,
  auth,
  flashMessages,
  currentUser: signupReducer,
});

export default rootReducers;
