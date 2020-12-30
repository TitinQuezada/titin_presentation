import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BackOfficePage from './pages/BackOfficePage';
import HomePage from './pages/HomePage';
import LanguajesPage from './pages/LanguajesPage';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
import DialogProvider from './context/DialogContext';
import Dialog from './components/dialog/Dialog';
import LoadingProvider from './context/LoadingContext';
import Loading from './components/loading/Loading';
import FrameworksPage from './pages/FrameworksPage';

function App() {
  return (
    <LoadingProvider>
      <DialogProvider>
        <div className="container-fluid">
          <Router>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route exact path="/back-office" component={BackOfficePage} />
            <Route path="/back-office/languajes" component={LanguajesPage} />
            <Route path="/back-office/frameworks" component={FrameworksPage} />
          </Router>

          <Dialog />
          <Loading />
          <ToastContainer />
        </div>
      </DialogProvider>
    </LoadingProvider>
  );
}

export default App;
