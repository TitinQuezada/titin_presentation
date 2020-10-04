import React from 'react';
import './OptionCardComponent.css';
import PropTypes from 'prop-types';

const OptionCardComponent = ({ title, onClick }) => {
  return (
    <div onClick={onClick} className='row card bg-primary option-card pointer'>
      <div className='col text-white d-flex align-items-center justify-content-center'>
        <span>{title}</span>
      </div>
    </div>
  );
};

OptionCardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OptionCardComponent;
