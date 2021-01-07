import React from 'react';
import { ToastContainer } from 'react-toastify';
import DialogProvider from './context/DialogContext';
import Dialog from './components/dialog/Dialog';
import LoadingProvider from './context/LoadingContext';
import Loading from './components/loading/Loading';
import ApplicationRouter from './router';

function App() {
  return (
    <LoadingProvider>
      <DialogProvider>
        <div className="container-fluid">
          <ApplicationRouter></ApplicationRouter>
          <Dialog />
          <Loading />
          <ToastContainer />
        </div>
      </DialogProvider>
    </LoadingProvider>
  );
}

export default App;
