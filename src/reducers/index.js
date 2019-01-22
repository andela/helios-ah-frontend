import { combineReducers } from 'redux';
import reducers from './reducers';
import signupReducer from './signupReducer';
import homeReducer from './homeReducer';

const rootReducers = combineReducers({
  reducers,
  currentUser: signupReducer,
  home: homeReducer,
});

export default rootReducers;
