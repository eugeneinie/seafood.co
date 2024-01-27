import React from 'react';
import { seafoods } from '@/app/page';
import Image from 'next/image';
import Link from 'next/link';

// Filtering seafoods to display only 'prawns'
const seafoodsCards = seafoods.filter((seafood) => seafood.type === 'prawns');

// Page component for displaying a grid of prawn seafood items
export default function Page() {
  return (
    <div className='relative left-52 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4'>
      {/* Mapping through filtered prawn seafood items */}
      {seafoodsCards.map((seafood: any, index: any) => (
        <div key={index} className="text-center">
          {/* Link to individual seafood details page */}
          <Link href={`/seafoods/${seafood.name}`}>
            {/* Image component for displaying seafood image */}
            <Image 
              src={`/images/${seafood.name}.jpg`}
              alt={seafood.name}
              width={300}
              height={600}
              className='h-[400px] rounded-md'
            />
          </Link>
          {/* Heading for seafood name */}
          <h2 className='capitalize'>{seafood.name}</h2>
          {/* Displaying seafood price */}
          <h2>&#8358;{seafood.price}</h2>
          {/* Link to the home page */}
          <Link href='/'>
            {/* Button for viewing details */}
            <button className='bg-[#3498db] rounded-md px-5 py-2 hover:bg-slate-950 hover:text-white'>Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}


// import React from 'react'
// import { seafoods } from '@/app/page'
// import Image from 'next/image'
// import Link from 'next/link'

// const seafoodsCards = seafoods.filter(seafood => seafood.type === 'prawns')

// export default function Page() {
//   return (
//     <div className='relative left-52 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4'>
//       {seafoodsCards.map((seafood:any, index:any) => (
//         <div key={index} className="text-center">
//           <Link href={`/seafoods/${seafood.name}`}>
//           <Image 
//             src={`/images/${seafood.name}.jpg`}
//             alt={seafood.name}
//             width={300}
//             height={600}
//             className='h-[400px] rounded-md'
//           />
//           </Link>
//           <h2 className='capitalize'>{seafood.name}</h2>
//           <h2>&#8358;{seafood.price}</h2>
//           <Link href='/'>
//             <button className='bg-[#3498db] rounded-md px-5 py-2 hover:bg-slate-950 hover:text-white'>Details</button>
//           </Link>
//         </div>
//       ))}
//     </div>
//   )
// }
