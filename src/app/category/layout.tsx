import React from 'react';
import Category from '../components/Category';
// import Details from '../components/Details';

// Layout component with children and a Category component
export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative top-[45px] flex w-4/5 mx-auto'>
      {/* Category component for displaying product categories */}
      <Category />
      {/* Commented-out Details component (not currently used) */}
      {/* <Details /> */}
      {/* Displaying children components */}
      {children}
    </div>
  );
}


// import React from 'react'
// import Category from '../components/Category'
// // import Details from '../components/Details'

// export default function layout({
//     children, 
//   }: {
//     children: React.ReactNode
//   }) {
//   return (
//     <div className='relative top-[45px] flex w-4/5 mx-auto'>
//       <Category/>
//       {/* <Details /> */}
//       {children}
//     </div>
//   )
// }
// // Explain this code snippet
