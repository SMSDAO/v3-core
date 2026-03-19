import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'SMSDAO v3-core | Enterprise Dashboard',
  description: 'Enterprise dashboard for SMSDAO Uniswap V3 Core protocol',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
