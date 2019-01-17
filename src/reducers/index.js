
import { combineReducers } from 'redux';
import reducers from './reducers';
import authReducer from '../reducers/authReducer';


const rootReducers = combineReducers({
  reducers,
  authReducer
});

export default rootReducers; 
