//Components
import Image from 'next/image';
import Link from 'next/link';
//styles
import styles from './ServiciosTab.module.sass';

export const ServiciosTab = () => {
    return (
        <section className={styles.SectionServiciosTab}>
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
                <div className={styles.InfoTabs}>
                    <div className={styles.containerImg}>
                        <div className={styles.Image}>
                            <Image src="/images/MainImages0.png" alt="Transporte" width={500} height={500} />
                        </div>
                    </div>
                    <div className={styles.containerInfo}>
                        <div className={styles.title}>
                            <span>Logistica especializada</span>
                        </div>
                        <div className={styles.text}>
                            <p>Métodos avanzados para gestionar de manera eficiente y precisa el transporte y distribución de bienes complejos o delicados.</p>
                        </div>
                        <div className={styles.containerButton}>
                            <div className={styles.button}>
                                <Image src="/icons/arrow-left.png" alt="arrow" width={20} height={20} />
                                <span>1-7</span>
                                <Image src="/icons/arrow-right.png" alt="arrow" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </div>
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
