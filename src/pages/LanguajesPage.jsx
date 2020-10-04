import React from 'react';
import { useHistory } from 'react-router-dom';
import LanguajesTable from '../components/languajes/languajes_table/LanguajesTable';
import NavbarComponent from '../components/navbar/NavbarComponent';

const LanguajesPage = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <NavbarComponent
        title='BackOffice'
        onClick={() => history.push('/back-office')}
      />

      <LanguajesTable className='mt-5' />
    </React.Fragment>
  );
};

export default LanguajesPage;
