//components
import Image from 'next/image'
import Link from 'next/link'
//style
import styles from './ContactHome.module.sass'

export const ContactHome = () => {
    return (
        <section className={styles.SectionContactHome}>
            <div className={styles.background}>
                <div className={styles.containerImg}>
                    <div className={styles.img}>
                        <Image
                            src="/images/carretera.png"
                            alt='carretera'
                            fill
                        />
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.containerImg}>
                    <div className={styles.img}>
                        <Image
                            src="/images/imagen-camion-caja-blanca.png"
                            alt='camion caja blanca'
                            fill
                        />
                    </div>
                </div>
                <div className={styles.containerInfo}>
                    <div className={styles.title}>
                        <span>¿Necesitas un presupuesto?</span>
                    </div>
                    <div className={styles.text}>
                        <span>No dudes en contactarnos, con gusto te atenderemos</span>
                    </div>
                    <div className={styles.containerButtons}>
                        <div className={styles.button}>
                            <Link href="https://api.whatsapp.com/send?phone=5215510791481&text=%C2%A1Hola%2C%20TMH%20Log%C3%ADstica!%20%F0%9F%8C%9F%0A%0AEstoy%20listo%20para%20optimizar%20mi%20log%C3%ADstica%20y%20almacenaje.%20%C2%BFPodr%C3%ADan%20enviarme%20detalles%20sobre%20sus%20servicios%3F%20%F0%9F%93%A6%F0%9F%9A%9B" target='_blank'>
                                <span>Contactar por Whatsapp</span>
                            </Link>
                        </div>
                        <div className={styles.secondButton}>
                            <Link href="#HeroForm">
                                <span>Solicitar una cotización</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
