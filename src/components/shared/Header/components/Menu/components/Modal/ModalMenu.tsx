"use client"
//components
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
//styles
import styles from './ModalMenu.module.sass'

export const ModalMenu = ({ isOpenModal, closeModal }: any) => {

    //if (!isOpenModal) return null;

    const gotoRoute = () => {
        closeModal()
    }

    const cx = classNames.bind(styles);

    const modalStyles = cx('visible', {
        'modal': isOpenModal,
    });


    return (
        <div className={modalStyles}>
            <div className={styles.modal_content}>
                <div className={styles.containerClose} onClick={gotoRoute}>
                    <span className={styles.close} >&times;</span>
                    <span className={styles.text}>Cerrar</span>
                </div>
                <div className={styles.containerTitles}>
                    <div className={styles.ContainerSimpleTitle}>
                        <Link href='#'>
                            <span>Servicios</span>
                        </Link>
                    </div>
                    <div className={styles.ContainerSimpleTitle}>
                        <Link href='#'>
                            <span>Unidades</span>
                        </Link>
                    </div>
                    <div className={styles.ContainerSimpleTitle}>
                        <Link href='#'>
                            <span>¿Porque TMH?</span>
                        </Link>
                    </div>
                    <div className={styles.ContainerSimpleTitle}>
                        <Link href='#'>
                            <span>Sobre nosotros</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.containerPhone}>
                    <div className={styles.containerImg}>
                        <Image
                            src="/icons/Phone.png"
                            alt="Imagen Telefono"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className={styles.containerText}>
                        <span>Llama gratis</span>
                        <span>(55) 5510791481</span>
                    </div>
                </div>
            </div>
        </div>
    );
};