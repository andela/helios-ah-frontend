
import { combineReducers } from 'redux';
import reducers from './reducers';
import {userReducer, buttonReducer, editFieldsReducer} from './profile';


const rootReducers = combineReducers({
    reducers,
    users: userReducer,
    buttonValue: buttonReducer,
    editFieldsReducer
});

export default rootReducers; 
