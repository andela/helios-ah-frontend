
import { combineReducers } from 'redux';
import reducers from './reducers';
import bookmarkReducer from './bookmarkReducer';


const rootReducers = combineReducers({
  reducers,
  bookmarks: bookmarkReducer,
});

export default rootReducers; 
