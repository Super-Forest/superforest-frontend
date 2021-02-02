import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignIn from 'pages/SignIn';
import Layout from 'components/loggedOut/layout';

const Routes: React.FC = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/">
          <SignIn />
        </Route>
        <Route path="/signup"></Route>
        <Route path="/findpassword"></Route>
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
