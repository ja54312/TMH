"use client"
//hooks
import { useState } from 'react'
//Components
import { TipodeServicios } from '../TIpodeServicios'
//styles
import styles from '../../ServiciosTab.module.sass'
//data
import { dataServiciosTransporte } from '../database/dataServiciosTransporte'
import { dataServiciosAlmacenaje } from '../database/dataServiciosAlmacenaje'

export const TabsSelected = () => {

    const [tabSelected, setTabSelected] = useState('Transporte')

    const handleSelectTransporte = () => {
        setTabSelected('Transporte')
    }

    const handleSelectAlmacenaje = () => {
        setTabSelected('Almacenaje')
    }
    //console.log(tabSelected)
    let data
    if (tabSelected === 'Transporte') {
        data = dataServiciosTransporte
    } else {
        data = dataServiciosAlmacenaje
    }

    return (
        <div className={styles.ContainerTabs}>
            <div className={styles.Tabs}>
                <div className={styles.Tab} onClick={handleSelectTransporte}>
                    <span>Transporte</span>
                </div>
                <div className={styles.Tab} onClick={handleSelectAlmacenaje}>
                    <span>Almacenaje</span>
                </div>
            </div>
            <TipodeServicios data={data} />
        </div>
    )
}
