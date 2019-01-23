import { combineReducers } from 'redux';
import flashMessages from './flashReducer';
import authReducer from './authReducer';
import homeReducer from './homeReducer';


const rootReducers = combineReducers({
  flashMessages,
  currentUser: authReducer,
  home: homeReducer,
});

export default rootReducers;
