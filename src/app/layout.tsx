import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { GridPattern } from '@/components/GridPattern'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ian Gicheha Mbae | Python Software Developer',
  description: 'Portfolio of Ian Gicheha Mbae - Python Software Developer and Computer Science student',
  openGraph: {
    title: 'Ian Gicheha Mbae | Python Software Developer',
    description: 'Portfolio of Ian Gicheha Mbae - Python Software Developer and Computer Science student',
    type: 'website',
    images: [{ url: '/photo.png', width: 576, height: 1312, alt: 'Ian Gicheha Mbae' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-dark text-white overflow-x-hidden`}>
        <AnimatedBackground />
        <GridPattern />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
