import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'KO Media | Video Production for Brands That Mean Business',
    template: '%s | KO Media',
  },
  description:
    'Scroll-stopping video content and social media production for small businesses and clubs. Reels, long-form, and animation that drives real results.',
  keywords: [
    'video production',
    'social media content',
    'reels',
    'short-form video',
    'small business marketing',
    'content creator',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'KO Media',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'KO Media' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background text-text-primary antialiased">
        {/* Unregister any stale Sanity Studio service workers */}
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
              registrations.forEach(function(r) { r.unregister(); });
            });
          }
        `}} />
        {children}
      </body>
    </html>
  )
}
