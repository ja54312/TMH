//Components
import Image from 'next/image';
import Link from 'next/link';
import { ServicioTransporte } from './components/ServiciosTransporte';
//styles
import styles from './ServiciosTab.module.sass';

export const ServiciosTab = () => {
    return (
        <section className={styles.SectionServiciosTab} id='Servicios'>
            <div className={styles.ContainerTitle}>
                <div className={styles.title}>
                    <span>Servicios que marcan la diferencia</span>
                </div>
                <div className={styles.text}>
                    <p>Mediante el uso de análisis de datos avanzados, tecnologías de vanguardia y prácticas sostenibles, garantizamos que cada eslabón de la cadena de suministro funcione en armonía.</p>
                </div>
            </div>
            <div className={styles.ContainerTabs}>
                <div className={styles.Tabs}>
                    <div className={styles.Tab}>
                        <span>Transporte</span>
                    </div>
                    <div className={styles.Tab}>
                        <span>Almacenaje</span>
                    </div>
                </div>
                <ServicioTransporte />
            </div>
            <div className={styles.ContainerButton}>
                <div className={styles.button}>
                    <Link href="#HeroForm">
                        <span>Solicitar una cotización</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
