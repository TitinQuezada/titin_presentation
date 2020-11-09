import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Collections } from '../../../enums/collections';
import { GetPaginatedDocuments } from '../../../helpers/CloudFireStoreHelper';
import PaginationComponent from '../../pagination/PaginationComponent';
import PropTypes from 'prop-types';
import './LanguajesTable.css';
import { getPageNumbers } from '../../../helpers/PaginationHelper';
import { DialogContext } from '../../../context/DialogContext';
import DeleteLanguaje from '../delete_languaje/DeleteLanguaje';
import { LoadingContext } from '../../../context/LoadingContext';
import { toast } from 'react-toastify';
import UpdateLanguaje from '../update_languaje/UpdateLanguaje';

const LanguajesTable = () => {
  const [languajes, setLanguajes] = useState([]);
  const [pagesNunmber, setPagesNunmber] = useState(0);
  const firstPage = 1;
  const pageSizeOptionsFirstPosition = 0;
  const [pageSizeOptions] = useState([5, 10]);
  const { setModalContent, setIsModalOpen } = useContext(DialogContext);
  const [pageSize, setPageSize] = useState(pageSizeOptions[pageSizeOptionsFirstPosition]);
  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoading(true);
    GetPaginatedDocuments(Collections.languajes, pageSize, firstPage).then(({ documents, documentsNumber }) => {
      const pagesNumber = getPageNumbers(documentsNumber, pageSize);

      setLanguajes(documents);
      setPagesNunmber(pagesNumber);
      setIsLoading(false);
    });

  }, [pageSizeOptions, setIsLoading, pageSize]);

  const getPage = async (page, pageSize = pageSizeOptions[pageSizeOptionsFirstPosition]) => {
    try {
      const { documents, documentsNumber } = await GetPaginatedDocuments(Collections.languajes, pageSize, page);
      const pagesNumber = getPageNumbers(documentsNumber, pageSize);

      setPageSize(pageSize);
      setLanguajes(documents);
      setPagesNunmber(pagesNumber);
    } catch (error) {
      toast.error('Ha ocurrido un error cargando los lenguajes');
    }
  };

  const openDeleteLanguajeDialog = (languaje) => {
    setModalContent(<DeleteLanguaje languaje={languaje} cancel={closeModal} />);

    setIsModalOpen(true);
  };

  const closeModal = async () => {
    await getPage(firstPage, pageSize);
    setIsModalOpen(false);
  }

  const openUpdateLanguajeDialog = (languaje) => {
    setModalContent(<UpdateLanguaje languaje={languaje} cancel={closeModal} />);

    setIsModalOpen(true);
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
                        <button className='btn btn-outline-info mr-3' onClick={() => openUpdateLanguajeDialog(languaje)}>
                          <i className='far fa-edit'></i>
                        </button>

                        <button className='btn btn-outline-danger' onClick={() => openDeleteLanguajeDialog(languaje)}>
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
        onChange={getPage} pageSizeOptions={pageSizeOptions}
      ></PaginationComponent>
    </React.Fragment>
  );
};

LanguajesTable.propTyepes = {
  registerPerPage: PropTypes.number.isRequired
}

export default LanguajesTable;
