import { combineReducers } from 'redux';
import reducers from './reducers';
import authReducer from './authReducer';

const rootReducers = combineReducers({
  reducers,
  authReducer
});

export default rootReducers;
