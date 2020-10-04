import React from 'react';
import BodyComponent from '../components/body/BodyComponent';
import HeaderComponent from '../components/header/HeaderComponent';

function HomePage() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <BodyComponent />
    </React.Fragment>
  );
}

export default HomePage;
