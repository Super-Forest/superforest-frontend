import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Layout from 'components/loggedOut/layout';

const Routes: React.FC = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/findpassword"></Route>
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
