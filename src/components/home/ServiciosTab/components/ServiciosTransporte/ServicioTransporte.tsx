"use client";
//hooks
import { useState } from 'react';
//Components
import Image from 'next/image';
//styles
import styles from '../../ServiciosTab.module.sass';
//data
import { dataServiciosTransporte as data } from './dataServiciosTransporte';

export const ServicioTransporte = () => {

    const [countCard, setCountCard] = useState(1);
    //console.log('countCard', countCard);
    //console.log('data', data);

    const handleLeft = () => {
        if (countCard === 1) {
            setCountCard(7);
        } else {
            setCountCard(countCard - 1);
        }
    }

    const handleRight = () => {
        if (countCard === 7) {
            setCountCard(1);
        } else {
            setCountCard(countCard + 1);
        }
    }

    const getObjectByIndex = (array: any[], index: number) => {
        if (index >= 0 && index < array.length) {
            return array[index];
        } else {
            console.error('Índice fuera de rango');
            return null;
        }
    };

    const currentData = getObjectByIndex(data, countCard - 1); // Ajustar el índice para que sea 0-based
    //console.log('currentData', currentData);



    return (
        <div className={styles.InfoTabs}>
            <div className={styles.containerImg}>
                <div className={styles.Image}>
                    <Image src={currentData.img} alt="Transporte" width={500} height={500} />
                </div>
            </div>
            <div className={styles.containerInfo}>
                <div className={styles.title}>
                    <span>{currentData.title}</span>
                </div>
                <div className={styles.text}>
                    <p>{currentData.text}</p>
                </div>
                <div className={styles.containerButton}>
                    <div className={styles.button}>
                        <Image src="/icons/arrow-left.png" alt="arrow" width={20} height={20} onClick={handleLeft} />
                        <div className={styles.containerTextCount}>
                            <span className={styles.countNumber}>{countCard}</span>
                            <span> - 7</span>
                        </div>
                        <Image src="/icons/arrow-right.png" alt="arrow" width={20} height={20} onClick={handleRight} />
                    </div>
                </div>
            </div>
        </div>
    )
}
