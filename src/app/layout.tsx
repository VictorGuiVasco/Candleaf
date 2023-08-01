import type { Metadata } from 'next'

import { poppins, roboto } from '@/utils/fonts'

import './globals.scss'

export const metadata: Metadata = {
  title: 'Candleaf',
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
