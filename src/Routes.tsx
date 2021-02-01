import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import SingIn from 'pages/SingIn';
import Layout from 'components/common/Layout';

const Routes: React.FC = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <SingIn />
        </Route>
        <Route path="/signup"></Route>
        <Route path="/findpassword"></Route>
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
