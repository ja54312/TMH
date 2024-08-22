"use client";
import { useState } from "react";
//Components
import Link from "next/link"
import classNames from 'classnames/bind';
//styles
import styles from "./MenuDesktop.module.sass"

export const MenuDesktop = () => {

    const [subrayado, setSubrayado] = useState({
        subrayado00: true,
        subrayado01: false,
        subrayado02: false,
        subrayado03: false,
    });

    const cx = classNames.bind(styles);

    const tabUnderline00 = cx('tab', { 'tabUnderline': subrayado.subrayado00 });
    const tabUnderline01 = cx('tab', { 'tabUnderline': subrayado.subrayado01 });
    const tabUnderline02 = cx('tab', { 'tabUnderline': subrayado.subrayado02 });
    const tabUnderline03 = cx('tab', { 'tabUnderline': subrayado.subrayado03 });

    const handleSubrayado = (index: number) => {
        setSubrayado({
            subrayado00: index === 0,
            subrayado01: index === 1,
            subrayado02: index === 2,
            subrayado03: index === 3,
        });
    };


    return (
        <div className={styles.containerMenuDesktop}>
            <Link href="#Servicios">
                <div className={tabUnderline00} onClick={() => handleSubrayado(0)}>Servicios</div>
            </Link>
            <Link href="#Unidades">
                <div className={tabUnderline01} onClick={() => handleSubrayado(1)}>Unidades</div>
            </Link>
            <Link href="#Porque">
                <div className={tabUnderline02} onClick={() => handleSubrayado(2)}>¿Por qué TMH?</div>
            </Link>
            <Link href="#SobreNosotros">
                <div className={tabUnderline03} onClick={() => handleSubrayado(3)}>Sobre Nosotros</div>
            </Link>
        </div>
    )
}
