import { combineReducers } from 'redux';
import articles from './articleReducer';
import flashMessages from './flashReducer';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import bookmarkReducer from './bookmarkReducer';

const rootReducers = combineReducers({
  articles,
  flashMessages,
  currentUser: authReducer,
  home: homeReducer,
  bookmarks: bookmarkReducer,
});

export default rootReducers;
