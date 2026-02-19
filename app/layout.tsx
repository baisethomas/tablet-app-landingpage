import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Tablet Notes — Write it on the tablet of your heart.',
  description:
    'A focused note-taking platform designed for sermon reflection and lasting retention. Coming to iPhone.',
}

export const viewport: Viewport = {
  themeColor: '#1F1F23',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/png" href="/images/logomark-black.png" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
