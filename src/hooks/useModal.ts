import { useState, useCallback } from 'react';

const useModal = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);


    const openModal = useCallback(() => {
        setIsOpenModal(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpenModal(false);
    }, []);

    return {
        isOpenModal,
        openModal,
        closeModal
    };
};

export default useModal;