import React, { useContext } from 'react';
import Modal from 'react-modal';
import { DialogContext } from '../../context/DialogContext';


const Dialog = () => {
    Modal.setAppElement('#root');

    const { modalContent, isModalOpen, modalClass } = useContext(DialogContext)

    const modalStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px',
            ...modalClass
        },
        overlay: { zIndex: '2' }
    };

    return (
        <Modal isOpen={isModalOpen} style={modalStyles}>
            {modalContent}
        </Modal>
    );
}

export default Dialog;