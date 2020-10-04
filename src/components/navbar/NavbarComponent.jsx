import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavbarComponent.css';

const NavbarComponent = ({ title, onClick }) => {
  const history = useHistory();

  const logOut = () => history.push('/');

  return (
    <nav className='row navbar navbar-light bg-primary'>
      <div className='col'>
        <h1 onClick={onClick} className='navbar-brand text-white pointer'>
          {title}
        </h1>
      </div>
      <div className='col'>
        <button onClick={logOut} className='btn text-white float-right'>
          Cerrar Session
        </button>
      </div>
    </nav>
  );
};

NavbarComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavbarComponent;
