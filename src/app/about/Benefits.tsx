'use server'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { BiMessage } from 'react-icons/bi'
import { FiTruck } from 'react-icons/fi'
import { RiVerifiedBadgeLine } from 'react-icons/ri'
import Image from 'next/image'
import styles from '../components/components.module.css'


const benefits = [
    {
        id: 1,
        title: "Lifetime Warranty",
        image: RiVerifiedBadgeLine ,
        statement: "All our products — whether we make them or not — are backed by our lifetime warranty."
    },
    {
        id: 2,
        title: "Shopping Experience",
        image: FaShoppingCart ,
        statement: "All our products — whether we make them or not — are backed by our lifetime warranty."
    },
    {
        id: 3,
        title: "On-time Delivery",
        image: FiTruck ,
        statement: "All our products — whether we make them or not — are backed by our lifetime warranty."
    },
    {
        id: 4,
        title: "Best in Class Service",
        image: BiMessage ,
        statement: "All our products — whether we make them or not — are backed by our lifetime warranty."
    }
]

const benefitsGrid = benefits.map((grid) => (
    <aside key={grid.id}>
        <Image 
            src={grid.image} 
            alt={grid.title}
            width={50}
            height={40}
        />
        <h3>{grid.title}</h3>
        <p>{grid.statement}</p>
    </aside>
))

export default function Benefits() {
  return (
    <section className={`w-[80%] m-auto ${styles.support}`}>
      <h2 className="px-[2em] py-3 border-l-8 border-solid border-l-[#3498db] my-6">Benefits</h2>

      <section className="grid sm:grid-cols-3 grid-cols-1 gap-[50px]">
        {benefitsGrid}
      </section>
    </section>
  )
}
