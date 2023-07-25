import { poppins, roboto } from '@/utils/fonts'

import './globals.scss'

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${roboto.className}`}>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
