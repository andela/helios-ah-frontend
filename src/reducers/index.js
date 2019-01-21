import { combineReducers } from 'redux';
import reducers from './reducers';
import signupReducer from './signupReducer';

const rootReducers = combineReducers({
  reducers,
  currentUser: signupReducer,
});

export default rootReducers;
