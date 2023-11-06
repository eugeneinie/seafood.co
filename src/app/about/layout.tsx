import type { Metadata } from 'next'
import AboutBanner from './AboutBanner'
import Benefits from './Benefits'
import AboutFounders from './AboutFounders'

export const metadata: Metadata = {
    title: 'About | Seafood.co',
    description: 'Enjoy delicious seafood',
    keywords: 'seafood, lobsters, crabs, crayfish, crawfish, squids, squid-ink, snails, shellfish, fish, oysters, prawns, shrimp, trout, clams, scallops'
  }

export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div>
      <AboutBanner/>
      <Benefits/>
      <AboutFounders/>
        {children}
    </div>
  )
}
