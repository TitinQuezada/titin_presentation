import React, { useContext } from 'react';
import './DeleteFramework.css';
import PropTypes from 'prop-types';
import { DeleteDocument } from '../../../helpers/CloudFireStoreHelper';
import { Collections } from '../../../enums/collections';
import { LoadingContext } from '../../../context/LoadingContext';
import { toast } from 'react-toastify';

const DeleteFramework = ({ framework, cancel }) => {
  const { setIsLoading } = useContext(LoadingContext);

  const deleteDocument = async () => {
    try {
      setIsLoading(true);
      await DeleteDocument(Collections.frameworks, framework.id);
      cancel();
      setIsLoading(false);
    } catch {
      toast.error('Ha ocurrido un error eliminando el framework en Firebase');
    }
  };

  return (
    <div>
      <h4 className="text-center mb-3">
        Esta seguro que desea eliminar el framework {framework.name}?
      </h4>

      <div className="row mt-5">
        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-danger mr-3" onClick={cancel}>
            Cancelar
          </button>
          <button className="btn btn-primary" onClick={deleteDocument}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

DeleteFramework.propTypes = {
  languaje: PropTypes.object.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default DeleteFramework;
