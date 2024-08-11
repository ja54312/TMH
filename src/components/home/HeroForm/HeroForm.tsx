//components
import Image from 'next/image'
import { Form } from './components/Form'
//styles
import styles from './HeroForm.module.sass'

export const HeroForm = () => {
    const urlImage = "/images/man-working-as-truck-driver.png"
    return (
        <section className={styles.SectionHeroForm}>
            <div className={styles.backGroundContainer}>
                <Image
                    src={urlImage}
                    alt='cada envio cuenta una historia'
                    fill
                />
            </div>
            <div className={styles.InfoContainer}>
                <div className={styles.ContainerText}>
                    <span>Con <b>TMH</b>, cada envío cuenta una historia</span>
                </div>
                <div className={styles.ContainerForm}>
                    <form className={styles.ContainerForm}>
                        <div className={styles.title}>
                            <span>Cotiza tu servicio de transporte y almacenaje</span>
                        </div>
                        <Form />
                    </form>
                </div>
            </div>
        </section>
    )
}
