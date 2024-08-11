//Components
import Image from 'next/image';
//styles
import styles from './SecondBannerInfo.module.sass';

export const SecondBannerInfo = () => {
    return (
        <section className={styles.SectionSecondBannerInfo}>
            <div className={styles.background}>
                <Image
                    src="/images/conductorTMH.png"
                    alt="background"
                    fill
                />
            </div>
            <div className={styles.Info}>
                <div className={styles.containerInfo}>
                    <div className={styles.title}>
                        <span>Redefinimos la logística con soluciones personalizadas que transforman</span>
                    </div>
                    <div className={styles.text}>
                        <p>Impulsamos la eficiencia y efectividad en cada etapa del proceso. Desde el primer contacto hasta la entrega final, nuestra pasión por la innovación y la excelencia nos permite superar constantemente las expectativas.</p>
                        <p>Comprometidos con la excelencia, ofrecemos un servicio excepcional que convierte desafíos logísticos en oportunidades de crecimiento.</p>
                    </div>
                    <div className={styles.containerButton}>
                        <div className={styles.button}>
                            <span>Solicitar una cotización</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
