import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthenticationService from '../../services/authenticationService';
import './LoginComponent.css';

const LoginComponent = () => {
  const history = useHistory();

  useEffect(() => {
    AuthenticationService.Authenticate()
      .then(() => {
        history.push('/back-office');
      })
      .catch((error) => {
        alert(error.message);
        history.push('/');
      });
  }, [history]);

  return <> </>;
};

export default LoginComponent;
