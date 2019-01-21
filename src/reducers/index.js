import { combineReducers } from 'redux';
import reducers from './reducers';
import articles from './articleReducer';
import flashMessages from './flashReducer';
import signupReducer from './signupReducer';

const rootReducers = combineReducers({
  reducers,
  articles,
  flashMessages,
  currentUser: signupReducer,
});

export default rootReducers;
