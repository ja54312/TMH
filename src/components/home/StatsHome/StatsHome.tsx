//styles
import styles from './StatsHome.module.sass';

export const StatsHome = () => {
    return (
        <section className={styles.SectionStatsHome}>
            <div className={styles.ContainerStatsHome}>
                <div className={styles.containerStats}>
                    <div className={styles.stats}>
                        <span>+100</span>
                    </div>
                    <div className={styles.title}>
                        <span>Unidades disponibles</span>
                    </div>
                </div>
                <div className={styles.containerStats}>
                    <div className={styles.stats}>
                        <span>+200</span>
                    </div>
                    <div className={styles.title}>
                        <span>Clientes satisfechos</span>
                    </div>
                </div>
                <div className={styles.containerStats}>
                    <div className={styles.stats}>
                        <span>+40,000</span>
                    </div>
                    <div className={styles.title}>
                        <span>Entregas completadas</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
