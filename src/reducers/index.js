import { combineReducers } from 'redux';
import reducers from './reducers';
import articles from './articleReducer';
import flashMessages from './flashReducer';

const rootReducers = combineReducers({ reducers, articles, flashMessages });

export default rootReducers;
