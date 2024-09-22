//styles
import Image from 'next/image'
import styles from './BannerArticle.module.sass'

export const BannerArticle = () => {
    return (
        <section className={styles.sectionBannerArticle}>
            <div className={styles.containerImg}>
                <Image
                    src='/images/ArticleMain01.png'
                    alt='Banner Article'
                    fill
                />
            </div>
        </section>
    )
}
