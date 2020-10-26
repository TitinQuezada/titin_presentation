import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CreateLanguaje from '../components/languajes/create_languaje/CreateLanguaje';
import LanguajesTable from '../components/languajes/languajes_table/LanguajesTable';
import NavbarComponent from '../components/navbar/NavbarComponent';
import { DialogContext } from '../context/DialogContext';

const LanguajesPage = () => {
  const history = useHistory();
  const { setModalContent, setIsModalOpen } = useContext(DialogContext)

  const openCreateLanguajeDialog = () => {
    setModalContent(<CreateLanguaje cancel={closeCreateLanguajeDialog} />)

    setIsModalOpen(true);
  };

  const closeCreateLanguajeDialog = () => {
    setIsModalOpen(false);
  }

  return (
    <React.Fragment>
      <NavbarComponent
        title='Home'
        onClick={() => history.push('/back-office')}
      />

      <h4 className='text-center mt-3 mb-5'>Mantenimiento de lenguajes</h4>

      <div className="row">
        <div className='col-6'>
          <div className='input-group mb-3'>
            <input type='text' className='form-control' placeholder='Buscar' />

            <div className='input-group-append'>
              <button className='btn btn-outline-secondary input-group-text'>
                <i className='fas fa-search'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='col-6'>
          <button className='btn btn-outline-primary btn-block' onClick={openCreateLanguajeDialog}>Agregar</button>
        </div>
      </div>

      <LanguajesTable registerPerPage={10} />
    </React.Fragment>
  );
};

export default LanguajesPage;
