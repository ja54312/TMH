//components
import Image from 'next/image'
//styles
import styles from '../CarruselArticles.module.sass'

export const CardArticle = () => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image src='/images/ArticleMain01.png' alt="imagen" fill />
            </div>
            <div className={styles.info}>
                <div className={styles.title}>¿Qué significa un picking?</div>
                <div className={styles.text}>¿Alguna vez te has preguntado qué significa la palabra “picking” en el  ámbito logístico y comercial? Este término, aparentemente simple,  encierra un proceso crucial en el manejo de mercancías y almacenes. En  este blog, vamos a explorar a....</div>
                <div className={styles.moreinfo}>
                    <div className={styles.date}>
                        10 de Agosto 2024
                    </div>
                    <div className={styles.link}>
                        Leer más
                    </div>
                </div>
            </div>
        </div>
    )
}
