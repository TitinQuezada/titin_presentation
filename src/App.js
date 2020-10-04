import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BackOfficePage from './pages/BackOfficePage';
import HomePage from './pages/HomePage';
import LanguajesPage from './pages/LanguajesPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route exact path='/back-office' component={BackOfficePage} />
        <Route path='/back-office/languajes' component={LanguajesPage} />
      </Router>
    </div>
  );
}

export default App;
