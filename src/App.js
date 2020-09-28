import React from 'react';
import BodyComponent from './components/body/BodyComponent';
import HeaderComponent from './components/header/HeaderComponent';

function App() {
  return (
    <div className='container-fluid'>
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
}

export default App;
