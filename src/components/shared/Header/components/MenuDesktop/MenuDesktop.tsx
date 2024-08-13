//Components
import Link from "next/link"
//styles
import styles from "./MenuDesktop.module.sass"

export const MenuDesktop = () => {
    return (
        <div className={styles.containerMenuDesktop}>
            <Link href="#Servicios">
                <div className={styles.tabUnderline}>Servicios</div>
            </Link>
            <Link href="#Unidades">
                <div className={styles.tab}>Unidades</div>
            </Link>
            <Link href="#Porque">
                <div className={styles.tab}>¿Por qué TMH?</div>
            </Link>
            <Link href="#SobreNosotros">
                <div className={styles.tab}>Sobre Nosotros</div>
            </Link>
        </div>
    )
}
