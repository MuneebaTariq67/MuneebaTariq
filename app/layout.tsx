import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const siteUrl = 'https://muneeba-tariq.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Muneeba Tariq | Software Developer',
    template: '%s | Muneeba Tariq',
  },
  description:
    'Computer Science undergraduate passionate about software engineering, distributed systems, backend development and building scalable applications.',
  keywords: [
    'Muneeba Tariq',
    'Software Developer',
    'Computer Science Student',
    'Python Developer',
    'Distributed Systems',
    'Backend Developer',
    'Software Engineering Intern',
  ],
  authors: [{ name: 'Muneeba Tariq' }],
  creator: 'Muneeba Tariq',
  generator: 'v0.app',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Muneeba Tariq | Software Developer',
    description:
      'Computer Science undergraduate passionate about software engineering, distributed systems, backend development and building scalable applications.',
    siteName: 'Muneeba Tariq Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Muneeba Tariq — Software Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muneeba Tariq | Software Developer',
    description:
      'Computer Science undergraduate passionate about software engineering, distributed systems and scalable applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  themeColor: '#0b1120',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muneeba Tariq',
  jobTitle: 'Software Developer',
  description:
    'Computer Science undergraduate passionate about software engineering, distributed systems and backend development.',
  url: siteUrl,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Fatima Jinnah Women University',
  },
  knowsAbout: [
    'Python',
    'Java',
    'C++',
    'Distributed Systems',
    'Data Structures and Algorithms',
    'Backend Development',
    'Artificial Intelligence',
  ],
  sameAs: ['https://github.com/', 'https://linkedin.com/'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
