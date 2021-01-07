import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const ProtectedRoutes = ({ component: Component, isAuthenticate, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (isAuthenticate) {
          return <Component />;
        }

        return <Redirect to={HomePage} />;
      }}
    />
  );
};

export default ProtectedRoutes;
