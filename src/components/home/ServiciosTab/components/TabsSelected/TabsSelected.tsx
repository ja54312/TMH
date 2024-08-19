"use client"
//hooks
import { useState } from 'react'
//Components
import { TipodeServicios } from '../TIpodeServicios'
import classNames from 'classnames/bind';
//styles
import styles from '../../ServiciosTab.module.sass'
//data
import { dataServiciosTransporte } from '../database/dataServiciosTransporte'
import { dataServiciosAlmacenaje } from '../database/dataServiciosAlmacenaje'

export const TabsSelected = () => {

    const [tabSelected, setTabSelected] = useState('Transporte')
    const [countCard, setCountCard] = useState(1);

    const handleSelectTransporte = () => {
        setTabSelected('Transporte')
        setCountCard(1)
    }

    const handleSelectAlmacenaje = () => {
        setTabSelected('Almacenaje')
        setCountCard(1)
    }
    //console.log(tabSelected)
    let data
    if (tabSelected === 'Transporte') {
        data = dataServiciosTransporte
    } else {
        data = dataServiciosAlmacenaje
    }

    const cx = classNames.bind(styles);

    const tabStyles01 = cx('Tab', {
        'tabSelected': tabSelected === 'Transporte',
    });

    const tabStyles02 = cx('Tab', {
        'tabSelected': tabSelected === 'Almacenaje',
    });

    return (
        <div className={styles.ContainerTabs}>
            <div className={styles.Tabs}>
                <div className={tabStyles01} onClick={handleSelectTransporte}>
                    <span>Transporte</span>
                </div>
                <div className={tabStyles02} onClick={handleSelectAlmacenaje}>
                    <span>Almacenaje</span>
                </div>
            </div>
            <TipodeServicios data={data} setCountCard={setCountCard} countCard={countCard} />
        </div>
    )
}
