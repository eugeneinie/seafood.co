// // Importing necessary modules and components from React and Next.js
// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// // import { seafoods } from '../page'

// // Type definition for seafood properties
// // type seafoodProps = {
// //   products: {
// //     name: string,
// //     type: string,
// //     description: string,
// //     id: number,
// //     price: number
// //   }[]
// // };

// // Functional component named 'FeaturedItem' representing a featured seafood item
// export default function FeaturedItem(/*{products}:seafoodProps*/) {

//   // Uncomment the following lines if you have a 'seafoods' array and want to implement dynamic featured items
//   // const featuredItem = seafoods[Math.random(Image)((product:seafoodProps) => product.name)];
//   // const excludedItem =  {
//   //   name: "trout",
//   //   type: "fish",
//   //   description: "Freshwater fish known for its delicate flavor and tender flesh.",
//   //   id: 14,
//   //   price: 5800
//   // };

//   // Uncomment the following function if you have a 'seafoods' array and want to implement dynamic featured items
//   // function getFeaturedItem() {
//   //   const filteredSeafoods = seafoods.filter(products => products !== excludedItem);
//   //   const randomIndex = Math.floor(Math.random() * filteredSeafoods.length);
//   //   return filteredSeafoods[randomIndex];
//   // }
    
//   return (
//     <>
//       <div className='m-auto h-[60px]'>
//         {/* Link to the specific category page */}
//         <Link href={`/category/crawfish`}>
//           {/* Image of the featured item */}
//           <Image
//             src={`/images/crawfish.jpg`}
//             alt='crawfish'
//             width={1200}
//             height={320}
//             className='relative left-40 rounded-md mx-0 mt-[80px] h-80'
//           />
//           {/* Button indicating the featured item */}
//           <button className='border rounded-md p-auto relative left-[1200px] bg-white text-black bottom-72 py-1 px-2'>Featured Item</button>
//         </Link>
//         {/* Details of the featured item */}
//         <aside className='relative left-[200px] bottom-[120px] text-white'>
//           <p className='text-2xl font-extrabold'>Crawfish</p>
//           <p>&#8358;5200</p>
//         </aside>
//       </div>
//       {/* Uncomment the following lines if you have a 'seafoods' array and want to map through it */}
//       {/* <div className="m-auto py-[60px]">
//         {seafoods.map((seafoodArray, index) => (
//           <Link key={index} href={`/images/${products.name}`}>
//             <Image 
//               src={`/images/${products.name}.jpg`}
//               alt={products.name}
//               width={400}
//               height={400}
//               className='rounded-md h-2'
//             />
//           </Link>
//         ))}
//       </div> */}
//     </>
//   )
// }

// This React component represents a featured seafood item, including its image, details, and a link to the specific category page. The commented-out sections suggest an attempt to implement dynamic featured items and map through a 'seafoods' array; you can uncomment and modify them based on your specific requirements.


import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { seafoods } from '../page'

// type seafoodProps = {
//     products: {
//       name: string,
//       type: string,
//       description: string,
//       id: number,
//       price: number
//     }[]
//   };

export default function FeaturedItem(/*{products}:seafoodProps*/) {

  // const featuredItem = seafoods.Math.random(Image)((product:seafoodProps) => product.name);
  // const excludedItem =  {
  //   name: "trout",
  //   type: "fish",
  //   description: "Freshwater fish known for its delicate flavor and tender flesh.",
  //   id: 14,
  //   price: 5800
  // };

  // function getFeaturedItem() {
  //   const filteredSeafoods = seafoods.filter(products => products !== excludedItem);
  //   const randomIndex = Math.floor(Math.random() * filteredSeafoods.length);
  //   return filteredSeafoods[randomIndex];
  // }
    
  return (
    <>
    <div className='m-auto h-[60px]'>
      <Link href={`/category/crawfish`}>
      <Image
      src={`/images/crawfish.jpg`}
      alt='crawfish'
      width={1200}
      height={320}
      className='relative left-40 rounded-md mx-0 mt-[80px] h-80'
      />
        <button className='border rounded-md p-auto relative left-[1200px] bg-white text-black bottom-72 py-1 px-2'>Featured Item</button>
      </Link>
      <aside className='relative left-[200px] bottom-[120px] text-white'>
        <p className='text-2xl font-extrabold'>Crawfish</p>
        <p>&#8358;5200</p>
      </aside>
    </div>
    {/* <div className="m-auto py-[60px]">{seafoods.map(seafoodArray, index)

    }
      <Link href={`/images/${products.name}`}>
        <Image 
          src={`/images/${products.name}.jpg`}
          alt={products.name}
          width={400}
          height={400}
          className='rounded-md h-2'
        />
      </Link>
    </div> */}
    </>
  )
}
