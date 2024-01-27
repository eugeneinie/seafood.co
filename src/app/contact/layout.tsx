import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import ContactBanner from './ContactBanner'

// Metadata for the Contact layout page
export const metadata: Metadata = {
    title: 'Contact | Seafood.co',
    description: 'Enjoy delicious seafood',
    keywords: 'seafood, lobsters, crabs, crayfish, crawfish, squids, squid-ink, snails, shellfish, fish, oysters, prawns, shrimp, trout, clams, scallops'
}

// Contact layout component that includes ContactBanner, ContactForm, and children components
export default function layout({
    children,
}: {
    children: React.ReactNode
}) {
    // JSX structure for the Contact layout component
    return (
        <div>
            {/* Display the ContactBanner component */}
            <ContactBanner />

            {/* Display the ContactForm component */}
            <ContactForm />

            {/* Display any additional child components */}
            {children}
        </div>
    )
}


// import type { Metadata } from 'next'
// import ContactForm from './ContactForm'
// import ContactBanner from './ContactBanner'

// export const metadata: Metadata = {
//     title: 'Contact | Seafood.co',
//     description: 'Enjoy delicious seafood',
//     keywords: 'seafood, lobsters, crabs, crayfish, crawfish, squids, squid-ink, snails, shellfish, fish, oysters, prawns, shrimp, trout, clams, scallops'
//   }

// export default function layout({
//     children,
//   }: {
//     children: React.ReactNode
//   }) {
//   return (
//     <div>
//       <ContactBanner />
//       <ContactForm />
//         {children}
//     </div>
//   )
// }

