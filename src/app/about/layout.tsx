import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | Seafood.co',
    description: 'Enjoy delicious seafood',
    keywords: 'lobsters, crabs, crayfish, shellfish, prawns'
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
