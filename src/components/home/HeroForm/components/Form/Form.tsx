//styles
import styles from '../../HeroForm.module.sass'

export const Form = () => {
    return (
        <div className={styles.Form}>
            <div className={styles.bloque}>
                <div className={styles.title}>
                    <span>Datos del servicio</span>
                </div>
                <div className={styles.containerInputs}>
                    <div className={styles.rowInputs}>
                        <div className={styles.containerInput}>
                            <label>Tipo de servicio</label>
                            <select
                                className={styles.input}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div className={styles.containerInput}>
                            <label>Fecha de servicio</label>
                            <input
                                type='date'
                                className={styles.input}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bloque}>
                <div className={styles.title}>
                    <span>Tus Datos</span>
                </div>
                <div className={styles.containerInputs}>
                    <div className={styles.rowInputs}>
                        <div className={styles.containerInput}>
                            <label>Nombre Completo</label>
                            <input
                                type='text'
                                className={styles.inputComplete}
                            />
                        </div>
                    </div>
                    <div className={styles.rowInputs}>
                        <div className={styles.containerInput}>
                            <label>Correo electrónico</label>
                            <input
                                type='email'
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.containerInput}>
                            <label>Teléfono</label>
                            <input
                                type='phone'
                                className={styles.input}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bloque}>
                <div className={styles.containerInputs}>
                    <div className={styles.rowInputs}>
                        <div className={styles.containerInputCheck}>
                            <input
                                type='checkbox'
                                className={styles.input}
                            />
                            <label>Acepto que he leído el <b>Aviso de privacidad</b></label>
                        </div>
                        <div className={styles.containerInputButton}>
                            <div
                                className={styles.button}
                            >
                                Cotizar
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
