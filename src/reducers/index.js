
import { combineReducers } from 'redux';
import flashMessages from './flashReducer';
import auth from './authReducer'


const rootReducers = combineReducers({
  auth,
  flashMessages
});

export default rootReducers; 
