import Providers from '@/components/Providers'
import './globals.css'
import { Nunito, Plus_Jakarta_Sans } from 'next/font/google'
import { plusJakartaSans } from '@/lib/data/font'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={plusJakartaSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
