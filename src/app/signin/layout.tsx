// Importing necessary modules and components from React
'use client'
// import type { Metadata } from 'next'
import SignInForm from '../components/SignInForm'

// Functional component named 'layout' defining the structure for the sign-up page
export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div>
      {/* Sign-in form component */}
      <SignInForm />
      {/* Children components or page content */}
      {children}
    </div>
  )
}

// This React component represents the layout structure for the sign-up page. It includes the SignInForm component and the children prop, which represents the content specific to the sign-up page.



// 'use client'
// // import type { Metadata } from 'next'
// import SignInForm from '../components/SignInForm'

// // export const metadata: Metadata = {
// //     title: 'Sign-up | Seafood.co',
// //     description: 'Enjoy delicious seafood',
// //     keywords: 'seafood, lobsters, crabs, crayfish, crawfish, squids, squid-ink, snails, shellfish, fish, oysters, prawns, shrimp, trout, clams, scallops'
// //   }

// export default function layout({
//     children,
//   }: {
//     children: React.ReactNode
//   }) {
//   return (
//     <div>
//       <SignInForm />
//         {children}
//     </div>
//   )
// }