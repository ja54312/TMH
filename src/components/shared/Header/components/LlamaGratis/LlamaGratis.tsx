//components
import Image from 'next/image';
//styles
import styles from './LlamaGratis.module.sass'

export const LlamaGratis = () => {
    return (
        <div className={styles.containerLlamadaGratis}>
            <div className={styles.container}>
                <Image
                    src="/icons/Phone.png"
                    alt="Imagen Telefono"
                    width={20}
                    height={20}
                />
                <span>
                    Llama gratis (55) 5510791481
                </span>
            </div>
        </div>
    )
}
