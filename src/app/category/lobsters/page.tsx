import React from 'react'
import { seafoods } from '@/app/page'
import Image from 'next/image'
import Link from 'next/link'

const seafoodsCards = seafoods.filter(seafood => seafood.type === 'lobsters')

export default function Page() {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4'>
      {seafoodsCards.map((seafood:any, index:any) => (
        <div key={index} className="text-center">
          <Link href={`/seafoods/${seafood.name}`}>
          <Image 
            src={`/images/${seafood.name}.jpg`}
            alt={seafood.name}
            width={300}
            height={600}
            className='h-[400px] rounded-md'
          />
          </Link>
          <h2 className='capitalize'>{seafood.name}</h2>
          <h2>&#8358;{seafood.price}</h2>
          <Link href='/'>
            <button className='bg-[#3498db] rounded-md px-5 py-2 hover:bg-slate-950 hover:text-white'>Details</button>
          </Link>
        </div>
      ))}
    </div>
  )
}
