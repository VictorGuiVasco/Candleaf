import type { Metadata } from 'next'

import './globals.scss'
import '@smastrom/react-rating/style.css'

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
