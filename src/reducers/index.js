import { combineReducers } from 'redux';
import articles from './articleReducer';
import flashMessages from './flashReducer';
import auth from './loginReducer';
import signupReducer from './signupReducer';
import homeReducer from './homeReducer';


const rootReducers = combineReducers({
  articles,
  auth,
  flashMessages,
  currentUser: signupReducer,
  home: homeReducer,
});

export default rootReducers;
