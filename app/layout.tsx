import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lifeline',
  description: 'Lifeline connects blood donors with patients in need, making blood donation quick and accessible through our mobile app.',
  generator: 'Lifeline',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
