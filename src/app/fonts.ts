import { Inter, Montserrat } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})

export const monse = Montserrat({
    subsets: ['latin'],
    variable: '--font-monserrat',
    weight: ['400', '500', '600', '700', '900'],
    display: 'swap',
})

