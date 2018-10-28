import { combineReducers } from 'redux';
import authReducer from './AuthReducers';
import requestReducer from './RequestReducer';

const appReducer = combineReducers({
  authReducer,
  requestReducer
});

export default appReducer;
