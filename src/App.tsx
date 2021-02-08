import React from 'react';
import { useReactiveVar } from '@apollo/client';
import LoggedInRoute from './Routers/LoggedInRoute';
import LoggedOutRoute from './Routers/LoggedOutRoute';
import { isLoggedInVar } from 'apollo';

const App: React.FC = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <LoggedInRoute /> : <LoggedOutRoute />;
};

export default App;
