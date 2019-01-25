import { combineReducers } from 'redux';
import articles from './articleReducer';
import flashMessages from './flashReducer';
import authReducer from './authReducer';
import homeReducer from './homeReducer';


const rootReducers = combineReducers({
  articles,
  flashMessages,
  currentUser: authReducer,
  home: homeReducer,
});

export default rootReducers;
