//Components
import { Logo } from './components/Logo'
import { LlamaGratis } from './components/LlamaGratis'
import { Menu } from './components/Menu'
//Styles
import styles from './Header.module.sass'
import { MenuDesktop } from './components/MenuDesktop'

export const Header = () => {
    return (
        <header className={styles.Header}>
            <LlamaGratis />
            <MenuDesktop />
            <Menu />
            <Logo />
        </header>
    )
}