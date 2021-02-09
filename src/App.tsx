import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from 'apollo';
import React from 'react';
import LoggedInRoute from './Routers/LoggedInRoute';
import LoggedOutRoute from './Routers/LoggedOutRoute';

const App: React.FC = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <LoggedInRoute /> : <LoggedOutRoute />;
};

export default App;
