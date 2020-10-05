import React, { useEffect, useState } from 'react';
import './PaginationComponent.css';
import PropTypes from 'prop-types';

const PaginationComponent = ({ pagesNumber, registerPerPage, onChange }) => {
  const firstPage = 1;
  const lastPage = pagesNumber;
  const [actualPage, setActualPage] = useState(firstPage);
  const [pageLinks, setPageLinks] = useState([]);

  const createPaginationButtons = () => {
    const pageLinks = [];

    for (let page = 1; page <= pagesNumber; page++) {
      const margin = page === pagesNumber ? 'mr-0' : 'mr-2';
      const linkStyle = page === actualPage ? 'bg-primary text-white' : '';

      const pageLink = (
        <button
          key={page}
          className={`btn btn-outline-primary btn-sm ${margin} ${linkStyle}`}
          onClick={() => changePage(page)}
        >
          {page}
        </button>
      );

      pageLinks.push(pageLink);
    }

    setPageLinks(pageLinks);
  };

  const changePage = (page) => {
    setActualPage(page);
    onChange(page);
  };

  useEffect(createPaginationButtons, [actualPage]);

  const goToPreviousPage = () => changePage(actualPage - 1);

  const goToNextPage = () => changePage(actualPage + 1);

  const getRecordsInformation = () => {
    const since = (actualPage - 1) * registerPerPage + 1;
    const until = actualPage * registerPerPage;

    return `${since} - ${until}`;
  };

  return (
    <div className='row'>
      <div className='col-12 col-sm-6 d-flex align-items-center justify-content-center justify-content-sm-start mb-3 mb-sm-0'>
        <small>Mostrando registros &nbsp; {getRecordsInformation()}</small>
      </div>

      <div className='col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end align-items-center mb-3 mb-sm-0'>
        <button
          disabled={actualPage === firstPage}
          className='btn btn-light text-primary btn-sm mr-2'
          onClick={goToPreviousPage}
        >
          <i className='fas fa-backward'></i>
        </button>

        {pageLinks}

        <button
          disabled={actualPage === lastPage}
          className='btn btn-light text-primary btn-sm ml-2'
          onClick={goToNextPage}
        >
          <i className='fas fa-forward'></i>
        </button>
      </div>
    </div>
  );
};

PaginationComponent.propTypes = {
  pagesNumber: PropTypes.number.isRequired,
  registerPerPage: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};

export default PaginationComponent;
