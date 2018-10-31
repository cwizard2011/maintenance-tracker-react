import { combineReducers } from 'redux';
import authReducer from './AuthReducers';
import requestReducer from './RequestReducer';

const appReducer = combineReducers({
  authReducer,
  requestReducer
});

export const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
