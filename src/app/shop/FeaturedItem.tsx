import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { seafoods } from '../page';

type seafoodProps = {
    products: {
      name: string,
      type: string,
      description: string,
      id: number,
      price: number
    }[]
  };

export default function FeaturedItem({products}:seafoodProps) {

  // const featuredItem = seafoods.Math.random(Image)((product:seafoodProps) => product.name);
  const excludedItem =  {
    name: "trout",
    type: "fish",
    description: "Freshwater fish known for its delicate flavor and tender flesh.",
    id: 14,
    price: 5800
  };

  function getFeaturedItem() {
    const filteredSeafoods = seafoods.filter(products => products !== excludedItem);
    const randomIndex = Math.floor(Math.random() * filteredSeafoods.length);
    return filteredSeafoods[randomIndex];
  }
    
  return (
    <>
    <div className="m-auto py-[60px]">{seafoods.map(seafoodArray, index)

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
    </div>
    </>
  )
}
