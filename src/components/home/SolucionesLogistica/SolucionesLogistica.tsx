//Components
import Image from 'next/image'
//Styles
import styles from './SolucionesLogistica.module.sass'

export const SolucionesLogistica = () => {
    return (
        <section className={styles.SectionSolucionesLogistica}>
            <div className={styles.backgroung}></div>
            <div className={styles.Content}>
                <div className={styles.containerTitle}>
                    <div className={styles.title}>
                        <span>¿Buscas la mejor solución logística?</span>
                    </div>
                    <div className={styles.text}>
                        <span>Descubre por qué</span>
                        <div className={styles.img}>
                            <Image src="/icons/logo-tmh1.png" alt="LogoTMHN" fill />
                        </div>
                        <span>es lo que necesitas</span>
                    </div>
                </div>
                <div className={styles.containerCards}>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <span>Personal certificado</span>
                        </div>
                        <div className={styles.text}>
                            <p>Contamos con <b>personal certificado</b> por “Empresa Recurso Confiable”.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <span>Respuesta Inmediata</span>
                        </div>
                        <div className={styles.text}>
                            <p>Ofrecemos <b>respuesta inmediata</b>, incluso en entregas no programadas.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <span>Comunicación constante</span>
                        </div>
                        <div className={styles.text}>
                            <p>Nuestras unidades cuentan con <b>GPS y Dashcam</b> exterior y en cabina, además de línea directa con cada uno de nuestros operadores.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <span>Manejo impecable de cargas</span>
                        </div>
                        <div className={styles.text}>
                            <p>Aseguramos limpieza en el manejo de <b>cargas secas, refrigeradas y congeladas.</b></p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <span>Empaque y embalaje especializado</span>
                        </div>
                        <div className={styles.text}>
                            <p>Ofrecemos empaque y embalaje para <b>mercancía delicada.</b></p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <span>Soporte técnico continuo</span>
                        </div>
                        <div className={styles.text}>
                            <p>Brindamos soporte técnico en <b>mantenimiento</b> de unidades y <b>sistemas de refrigeración</b> las 24 horas, los 365 días del año.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <span>Seguridad privada y circuito cerrado de vídeovigilancia</span>
                        </div>
                        <div className={styles.text}>
                            <p>Nuestro patio cuenta con <b>circuito cerrado</b> en todas las áreas  y seguridad privada.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <span>Unidades especializadas</span>
                        </div>
                        <div className={styles.text}>
                            <p>Nuestras unidades están equipadas con <b>suspensión de aire</b> y <b>rampa hidráulica</b>.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.title}>
                            <span>Personal capacitado</span>
                        </div>
                        <div className={styles.text}>
                            <p>Nuestro personal está altamente capacitado para realizar <b>maniobras</b> y <b>entregas a detalle.</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
