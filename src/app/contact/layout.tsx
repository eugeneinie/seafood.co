import type { Metadata } from 'next'
import ContactForm from './ContactForm'

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
      <ContactForm />
        {children}
    </div>
  )
}