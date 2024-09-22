//Components
import Image from 'next/image'
import Link from 'next/link'
//style
import styles from './ArticleMain.module.sass'

export const ArticleMain = () => {
    return (
        <section className={styles.sectionArticleMain}>
            <div className={styles.containerArticleMain}>
                <div className={styles.containerInfo}>
                    <div className={styles.title}>
                        Técnicas de almacenamiento: ¿qué tipos existen?
                    </div>
                    <div className={styles.text}>
                        Las técnicas de almacenamiento juegan un papel fundamental en el mundo logístico por una gestión eficiente del espacio y para garantizar la  seguridad de los productos. Además, no solo maximizan a capacidad de almacenamiento, sino también asegurar que...
                    </div>
                    <div className={styles.moreinfo}>
                        <div className={styles.date}>
                            10 de Agosto 2024
                        </div>
                        <div className={styles.link}>
                            <Link href='/blog/ejemploblog01'>
                                Leer más
                            </Link>
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
