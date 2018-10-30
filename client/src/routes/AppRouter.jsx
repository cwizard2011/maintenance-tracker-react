import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import PrivateRoute from '../utils/PrivateRoute';
import UserDashboard from '../components/UserDashboard';
import AdminDashboard from '../components/AdminDashboard';
import RequestDetails from '../components/RequestDetails';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <PrivateRoute path="/dashboard" component={UserDashboard} />
        <PrivateRoute path="/request/:requestId" component={RequestDetails} />
        <PrivateRoute path="/admin" component={AdminDashboard} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
