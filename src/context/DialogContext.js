import React, { createContext, useState } from "react";

export const DialogContext = createContext({
    modalContent: String,
    setModalContent: Function,
    isModalOpen: Boolean,
    setIsModalOpen: Function
});

const DialogProvider = ({ children }) => {
    const [modalContent, setModalContent] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modal = { modalContent, setModalContent, isModalOpen, setIsModalOpen };

    return (
        <DialogContext.Provider value={modal}>
            {children}
        </DialogContext.Provider>);
}

export default DialogProvider;