//styles
import styles from "./MenuDesktop.module.sass"

export const MenuDesktop = () => {
    return (
        <div className={styles.containerMenuDesktop}>
            <div className={styles.tabUnderline}>Servicios</div>
            <div className={styles.tab}>Unidades</div>
            <div className={styles.tab}>¿Por qué TMH?</div>
            <div className={styles.tab}>Sobre Nosotros</div>
        </div>
    )
}
