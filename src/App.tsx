import React, { useState } from 'react';
import LoggedInRoute from './Routers/LoggedInRoute';
import LoggedOutRoute from './Routers/LoggedOutRoute';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return isLoggedIn ? <LoggedInRoute /> : <LoggedOutRoute />;
};

export default App;
