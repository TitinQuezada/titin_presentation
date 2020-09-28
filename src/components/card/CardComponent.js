import React from 'react';
import PropTypes from 'prop-types';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CardComponent.css';

const CardComponent = ({ imageBase64, title, level }) => {
  const progressBarStyles = (percentage) => {
    let color = 'red';

    if (percentage >= 70 && percentage < 80) {
      color = '#d5ba31';
    }

    if (percentage >= 80) {
      color = 'green';
    }

    return buildStyles({
      pathColor: color,
      textColor: color,
    });
  };

  return (
    <div className='card'>
      <img
        src={imageBase64}
        className='card-img-top'
        alt='Imagen'
        height='100px'
      />
      <div className='card-body text-center'>
        <h5 className='card-title mb-0'>{title}</h5>
        <span>Conocimiento</span>
        <p></p>
        <CircularProgressbar
          value={level}
          text={`${level}%`}
          className='progress-barr'
          styles={progressBarStyles(level)}
        />
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  imageBase64: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default CardComponent;
