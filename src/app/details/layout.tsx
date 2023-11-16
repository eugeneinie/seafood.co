import React from 'react'
import type { Metadata } from 'next'
import Details from '../components/Details'

export const metadata: Metadata = {
    title: 'Contact | Seafood.co',
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
        <Details />
      {children}
  </div>
)
}
