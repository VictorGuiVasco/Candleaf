import { Roboto, Poppins } from 'next/font/google'

export const poppins = Poppins({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const roboto = Roboto({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
