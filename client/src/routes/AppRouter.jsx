import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../components/Home';
import UserDashboard from '../components/UserDashboard';
import AdminDashboard from '../components/AdminDashboard';

export const history = createHistory();


const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dashboard" component={UserDashboard} />
        <Route path="/admin" component={AdminDashboard} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
