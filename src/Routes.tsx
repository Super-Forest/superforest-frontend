import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Layout from 'components/common/Layout';

const Routes: React.FC = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
