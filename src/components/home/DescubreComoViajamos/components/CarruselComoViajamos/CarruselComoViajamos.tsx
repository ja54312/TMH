"use client"
//hooks
import { useState } from 'react'
//components
import Image from 'next/image'
//styles
import styles from '../../DescubreComoviajamos.module.sass'
//data
import { dataCarruselComoViajamos as data } from './dataCarruselComoViajamos';

export const CarruselComoViajamos = () => {

    const [countCard, setCountCard] = useState(1);
    //console.log('countCard', countCard);
    //console.log('data', data);

    const handleLeft = () => {
        if (countCard === 1) {
            setCountCard(6);
        } else {
            setCountCard(countCard - 1);
        }
    }

    const handleRight = () => {
        if (countCard === 6) {
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
        <div className={styles.containerCarrusel}>
            <div className={styles.containerImagen}>
                <div className={styles.img}>
                    <Image src={currentData.img} alt="Descubre como viajamos" fill />
                </div>
            </div>
            <div className={styles.cointainerSlider}>
                <div className={styles.containerArrow} onClick={handleLeft}>
                    <Image src="/icons/arrow-leftW.png" alt="arrow" fill />
                </div>
                <div className={styles.Info}>
                    <div className={styles.InfoText}>
                        <span>Unidades para cargas de hasta</span>
                    </div>
                    <div className={styles.InfoTextDynamic}>
                        <span>{currentData.weight}</span>
                    </div>
                </div>
                <div className={styles.containerArrow} onClick={handleRight}>
                    <Image src="/icons/arrow-rightW.png" alt="arrow" fill />
                </div>
            </div>
        </div>
    )
}
