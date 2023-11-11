import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { seafoods } from '../page'

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
      <Link href={`/`}>
      <Image
      src={`/images/crawfish.jpg`}
      alt='crawfish'
      width={1200}
      height={320}
      className='rounded-md mx-auto mt-[80px] h-80'
      />
      </Link>
      <button className='border rounded-md px-2 relative left-[1075px] bg-white text-black bottom-72 py-1'>Featured Item</button>
      <aside className='relative left-[200px] bottom-[120px]'>
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
