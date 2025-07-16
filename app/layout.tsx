import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tablet Notes',
  description: 'Tablet Notes: AI-powered sermon note-taking, transcription, and insights. Join the beta for the next generation of sermon engagement.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Tablet Notes</title>
        <link rel="icon" type="image/png" href="/images/tablet-notes-logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
