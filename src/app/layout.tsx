import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seafood Ecommerce',
  description: 'Enjoy delicious seafood',
  keywords: 'lobsters, crabs, salmon, paella, crayfish, crawfish, shellfish, swordfish, oysters, prawns, shrimp, mussels, trout, tuna, clams, scallops, calamari, octopus, sashimi, paella'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className="relative -z-[1] top-[150px]">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
