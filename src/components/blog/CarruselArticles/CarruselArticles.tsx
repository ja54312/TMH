//components
import { CardArticle } from './components/CardArticle'
//style
import styles from './CarruselArticles.module.sass'

export const CarruselArticles = () => {
    return (
        <section className={styles.sectionCarruselArticles}>
            <div className={styles.containerCards}>
                <CardArticle />
                <CardArticle />
                <CardArticle />
            </div>
        </section>
    )
}
