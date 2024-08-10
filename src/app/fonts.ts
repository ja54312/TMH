import { Inter, Montserrat, Poppins, Source_Sans_3 } from 'next/font/google'

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

export const source = Source_Sans_3({
    subsets: ['latin'],
    variable: '--font-source',
    weight: ['400', '500', '600', '700', '900'],
    display: 'swap',
})

export const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['400', '500', '600', '700', '900'],
    display: 'swap',
})


