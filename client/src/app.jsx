import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import AppRouter from './routes/AppRouter';
import setAuthorizationToken from './utils/AuthToken';
import setUserToStore from './utils/setUserToStore';
import './style/index.scss';
import 'toastr/build/toastr.css';

setAuthorizationToken();

setUserToStore(store);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

render(jsx, document.getElementById('app'));
