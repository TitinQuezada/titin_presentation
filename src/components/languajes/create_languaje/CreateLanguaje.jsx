import React, { useRef } from 'react';
import './CreateLanguaje.css'
import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { AddDocument } from '../../../helpers/CloudFireStoreHelper';
import { Collections } from '../../../enums/collections';

const CreateLanguaje = ({ cancel }) => {
    const defaultImageName = 'Buscar';
    const fileInputRef = useRef();
    const [imageName, setImageName] = useState(defaultImageName);
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [nameError, setnameError] = useState('');
    const [imageError, setImageError] = useState('');

    const openBrowser = () => {
        fileInputRef.current.click();
    };

    const getImage = ({ target }) => {
        const firstFilePosition = 0;
        const file = target.files[firstFilePosition];

        if (!file) {
            setImageName(defaultImageName);
        }
        else {
            const fileReader = new FileReader();

            setImageName(file.name);

            fileReader.readAsDataURL(file);

            fileReader.onloadend = () => {
                setImage(fileReader.result);
            };
        }
    };

    const createLanguaje = async () => {
        const isFormValid = validateForm();

        if (isFormValid) {
            try {
                const languaje = buildLanguaje();
                await AddDocument(Collections.languajes, languaje);
                toast.success('Se ha creado el lenguaje con exito!');
            } catch {
                toast.error('Ha ocurrido un error creando el lenguaje en Firebase');
            }
        }
    };

    const buildLanguaje = () => {
        const languaje = { name, image };

        return languaje;
    }

    const validateForm = () => {
        const isValidName = validateName();
        const isValidImage = validateImage();

        if (isValidName && isValidImage) {
            return true;
        }

        return false;
    };

    const validateName = () => {
        const nameError = name ? '' : 'El nombre del lenguaje es requerido';
        setnameError(nameError);

        return nameError ? false : true;
    };

    const validateImage = () => {
        const imageError = imageName === defaultImageName ? 'La imagen del lenguaje es requerida' : '';
        setImageError(imageError);

        return imageError ? false : true;
    };

    return (
        <React.Fragment>
            <h4 className='text-center mb-3'>Crear lenguaje</h4>
            <div className="form-group">
                <label>Nombre</label>
                <input className="form-control" placeholder="Nombre del lenguaje" onInput={({ target }) => setName(target.value)} />
                <small className='text-danger'>{nameError}</small>
            </div>

            <div className='input-group' onClick={openBrowser}>
                <div className="col-12 p-0">
                    <label>Imagen</label>
                </div>

                <input type='text' className='form-control' placeholder={imageName} disabled />
                <input ref={fileInputRef} type='file' accept="image/*" className='input-file' onChange={getImage} />
                <div className='input-group-append'>
                    <div className='btn btn-info'>
                        Buscar
                        </div>
                </div>
            </div>

            <small className='text-danger'>{imageError}</small>

            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-danger mr-3" onClick={cancel}>Cancelar</button>
                    <button className="btn btn-primary" onClick={createLanguaje}>Agregar</button>
                </div>
            </div>
        </React.Fragment>
    );
}

CreateLanguaje.propTypes = {
    cancel: PropTypes.func.isRequired
}

export default CreateLanguaje;