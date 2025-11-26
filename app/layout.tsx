import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Velonix - Flexible & Reliable AI Compute Power for Southeast Asia & Middle East',
  description: 'Providing flexible and reliable AI compute power across Southeast Asia and Middle East. Enterprise-grade AI infrastructure with scalable solutions for rapidly growing markets.',
  keywords: 'AI compute power, AI infrastructure, GPU servers, AI server rental, machine learning infrastructure, Southeast Asia, Middle East, flexible AI compute, reliable AI power',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

