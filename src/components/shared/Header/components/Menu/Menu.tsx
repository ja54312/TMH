"use client"
//components
import Image from 'next/image'
import { ModalMenu } from './components/ModalMenu'
//hooks
import useModal from '../../../../../hooks/useModal'
//styles
import styles from './Menu.module.sass'


export const Menu = () => {

    const { isOpenModal, openModal, closeModal } = useModal();


    return (
        <div className={styles.MenuContainer}>
            <div className={styles.MenuBackGround} onClick={openModal}>
                <Image
                    src="/icons/List.png"
                    alt="MenuHamburguesa"
                    width={40}
                    height={40}
                />
            </div>
            <ModalMenu isOpenModal={isOpenModal} closeModal={closeModal} />
        </div>
    )
}