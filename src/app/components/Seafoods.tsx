import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type seafoodProps = {
  products: {
    name: string,
    type: string,
    description: string,
    id: number,
    price: number
  }[]
}; //why the []?

export default function Seafoods({products}:seafoodProps) {
    const seafoodCards = products.slice(0, 3) 
  return (
    <section className='w-4/5 m-auto py-8 flex flex-col gap-y-4'>
      <h2 className='font-semibold'>Seafood products</h2>
      <h3 className='text-5xl font-bold'>Open 24 / 7 / 365</h3>
      <aside className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4'>{seafoodCards.map((seafood:any, index:any) => (
          <div key={index} className='text-center'>
            <Link href={`/seafoods/${seafood.name}`}>
                <Image 
                  src={`/images/${seafood.name}.jpg`} 
                  alt={seafood.name} 
                  width={400} 
                  height={500} 
                  className='h-[400px] rounded-md'
                />
            </Link>
            <h2 className='capitalize'>{seafood.name}</h2>
            <h2>&#8358;{seafood.price}</h2>
            <Link href='/'>
              <button className='bg-[#3498db] rounded-md px-5 py-2 hover:bg-black hover:text-white'>Details</button>
            </Link>
          </div>
        ))}
      </aside>
      
      {/* This button occurs outside the map loop in order to prevent the occurence of multiple buttons */}
        <Link href='/shop'>
        <button className='text-center w-1/4 m-auto block bg-slate-900 hover:bg-[#3498db] text-white rounded-md p-3 mt-5'>
          <span>Checkout our seafood</span>
        </button>
        </Link>
    </section>
  )
} 
