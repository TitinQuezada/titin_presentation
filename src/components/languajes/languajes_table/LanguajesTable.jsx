import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Collections } from '../../../enums/collections';
import { GetPaginatedDocuments } from '../../../helpers/CloudFireStoreHelper';
import PaginationComponent from '../../pagination/PaginationComponent';
import PropTypes from 'prop-types';
import './LanguajesTable.css';

const LanguajesTable = ({ registerPerPage }) => {
  const [languajes, setLanguajes] = useState([]);
  const [pagesNunmber, setPagesNunmber] = useState(0);
  const firstPage = 1;

  useEffect(() => {
    GetPaginatedDocuments(Collections.languajes, registerPerPage, firstPage).then(({ documents, documentsNumber }) => {
      setLanguajes(documents);
      setPagesNunmber(documentsNumber);
    });

  }, [registerPerPage])

  const getPage = async (page) => {
    const { documents, documentsNumber } = await GetPaginatedDocuments(Collections.languajes, registerPerPage, page);

    setLanguajes(documents);
    setPagesNunmber(documentsNumber);
  };

  return (
    <React.Fragment>
      <div className='row'>
        <div className='col-12'>
          <table className='table table-sm'>
            <thead>
              <tr className='bg-primary text-white'>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {languajes.map((languaje) => (
                <tr key={languaje.id}>
                  <td className='vertical-aling-center'>{languaje.name}</td>

                  <td className='vertical-aling-center'>
                    <img
                      width='60vh'
                      src={languaje.image}
                      alt={`${languaje.name}`}
                    />
                  </td>

                  <td className='vertical-aling-center'>
                    <div className='row'>
                      <div className='col'>
                        <button className='btn btn-outline-info mr-3'>
                          <i className='far fa-edit'></i>
                        </button>

                        <button className='btn btn-outline-danger'>
                          <i className='far fa-trash-alt'></i>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <PaginationComponent
        pagesNumber={pagesNunmber}
        registerPerPage={registerPerPage}
        onChange={getPage}
      ></PaginationComponent>
    </React.Fragment>
  );
};

LanguajesTable.propTyepes = {
  registerPerPage: PropTypes.number.isRequired
}

export default LanguajesTable;
