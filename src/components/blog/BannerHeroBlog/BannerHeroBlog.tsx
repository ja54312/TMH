//components
import Image from 'next/image'
//style
import styles from './BannerHeroBlog.module.sass'

export const BannerHeroBlog = () => {
    return (
        <section className={styles.sectionBannerHeroBlog}>
            <div className={styles.containerImg}>
                <Image
                    src='/images/HeadBlog-section.png'
                    alt='Banner Hero Blog'
                    fill
                />
            </div>
        </section>
    )
}
