import React, { createContext, useState } from "react";

export const DialogContext = createContext({
    modalContent: String,
    setModalContent: Function,
    isModalOpen: Boolean,
    setIsModalOpen: Function,
    modalClass: Object,
    setModalClass: Function
});

const DialogProvider = ({ children }) => {
    const [modalContent, setModalContent] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalClass, setModalClass] = useState({})
    const modal = { modalContent, setModalContent, isModalOpen, setIsModalOpen, modalClass, setModalClass };

    return (
        <DialogContext.Provider value={modal}>
            {children}
        </DialogContext.Provider>);
}

export default DialogProvider;