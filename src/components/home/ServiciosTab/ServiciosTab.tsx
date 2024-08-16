//Components
import Image from 'next/image';
import Link from 'next/link';
import { TabsSelected } from './components/TabsSelected';
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
            <TabsSelected />
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
