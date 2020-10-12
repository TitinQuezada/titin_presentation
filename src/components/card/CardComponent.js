import React from 'react';
import PropTypes from 'prop-types';
import './CardComponent.css';

const CardComponent = ({ imageBase64, title }) => {
  return (
    <div className='card'>
      <div className='p-3 pb-0'>
        <img src={imageBase64} className='card-img-top' alt='Imagen' />
      </div>

      <div className='col d-flex align-items-center justify-content-center card-body text-center'>
        <h5 className='card-title mb-0'>{title}</h5>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  imageBase64: PropTypes.string.isRequired,
};

export default CardComponent;
