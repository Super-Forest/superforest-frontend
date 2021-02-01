import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SingIn from 'pages/SingIn';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/">
        <SingIn />
      </Route>
      <Route path="/signup"></Route>
      <Route path="/findpassword"></Route>
    </Switch>
  </Router>
);

export default Routes;
