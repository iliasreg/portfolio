import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'


const barlow = Barlow({
  weight: ['300', '500', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ILIAS REGUIG',
  description: 'A styled portfolio to show my artistic side <:>',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  )
}
