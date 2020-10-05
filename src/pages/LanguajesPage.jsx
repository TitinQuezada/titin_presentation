import React from 'react';
import { useHistory } from 'react-router-dom';
import LanguajesTable from '../components/languajes/languajes_table/LanguajesTable';
import NavbarComponent from '../components/navbar/NavbarComponent';

const LanguajesPage = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <NavbarComponent
        title='Home'
        onClick={() => history.push('/back-office')}
      />

      <h4 className='text-center mt-3'>Mantenimiento de lenguajes</h4>

      <LanguajesTable className='mt-5' />
    </React.Fragment>
  );
};

export default LanguajesPage;
