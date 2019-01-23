import { combineReducers } from 'redux';
import articles from './articleReducer';
import flashMessages from './flashReducer';
import auth from './loginReducer';
import signupReducer from './signupReducer';


const rootReducers = combineReducers({
  articles,
  auth,
  flashMessages,
  currentUser: signupReducer,
});

export default rootReducers;
