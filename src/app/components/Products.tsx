import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './components.module.css'

export default function Products() {
  return (
    <>
    <div className='border-l-8 border-solid border-l-[#3498db] mx-[10em] px-[2em] py-3 my-6'>
      <p className={`${styles.para}`}>SHOP PRODUCTS</p>
      <h2 className={`${styles.product}`}>Open 24/7/365.</h2>
    </div>
    <section className='flex flex-row w-[80%] m-auto items-center space-x-4 '>
      <div className="py-8">
        <Image src='/images/kingcrab_legs.jpg' alt='kingcrab_legs' width={400} height={400} className='rounded-md'/>
        <div className="mx-[10em]">
          <h2>Product</h2>
          <p>$123</p>
          <button className='bg-[#3498db] px-4 py-1 mt-4 rounded-md text-white font-semibold hover:bg-black hover:border'>
              <Link href=''>Details</Link>
          </button>
        </div>
      </div>
      <div className="py-8 items-center">
        <Image src='/images/crabs.jpg' alt='crabs' width={400} height={400} className='rounded-md'/>
        <div className="mx-[10em]">
          <h2>Product</h2>
          <p>$123</p>
          <button className='bg-[#3498db] px-4 py-1 mt-4 rounded-md text-white font-semibold hover:bg-black hover:border'>
              <Link href=''>Details</Link>
          </button>
        </div>
      </div>
      <div className="py-8 items-center">
        <Image src='/images/crawfish.jpg' alt='crawfish' width={400} height={400} className='rounded-md'/>
        <div className="mx-[10em]">
        <h2>Product</h2>
        <p>$123</p>
        <button className='bg-[#3498db] px-4 py-1 mt-4 rounded-md text-white font-semibold hover:bg-black hover:border'>
            <Link href=''>Details</Link>
        </button>
        </div>
      </div>      
    </section>
    <div className="flex items-centre m-auto">
        <button className='bg-black border hover:bg-[#3498db]  hover:border-0 rounded-md px-4 py-2 mx-auto'>View All Products</button>
      </div>
    </>
  )
}