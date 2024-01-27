import type { Metadata } from 'next';
import Page from './../components/Page';

// Metadata for the Cart page
export const metadata: Metadata = {
  title: 'Cart | Seafood.co',
  description: 'Enjoy delicious seafood',
  keywords: 'seafood, lobsters, crabs, crayfish, crawfish, squids, squid-ink, snails, shellfish, fish, oysters, prawns, shrimp, trout, clams, scallops'
};

// Layout component for the Cart page
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=''>
      {/* Page component for the Cart page */}
      <Page />

      {/* Children components */}
      {children}
    </div>
  );
}


// import type { Metadata } from 'next'
// import Page from './../components/Page'

// export const metadata: Metadata = {
//     title: 'Cart | Seafood.co',
//     description: 'Enjoy delicious seafood',
//     keywords: 'seafood, lobsters, crabs, crayfish, crawfish, squids, squid-ink, snails, shellfish, fish, oysters, prawns, shrimp, trout, clams, scallops'
//   }

// export default function layout({
//     children,
//   }: {
//     children: React.ReactNode
//   }) {
//   return (
//     <div className=''>
//       <Page />
//       {children}
//     </div>
//   )
// }