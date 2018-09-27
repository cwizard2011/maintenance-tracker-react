import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AuthReducers from '../reducers/AuthReducers';

/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Store creation
export default () => {
  const store = createStore(
    combineReducers({
      userRegistration: AuthReducers.signup,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
