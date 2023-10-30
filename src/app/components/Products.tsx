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

const seafoods = [
  {
    id: 1,
    name: "crayfish",
    description: "Delicious, small crustaceans that add a mouthwatering aroma and flavor to dishes.",
    examples:["crayfish"]
  },
  {
    id: 2,
    name: "scallops",
    description: "Fresh fresh and flavorful scallops, a seafood delicacy when cooked, fried or grilled.",
    examples:["scallops"]
  },
  {
    id: 3,
    name: "lobsters",
    description: "Indulge in succulent Lobsters, a delicacy for any occasion.",
    examples:["african_lobster"]
  },
  {
    id: 4,
    name: "fish",
    description: "Tender and fresh fish, perfect for grilling, frying and boiling!",
    examples:["barracuda","tilapia","trout","croaker","catfish","rainbow_tilapia"]
  },
  {
    id: 5,
    name: "oysters",
    description: "Briny and refreshing fresh oysters, ideal for raw seafood enthusiasts.",
    examples:["oysters"]
  },
  {
    id: 6,
    name: "prawns",
    description: "Succulent Prawns, can be marinated in garlic and butter, ready to cook.",
    examples:["tiger_prawns","river_prawns"]
  },
  {
    id: 7,
    name: "crabs",
    description: "Premium crab meat known for its sweet flavor and tenderness.",
    examples:["mud_crabs","blue_swimmer_crab","rock_crab"]
  },
  {
    id: 8,
    name: "squids",
    description: "Tender Ring Squid can be cooked in a delectable white wine and garlic sauce.",
    examples:["ring_squid"]
  },
  {
    id: 9,
    name: "crawfish",
    description: "Small, freshwater crustaceans similar to small lobsters, often used in stews and soups..",
    examples:["crawfish"]
  },
  {
    id: 10,
    name: "snails",
    description: "Tender Giant Snail, ideal for frying, grilling or adding to soups.",
    examples:["giant_snail"]
  },
  {
    id: 11,
    name: "seafood_ink",
    description: "Exquisite seafood Ink perfect for cooking gastronomic Pasta!, creating a unique and flavorful dish.",
    examples:["african_squid_ink","cuttlefish_ink"]
  }
];