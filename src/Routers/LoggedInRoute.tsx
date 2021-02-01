import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import SingIn from 'pages/SingIn';
import Layout from 'components/common/Layout';

const Routes: React.FC = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
