import { combineReducers } from 'redux';
import reducers from './reducers';
import bookmarkReducer from './bookmarkReducer';
import signupReducer from './signupReducer';

const rootReducers = combineReducers({
  reducers,
  currentUser: signupReducer,
  bookmarks: bookmarkReducer,
});

export default rootReducers;
