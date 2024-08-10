//components
import Image from 'next/image';
//styles
import styles from './Logo.module.sass'

export const Logo = () => {
    return (
        <div className={styles.LogoContainer}>
            <Image
                src="/icons/LogoTMH.png"
                alt="LogoTMH"
                width={114}
                height={45}
            />
        </div>
    )
}