//components
import Image from 'next/image';
//styles
import styles from './ArticleSecondary.module.sass';

export const ArticleSecondary = () => {
    return (
        <section className={styles.sectionArticleSecondary}>
            <div className={styles.containerArticleSecondary}>
                <div className={styles.containerInfo}>
                    <div className={styles.title}>
                        ¿Qué es la logística inversa?
                    </div>
                    <div className={styles.text}>
                        La logística inversa gestiona la recuperación y reciclaje de residuos en el proceso de producción de productos, envases y embalajes. Este concepto surge ante la necesidad de cuidar el medio ambiente. Pero continúa creciendo día a día, porque incrementa la....
                    </div>
                    <div className={styles.moreinfo}>
                        <div className={styles.date}>
                            10 de Agosto 2024
                        </div>
                        <div className={styles.link}>
                            Leer más
                        </div>
                    </div>
                </div>
                <div className={styles.containerImage}>
                    <Image
                        src='/images/ArticleMain01.png'
                        alt='Article Main'
                        fill
                    />
                </div>
            </div>
        </section>
    )
}
