import React, { useContext, useRef } from 'react';
import './UpdateFramework.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { UpdateDocument } from '../../../helpers/CloudFireStoreHelper';
import { Collections } from '../../../enums/collections';
import { LoadingContext } from '../../../context/LoadingContext';

const UpdateFramework = ({ framework, cancel }) => {
  const defaultImageName = 'Buscar';
  const fileInputRef = useRef();
  const [imageName, setImageName] = useState(`${framework.name}.png`);
  const [name, setName] = useState(framework.name);
  const [image, setImage] = useState(framework.image);
  const [nameError, setnameError] = useState('');
  const [imageError, setImageError] = useState('');
  const { setIsLoading } = useContext(LoadingContext);

  const openBrowser = () => {
    fileInputRef.current.click();
  };

  const getImage = ({ target }) => {
    const firstFilePosition = 0;
    const file = target.files[firstFilePosition];

    if (!file) {
      setImageName(defaultImageName);
    } else {
      const fileReader = new FileReader();

      setImageName(file.name);

      fileReader.readAsDataURL(file);

      fileReader.onloadend = () => {
        setImage(fileReader.result);
      };
    }
  };

  const updateFramework = async () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      try {
        setIsLoading(true);
        const framework = buildFramework();
        await UpdateDocument(Collections.frameworks, framework);
        setIsLoading(false);
        cancel();
        toast.success('Se ha actualizado el framework con exito!');
      } catch {
        toast.error(
          'Ha ocurrido un error actualizando el framework en Firebase'
        );
      }
    }
  };

  const buildFramework = () => {
    const frameworkResult = { id: framework.id, name, image };

    return frameworkResult;
  };

  const validateForm = () => {
    const isValidName = validateName();
    const isValidImage = validateImage();

    if (isValidName && isValidImage) {
      return true;
    }

    return false;
  };

  const validateName = () => {
    const nameError = name ? '' : 'El nombre del framework es requerido';
    setnameError(nameError);

    return nameError ? false : true;
  };

  const validateImage = () => {
    const imageError =
      imageName === defaultImageName
        ? 'La imagen del framework es requerida'
        : '';
    setImageError(imageError);

    return imageError ? false : true;
  };

  return (
    <React.Fragment>
      <h4 className="text-center mb-3">Actualizar framework</h4>
      <div className="form-group">
        <label>Nombre</label>
        <input
          className="form-control"
          placeholder="Nombre del framework"
          onChange={({ target }) => setName(target.value)}
          value={name}
        />
        <small className="text-danger">{nameError}</small>
      </div>

      <div className="input-group" onClick={openBrowser}>
        <div className="col-12 p-0">
          <label>Imagen</label>
        </div>

        <input
          type="text"
          className="form-control"
          placeholder={imageName}
          disabled
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="input-file"
          onChange={getImage}
        />
        <div className="input-group-append">
          <div className="btn btn-info">Buscar</div>
        </div>
      </div>

      <small className="text-danger">{imageError}</small>

      <div className="row mt-5">
        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-danger mr-3" onClick={cancel}>
            Cancelar
          </button>
          <button className="btn btn-primary" onClick={updateFramework}>
            Actualizar
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

UpdateFramework.propTypes = {
  languaje: PropTypes.object.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default UpdateFramework;
