import { Montserrat, Cormorant_Garamond, Allerta_Stencil } from 'next/font/google'

export const montserrat = Montserrat({
    weight: ['200', '500', '700'],
    subsets: ['vietnamese'],
    display: 'swap'
})

export const garamaod = Cormorant_Garamond({
    weight: ['300', '500', '700'],
    subsets: ['vietnamese'],
    display: 'swap'
})

export const stencil = Allerta_Stencil({
    weight: ['400'],
    subsets: ['latin']

})