import React from 'react';
import HomePresentation from './HomePresentation';

const HomeContainer = () => {
  const handleSubmit = () => {
    console.log('submit');
  };
  return <HomePresentation handleSubmit={handleSubmit} />;
};

export default HomeContainer;
