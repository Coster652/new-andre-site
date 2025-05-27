import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Sellers - Andre Winter Real Estate | Expert Selling Guides',
  description: 'Comprehensive guides for home sellers in New York. Learn pricing strategies, home improvements, staging secrets, and market trends from real estate expert Andre Winter.',
}

export default function SellersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </>
  )
}