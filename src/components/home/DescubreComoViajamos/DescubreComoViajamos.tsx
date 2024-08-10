//Components
import Image from 'next/image'
//Styles
import styles from './DescubreComoviajamos.module.sass'

export const DescubreComoViajamos = () => {
    return (
        <section className={styles.SectionDescubreComoViajamos}>
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
                            Desde unidades ágiles de 800 kg hasta tráileres de 53', cubrimos todas las necesidades de nuestros clientes con precisión y eficiencia. Esta variedad nos permite ofrecer soluciones personalizadas para cada tipo de carga, asegurando tanto la agilidad en entregas locales como la capacidad para manejar grandes volúmenes a nivel nacional e internacional.
                        </p>
                    </div>
                    <div className={styles.containerButton}>
                        <div className={styles.button}>
                            <span>Solicitar una cotización</span>
                        </div>
                    </div>
                </div>
                <div className={styles.containerCarrusel}>
                    <div className={styles.containerImagen}>
                        <div className={styles.img}>
                            <Image src="/images/Recurso-25T.png" alt="Descubre como viajamos" fill />
                        </div>
                    </div>
                    <div className={styles.cointainerSlider}>
                        <div className={styles.containerArrow}>
                            <Image src="/icons/arrow-leftW.png" alt="arrow" fill />
                        </div>
                        <div className={styles.Info}>
                            <div className={styles.InfoText}>
                                <span>Unidades para cargas de hasta</span>
                            </div>
                            <div className={styles.InfoTextDynamic}>
                                <span>25 toneladas</span>
                            </div>
                        </div>
                        <div className={styles.containerArrow}>
                            <Image src="/icons/arrow-rightW.png" alt="arrow" fill />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
