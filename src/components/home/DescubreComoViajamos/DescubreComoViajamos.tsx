//Components
import { CarruselComoViajamos } from './components/CarruselComoViajamos/CarruselComoViajamos'
import Image from 'next/image'
import Link from 'next/link'
//Styles
import styles from './DescubreComoviajamos.module.sass'

export const DescubreComoViajamos = () => {
    return (
        <section className={styles.SectionDescubreComoViajamos} id='Unidades'>
            <div className={styles.containerBackground}>
                <div className={styles.containerImg}>
                    <Image src="/images/almacenFondo.jpeg" alt="camion25T" fill />
                </div>
            </div>
            <div className={styles.containerInfo}>
                <div className={styles.containerInformacion}>
                    <div className={styles.title}>
                        <span>Descubre cómo viajamos contigo</span>
                    </div>
                    <div className={styles.text}>
                        <p>
                            Desde unidades ágiles de 800 kg hasta tráileres de 53, cubrimos todas las necesidades de nuestros clientes con precisión y eficiencia. Esta variedad nos permite ofrecer soluciones personalizadas para cada tipo de carga, asegurando tanto la agilidad en entregas locales como la capacidad para manejar grandes volúmenes a nivel nacional e internacional.
                        </p>
                    </div>
                    <div className={styles.containerButton}>
                        <div className={styles.button}>
                            <Link href="#HeroForm">
                                <span>Solicitar una cotización</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <CarruselComoViajamos />
            </div>
        </section>
    )
}
