import React from 'react';
import { useHistory } from 'react-router-dom';
import NavbarComponent from '../components/navbar/NavbarComponent';
import OptionCardComponent from '../components/option_card/OptionCardComponent';

const BackOfficePage = () => {
  const history = useHistory();

  return (
    <div className='vh-100 d-flex flex-column '>
      <NavbarComponent
        title='Home'
        onClick={() => history.push('/back-office')}
      />

      <div className='row'>
        <div className='col-6 p-5'>
          <OptionCardComponent
            title='Configuracion'
            onClick={() => history.push('/back-office/configuration')}
          />
        </div>

        <div className='col-6 p-5'>
          <OptionCardComponent
            title='Lenguajes'
            onClick={() => history.push('/back-office/languajes')}
          />
        </div>
      </div>

      <div className='row'>
        <div className='col-6 p-5'>
          <OptionCardComponent
            title='Frameworks'
            onClick={() => history.push('/back-office/frameworks')}
          />
        </div>

        <div className='col-6 p-5'>
          <OptionCardComponent
            title='Proyectos'
            onClick={() => history.push('/back-office/projects')}
          />
        </div>
      </div>
    </div>
  );
};

export default BackOfficePage;
