//components
import Image from 'next/image';
import Link from 'next/link';
//styles
import styles from './Logo.module.sass'

export const Logo = () => {
    return (
        <div className={styles.LogoContainer}>
            <Link href="/">
                <Image
                    src="/icons/LogoTMH.png"
                    alt="LogoTMH"
                    width={114}
                    height={45}
                />
            </Link>
        </div>
    )
}