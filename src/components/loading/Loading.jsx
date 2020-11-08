import Modal from 'react-modal';
import React, { useContext } from 'react'
import Loader from 'react-loader-spinner';
import { LoadingContext } from '../../context/LoadingContext';


const Loading = () => {
    Modal.setAppElement('#root');

    const { isLoading } = useContext(LoadingContext);

    const modalStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: '',
            background: ''
        },
        overlay: { zIndex: '3' }
    };

    return (
        <Modal isOpen={isLoading} style={modalStyles}>
            <div className='vh-100 d-flex justify-content-center align-items-center'>
                <Loader type="Puff" color="#00BFFF" height={100} width={100}>
                </Loader>
            </div>
        </Modal>
    );
}

export default Loading;