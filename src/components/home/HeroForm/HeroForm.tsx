//components
import Image from 'next/image'
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
                        <div className={styles.Form}>
                            <div className={styles.bloque}>
                                <div className={styles.title}>
                                    <span>Datos del servicio</span>
                                </div>
                                <div className={styles.containerInputs}>
                                    <div className={styles.containerInput}>
                                        <label>Tipo de servicio</label>
                                        <select
                                            className={styles.input}
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                    <div className={styles.containerInput}>
                                        <label>Fecha de servicio</label>
                                        <input
                                            type='date'
                                            className={styles.input}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
