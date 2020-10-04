import React, { useEffect, useState } from 'react';
import './PaginationComponent.css';
import PropTypes from 'prop-types';

const PaginationComponent = ({
  pagesNumber,
  previousPageFunction,
  nextPageFunction,
  actualPage,
  onPageClick,
}) => {
  const [pageLinks, setPageLinks] = useState([]);

  useEffect(() => {
    setPageLinks([]);
    for (let index = 1; index <= pagesNumber; index++) {
      const margin = index === pagesNumber ? 'mr-0' : 'mr-2';
      const linkStyle = index === actualPage ? 'bg-primary text-white' : '';

      const pageLink = (
        <button
          key={index}
          className={`page-link ${margin} ${linkStyle}`}
          onClick={() => onPageClick(index)}
        >
          {index}
        </button>
      );

      setPageLinks((pageLinks) => [...pageLinks, pageLink]);
    }
  }, [pagesNumber, actualPage, onPageClick]);

  return (
    <div className='row justify-content-center'>
      <div className='col'>
        <button
          className='btn btn-size page-link mr-4 float-right'
          onClick={previousPageFunction}
        >
          Anterior
        </button>
      </div>

      {pageLinks}

      <div className='col'>
        <button
          className='btn btn-size page-link ml-4'
          onClick={nextPageFunction}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

PaginationComponent.propTypes = {
  pagesNumber: PropTypes.number.isRequired,
  previousFunction: PropTypes.func.isRequired,
  nextFunction: PropTypes.func.isRequired,
  actualPage: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
};

export default PaginationComponent;
