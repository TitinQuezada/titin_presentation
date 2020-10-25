import React, { useRef } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './CreateLanguajeDialog.css'
import { useState } from 'react';

const CreateLanguajeDialog = ({ isOpen, close }) => {
    Modal.setAppElement('#root');

    const defaultImageName = 'Buscar';
    const fileInputRef = useRef();
    const [imageName, setImageName] = useState(defaultImageName);
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [nameError, setnameError] = useState('');
    const [imageError, setImageError] = useState('');
    const modalStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px'
        }
    };

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

    const createLanguaje = () => {
        validateForm();
        console.log({ name, image });
    };

    const validateForm = () => {
        validateName();
        validateImage();
    };

    const validateName = () => {
        const nameError = name ? '' : 'El nombre del lenguaje es requerido';
        setnameError(nameError);
    };

    const validateImage = () => {
        const imageError = imageName === defaultImageName ? 'La imagen del lenguaje es requerida' : '';
        setImageError(imageError);
    };

    const closeModal = () => {
        setnameError('');
        setImageError('');
        close();
    }

    return (
        <Modal isOpen={isOpen} style={modalStyles}>
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
                    <button className="btn btn-danger mr-3" onClick={closeModal}>Cancelar</button>
                    <button className="btn btn-primary" onClick={createLanguaje}>Agregar</button>
                </div>
            </div>
        </Modal>
    );
}

CreateLanguajeDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
};

export default CreateLanguajeDialog;