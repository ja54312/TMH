//components
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './ContentArticle.module.sass'

export const ContentArticle = () => {
    return (
        <section className={styles.sectionContentArticle}>
            <div className={styles.containerArticle}>
                <Link href='/blog'>
                    <div className={styles.returnBlog}>
                        <div className={styles.containerArrow}>
                            <Image
                                src='/icons/arrow-leftBig.png'
                                alt='Regresar'
                                fill
                            />
                        </div>
                        <span>Regresar</span>
                    </div>
                </Link>
                <div className={styles.title}>
                    Beneficios de un sistema de gestión de flota vehicular
                </div>
                <div className={styles.authorLine}>
                    <span className={styles.author}>Escrito por Daniel. H</span>
                    <span className={styles.line}>|</span>
                    <span className={styles.date}>Lunes, Agosto 15, 2024</span>
                </div>
                <div className={styles.hr}></div>
                <div className={styles.info}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Egestas tellus sollicitudin et erat sed dui. Justo cursus vel neque habitasse. Magna nulla augue tellus augue purus nunc. Eu auctor nec tellus egestas urna faucibus cras. Amet convallis velit sed tellus.
                        Sapien orci turpis pellentesque ullamcorper orci nisl massa. Viverra tincidunt facilisis elementum ornare nibh dui placerat sit et. Sed pretium lectus tempor aliquet placerat tortor vel praesent purus. Lacinia a proin ac euismod odio lorem vitae ullamcorper elit. Eget quam velit aliquam nisl viverra. Tincidunt sagittis purus ut quis euismod. Auctor aliquam rhoncus aliquam faucibus felis quis cursus. Elit neque in dolor id. Morbi orci dignissim consectetur vitae mattis ac sed. Nulla nibh porttitor vel et. Sociis dolor phasellus viverra ipsum at sem purus nec. Sit pretium in cras ut augue urna. Libero facilisis pharetra sed sagittis at luctus nisi consectetur. Sagittis scelerisque egestas sit dignissim. Scelerisque enim mi dignissim maecenas.
                    </p>
                    <p>
                        Senectus porttitor fermentum morbi netus. Rhoncus cursus diam egestas mus nibh diam. Neque ipsum id morbi pharetra. Eu id facilisis orci arcu. Nibh maecenas in libero mauris. Mattis sed fames enim massa leo quis. Parturient elit pharetra elementum auctor viverra facilisis.
                        Dictumst duis risus sagittis faucibus et sit a in. Lorem proin ultricies turpis blandit in vel ante leo at. Quis magna nec pellentesque nec tristique mi. Massa pretium malesuada ultrices fermentum id vitae. Dictum nunc nulla tellus morbi nullam eget quis.
                    </p>
                    <p>
                        Pharetra posuere ut et faucibus parturient. Risus tempor amet erat pellentesque venenatis ut commodo. Elementum duis montserratdum sed elementum eget. Purus nec nisl eget nec proin at. Elit risus nullam etiam quis viverra. Adipiscing odio at neque sit. Sed fermentum risus montserratdum sit amet pulvinar faucibus.
                        Elit arcu risus sodales posuere aliquet. Tellus eu arcu faucibus senectus bibendum aliquam senectus enim. Pulvinar sapien massa nunc vel pharetra amet maecenas ut. Ornare cras amet ut cursus bibendum lectus aliquet a. Cras molestie et et enim.
                    </p>
                </div>
            </div>
        </section>
    )
}
