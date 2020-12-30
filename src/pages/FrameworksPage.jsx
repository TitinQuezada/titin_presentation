import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CreateFramework from '../components/frameworks/create_framework/CreateFramework';
import FrameworksTable from '../components/frameworks/framework_table/FrameworksTable';
import NavbarComponent from '../components/navbar/NavbarComponent';
import { DialogContext } from '../context/DialogContext';

const FrameworksPage = () => {
  const history = useHistory();
  const { setModalContent, setIsModalOpen } = useContext(DialogContext);

  const openCreateFrameworkDialog = () => {
    setModalContent(<CreateFramework cancel={closeCreateFrameworkDialog} />);

    setIsModalOpen(true);
  };

  const closeCreateFrameworkDialog = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      <NavbarComponent
        title="Home"
        onClick={() => history.push('/back-office')}
      />

      <h4 className="text-center mt-3 mb-5">Mantenimiento de Frameworks</h4>

      <div className="row">
        <div className="col-6">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Buscar" />

            <div className="input-group-append">
              <button className="btn btn-outline-secondary input-group-text">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="col-6">
          <button
            className="btn btn-outline-primary btn-block"
            onClick={openCreateFrameworkDialog}
          >
            Agregar
          </button>
        </div>
      </div>

      <FrameworksTable></FrameworksTable>
    </React.Fragment>
  );
};

export default FrameworksPage;
