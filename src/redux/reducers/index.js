import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import search from './search';

const rootReducer = combineReducers({
  routerReducer,
  search
});

export default rootReducer;
