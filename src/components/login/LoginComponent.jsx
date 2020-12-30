import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthenticationService from '../../services/authenticationService';
import './LoginComponent.css';

const LoginComponent = () => {
  const history = useHistory();

  useEffect(() => {
    const authenticate = () => {
      AuthenticationService.Authenticate()
        .then(() => {
          history.push('/back-office');
        })
        .catch((error) => {
          alert(error.message);
          history.push('/');
        });
    };

    AuthenticationService.IsAuthenticate().then((isAuthenticate) => {
      if (!isAuthenticate) {
        authenticate();
      } else {
        history.push('/back-office');
      }
    });
  }, [history]);

  return <React.Fragment></React.Fragment>;
};

export default LoginComponent;
