//styles
import styles from './BackgroundWhite.module.sass'
//Modelos
interface BackgroundWhiteProps {
    children: React.ReactNode;
}

export const BackgroundWhite: React.FC<BackgroundWhiteProps> = ({ children }) => {
    return (
        <section className={styles.sectionBackgroundWhite}>{
            children
        }</section>
    )
}
