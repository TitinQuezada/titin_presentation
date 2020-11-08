import React, { useEffect, useState } from 'react';
import './PaginationComponent.css';
import PropTypes from 'prop-types';

const PaginationComponent = ({ pagesNumber, registerPerPage, onChange }) => {
  const firstPage = 1;

  const [lastPage, setLastPage] = useState(pagesNumber)
  const [actualPage, setActualPage] = useState(firstPage);
  const [pageLinks, setPageLinks] = useState([]);

  // const getPageButton = (page, styles) => (
  //   <button
  //     key={page}
  //     className={`btn btn-outline-primary btn-sm ${styles.margin} ${styles.buttonStyle}`}
  //     onClick={() => changePage(page)}
  //   >
  //     {page}
  //   </button>
  // );

  const getEllipsis = (page, margin) => <span key={page} className={margin}>...</span>;

  // const getButtonsWhenActualPageIsMinorOfFive = (page, styles) => {
  //   if (page <= 5 || page === lastPage) {
  //     return getPageButton(page, styles)
  //   }

  //   if (page === lastPage - 1) {
  //     return getEllipsis(page, styles.margin);
  //   }
  // };

  // const getCenterButtons = (page, styles) => {
  //   if (page === firstPage + 1 || page === lastPage - 1) {
  //     return getEllipsis(page, styles.margin);
  //   }
  //   else if (page === actualPage || page === firstPage || page === actualPage + 1 || page === actualPage - 1 || page === lastPage) {
  //     return getPageButton(page, styles)
  //   }
  // };

  // const getLastFiveButtons = (page, styles) => {
  //   if (page >= lastPage - 4 || page === firstPage) {
  //     return getPageButton(page, styles)
  //   }

  //   if (page === firstPage + 1) {
  //     return getEllipsis(page, styles.margin);
  //   }
  // };


  // const createPaginationButtons = () => {

  //   const pageButtons = [];

  //   for (let page = 1; page <= pagesNumber; page++) {
  //     const margin = page === pagesNumber ? 'mr-0' : 'mr-2';
  //     const buttonStyle = page === actualPage ? 'bg-primary text-white' : '';
  //     const styles = { margin, buttonStyle };


  //     if (actualPage < 4) {
  //       const pageLink = getButtonsWhenActualPageIsMinorOfFive(page, styles)
  //       pageButtons.push(pageLink);
  //     }

  //     if (actualPage >= 4 && actualPage < lastPage - 2) {
  //       const pageLink = getCenterButtons(page, styles)
  //       pageButtons.push(pageLink);
  //     }

  //     if (actualPage >= lastPage - 2) {
  //       const pageLink = getLastFiveButtons(page, styles)
  //       pageButtons.push(pageLink);
  //     }
  //   }

  //   setPageLinks(pageButtons);
  // };

  const changePage = (page) => {
    setActualPage(page);
    onChange(page);
  };

  useEffect(() => {
    const changePage = (page) => {
      setActualPage(page);
      onChange(page);
    };
    const getPageButton = (page, styles) => (
      <button
        key={page}
        className={`btn btn-outline-primary btn-sm ${styles.margin} ${styles.buttonStyle}`}
        onClick={() => changePage(page)}
      >
        {page}
      </button>
    );

    const getButtonsWhenActualPageIsMinorOfFive = (page, styles) => {
      if (page <= 5 || page === lastPage) {
        return getPageButton(page, styles)
      }

      if (page === lastPage - 1) {
        return getEllipsis(page, styles.margin);
      }
    };

    const getCenterButtons = (page, styles) => {
      if (page === firstPage + 1 || page === lastPage - 1) {
        return getEllipsis(page, styles.margin);
      }
      else if (page === actualPage || page === firstPage || page === actualPage + 1 || page === actualPage - 1 || page === lastPage) {
        return getPageButton(page, styles)
      }
    };

    const getLastFiveButtons = (page, styles) => {
      if (page >= lastPage - 4 || page === firstPage) {
        return getPageButton(page, styles)
      }

      if (page === firstPage + 1) {
        return getEllipsis(page, styles.margin);
      }
    };

    setLastPage(pagesNumber);
    const pageButtons = [];

    for (let page = 1; page <= pagesNumber; page++) {
      const margin = page === pagesNumber ? 'mr-0' : 'mr-2';
      const buttonStyle = page === actualPage ? 'bg-primary text-white' : '';
      const styles = { margin, buttonStyle };

      if (pagesNumber <= 7) {
        const pageLink = getPageButton(page, styles);
        pageButtons.push(pageLink);
      }
      else {
        if (actualPage < 4) {
          const pageLink = getButtonsWhenActualPageIsMinorOfFive(page, styles)
          pageButtons.push(pageLink);
        }

        if (actualPage >= 4 && actualPage < lastPage - 2) {
          const pageLink = getCenterButtons(page, styles)
          pageButtons.push(pageLink);
        }

        if (actualPage >= lastPage - 2) {
          const pageLink = getLastFiveButtons(page, styles)
          pageButtons.push(pageLink);
        }
      }
    }

    setPageLinks(pageButtons);
  }, [pagesNumber, actualPage, onChange, lastPage]);





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
