import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | Seafood.co',
    description: 'Enjoy delicious seafood',
    keywords: 'lobsters, crabs, salmon, paella, crayfish, crawfish, shellfish, swordfish, oysters, prawns, shrimp, mussels, trout, tuna, clams, scallops, calamari, octopus, sashimi, paella'
  }

export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div>
        {children}
    </div>
  )
}
