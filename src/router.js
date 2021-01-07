import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BackOfficePage from './pages/BackOfficePage';
import HomePage from './pages/HomePage';
import ProtectedRoutes from './routes/ProtectedRoutes';
import LoginPage from './pages/LoginPage';
import LanguajesPage from './pages/LanguajesPage';
import FrameworksPage from './pages/FrameworksPage';

const ApplicationRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />

      <ProtectedRoutes
        exact
        path="/back-office"
        isAuthenticate={true}
        component={BackOfficePage}
      />

      <ProtectedRoutes
        exact
        path="/back-office/languajes"
        isAuthenticate={false}
        component={LanguajesPage}
      />

      <ProtectedRoutes
        exact
        path="/back-office/frameworks"
        isAuthenticate={false}
        component={FrameworksPage}
      />
    </Router>
  );
};

export default ApplicationRouter;
