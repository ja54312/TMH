//components
import { GrowNumber } from './components/GrowNumber';
//styles
import styles from './StatsHome.module.sass';

export const StatsHome = () => {
    return (
        <section className={styles.SectionStatsHome}>
            <div className={styles.ContainerStatsHome}>
                <div className={styles.containerStats}>
                    <GrowNumber numberStart={0} numberEnd={100} />
                    <div className={styles.title}>
                        <span>Unidades disponibles</span>
                    </div>
                </div>
                <div className={styles.containerStats}>
                    <GrowNumber numberStart={0} numberEnd={200} />
                    <div className={styles.title}>
                        <span>Clientes satisfechos</span>
                    </div>
                </div>
                <div className={styles.containerStats}>
                    <GrowNumber numberStart={0} numberEnd={40000} />
                    <div className={styles.title}>
                        <span>Entregas completadas</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
