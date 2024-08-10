//Fonts
import { inter, monse, poppins, source } from './fonts'
import { Header } from '../components/shared/Header'
import { Footer } from '../components/shared/Footer'
import '../sass/globals.sass'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body className={`${inter.variable} ${monse.variable} ${source.variable} ${poppins.variable}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}