//components
import Image from 'next/image'
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
                            <span>Contactar por Whatsapp</span>
                        </div>
                        <div className={styles.secondButton}>
                            <span>Solicitar una cotización</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
