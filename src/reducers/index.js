
import { combineReducers } from 'redux';
import reducers from './reducers';
import flashMessages from './flashReducer';
import auth from './authReducer'


const rootReducers = combineReducers({
  reducers,
  auth,
  flashMessages
});

export default rootReducers; 
