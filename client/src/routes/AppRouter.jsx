import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './../utils/history';
import Home from '../components/Home';
import UserDashboard from '../components/UserDashboard';
import AdminDashboard from '../components/AdminDashboard';
import Loading from '../components/Loading';

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dashboard" component={UserDashboard} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/loading" component={Loading} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
